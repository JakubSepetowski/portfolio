import { Player } from '@lottiefiles/react-lottie-player';
import mail from '../../assets/lotties/mail.json';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { goRight, goUpAnim, titleAnim } from '../../animation/animations';
import { Form, Formik, Field } from 'formik';
import { Popup } from './Popup';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const key = import.meta.env.VITE_PUBLIC_KEY;

export const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isFormSend, setIsFormSend] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [name, setName] = useState('');

	const onCloseHandler = () => {
		setIsFormSubmitted(false);
	};

	const sendEmail = async () => {
		try {
			const res = await emailjs.sendForm(service, template, form.current!, key);
			if (res.text === 'OK') setIsFormSend(true);
		} catch (err) {
			setIsFormSend(false);
		}

		setIsFormSubmitted(true);
		setIsSending(false);
	};
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				message: '',
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(3, 'Name must be at least 3 characters long')
					.required('Name is required'),
				email: Yup.string()
					.email('Email address must be valid')
					.required('Emaill addres is required'),
				message: Yup.string()
					.min(10, 'Your message must be at least 20 characters long ')
					.max(400, 'Your message must be 400 characters or less long')
					.required('Message is required'),
			})}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setSubmitting(false);
				setName(values.name);
				setIsSending(true);
				sendEmail();
				resetForm();
			}}>
			{(formik) => {
				return (
					<main className='w-full h-screen overflow-hidden relative'>
						<div className='mx-auto h-full w-full max-w-7xl p-8  flex flex-col md:flex-row justify-center items-center'>
							<Form ref={form} className='w-full md:w-1/2'>
								<motion.p variants={goRight} className='text-sm lg:text-base text-neutral-300'>
									email
								</motion.p>
								<motion.h1
									variants={titleAnim}
									className='mb-4 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>
									Send me a message!
								</motion.h1>
								<motion.div variants={goUpAnim} className='flex flex-col border-b '>
									<label
										className={`${
											formik.touched.name && formik.errors.name ? 'text-red-500' : 'text-white'
										}`}
										htmlFor='name'>
										{formik.touched.name && formik.errors.name ? formik.errors.name : 'Your Name'}
									</label>
									<Field
										placeholder='Jan'
										className='autofill:bg-none bg-transparent focus:outline-none p-1 text-orange-400 placeholder:text-neutral-500 transition-colors duration-200 focus:bg-neutral-700'
										type='text'
										name='name'
									/>
								</motion.div>

								<motion.div variants={goUpAnim} className='flex flex-col mt-2 border-b'>
									<label
										className={`${
											formik.touched.email && formik.errors.email ? 'text-red-500' : 'text-white'
										}`}
										htmlFor='email'>
										{formik.touched.email && formik.errors.email
											? formik.errors.email
											: 'Your Email'}
									</label>

									<Field
										placeholder='jan@email.com'
										className='bg-transparent focus:outline-none text-orange-400 p-1 placeholder:text-neutral-500 transition-colors duration-200 focus:bg-neutral-700'
										type='email'
										name='email'
									/>
								</motion.div>

								<motion.div variants={goUpAnim} className='flex flex-col mt-2'>
									<label
										className={`${
											formik.touched.message && formik.errors.message
												? 'text-red-500'
												: 'text-white'
										}`}
										htmlFor='email'>
										{formik.touched.message && formik.errors.message
											? formik.errors.message
											: 'Your Message'}
									</label>

									<Field
										as='textarea'
										placeholder='some information...'
										className='bg-neutral-800  p-1 rounded-md text-orange-400 focus:outline-none  mt-2 min-h-[40px]  max-h-[130px] md:min-h-[80px]  md:max-h-[200px] placeholder:text-neutral-500 transition-colors duration-200 focus:bg-neutral-700'
										name='message'
										id='message'></Field>
								</motion.div>

								<motion.div variants={goUpAnim} className='w-full text-right mt-5'>
									{!isSending && (
										<button
											disabled={!(formik.dirty && formik.isValid)}
											type='submit'
											className={`transition-colors duration-200 md:text-2xl ${
												!(formik.dirty && formik.isValid) ? 'text-white' : 'text-orange-400'
											}`}>
											Submit
										</button>
									)}
									{isSending && <p className='loading md:text-2xl p-2 text-orange-400'>Sending</p>}
								</motion.div>
							</Form>
							<div className='mt-5 md:mt-0 md:w-1/2'>
								<Player className='w-1/2 max-w-md md:max-w-none' autoplay loop src={mail}></Player>
							</div>
						</div>
						<AnimatePresence>
							{isFormSubmitted && (
								<Popup name={name} isSuccess={isFormSend} onClose={onCloseHandler} />
							)}
						</AnimatePresence>
					</main>
				);
			}}
		</Formik>
	);
};

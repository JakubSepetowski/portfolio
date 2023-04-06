import { Player } from '@lottiefiles/react-lottie-player';
import mail from '../../assets/lotties/mail.json';

export const Form = () => {
	return (
		<main className='w-full h-screen'>
			<div className='mx-auto h-full w-full max-w-7xl p-8 flex flex-col md:flex-row justify-center items-center'>
				<form className='md:w-1/2'>
					<p className='text-sm lg:text-base text-neutral-300'>email</p>
					<h1 className='mb-4 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>
						Send me a message!
					</h1>
					<div className='flex flex-col border-b '>
						<label htmlFor='name'>Your name</label>
						<input
							placeholder='Jan'
							className='bg-transparent focus:outline-none p-1 text-orange-400 placeholder:text-neutral-500'
							type='text'
							id='name'
							name='name'
						/>
					</div>
					<div className='flex flex-col mt-2 border-b'>
						<label htmlFor='email'>Your email</label>
						<input
							placeholder='jan@email.com'
							className='bg-transparent focus:outline-none text-orange-400 p-1 placeholder:text-neutral-500'
							type='text'
							id='email'
							name='emial'
						/>
					</div>
					<div className='flex flex-col mt-2'>
						<label htmlFor='text'>Your message</label>
						<textarea
							placeholder='some information...'
							className='bg-neutral-800  p-1 rounded-md text-orange-400 focus:outline-none  mt-2 min-h-[40px]  max-h-[130px] md:min-h-[80px]  md:max-h-[200px] placeholder:text-neutral-500'
							name='text'
							id='text'></textarea>
					</div>
					<div className='w-full text-right mt-5'>
						<button disabled className='transition-colors duration-200 md:text-2xl'>
							Submit
						</button>
					</div>
				</form>
				<div className='mt-5 md:mt-0 md:w-1/2'>
					<Player className='w-1/2 max-w-md md:max-w-none' autoplay loop src={mail}></Player>
				</div>
			</div>
		</main>
	);
};

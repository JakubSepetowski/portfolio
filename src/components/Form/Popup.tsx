import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import send from '../../assets/lotties/send.json';

interface Props {
	onClose: () => void;
	name: string;
	isSuccess: boolean;
}

export const Popup = ({ onClose, name, isSuccess }: Props) => {
	const onCloseHandler = () => {
		onClose();
	};

	return (
		<motion.div
			key='background'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className='flex justify-center items-center absolute top-0 h-full w-full bg-black bg-opacity-60 z-50'>
			<motion.div
				key='popup'
				initial={{ opacity: 0, y: -450 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
				exit={{ opacity: 0, y: -450, transition: { duration: 0.5 } }}
				className='p-4 md:p-8 w-10/12 md:w-3/5 lg:w-1/3 bg-white text-black rounded-md shadow-lg flex flex-col justify-center items-center text-center relative'>
				<button
					onClick={onCloseHandler}
					className='text-lg md:text-2xl absolute text-white right-0 top-[-40px] '>
					<FontAwesomeIcon icon={faClose} />
				</button>
				{isSuccess && (
					<>
						<h2 className='mt-2 text-xl  md:text-3xl'>
							Thank you <span className='text-orange-400 '>{name}</span> for your message
						</h2>
						<p className='mt-2 text-lg md:text-2xl '>I will contact you as soon as possible!</p>
						<div className='w-32 md:w-52'>
							<Player className='w-full' autoplay keepLastFrame src={send}></Player>
						</div>
					</>
				)}
				{!isSuccess && (
					<>
						<h2 className='mt-2 text-xl  md:text-3xl'>Oops something went wrong..</h2>
						<p className='mt-2 text-lg md:text-2xl '>
							Try again later or send me a message directly at:{' '}
							<span className='text-orange-400'>jakubsepetowskipraca@gmail.com</span>
						</p>
					</>
				)}
			</motion.div>
		</motion.div>
	);
};

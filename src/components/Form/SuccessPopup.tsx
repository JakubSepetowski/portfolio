import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import send from '../../assets/lotties/send.json';
import { titleAnim, fade, goUpAnim, goDownAnim } from '../../animation/animations';

interface Props {
	onClose: () => void;
}

export const SuccessPopup = ({ onClose }: Props) => {
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
				<h2 className='mt-2 text-xl  md:text-3xl'>
					Thank you for your <span className='text-orange-400 '>message</span> and{' '}
					<span className='text-orange-400'>trust</span>
				</h2>
				<p className='mt-2 text-lg md:text-2xl '>I will contact you as soon as possible!</p>
				<div className='w-32 md:w-52'>
					<Player className='w-full' autoplay keepLastFrame src={send}></Player>
				</div>
			</motion.div>
		</motion.div>
	);
};

import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { titleAnim, fade, textAnim, scaleAnim } from '../../animation/animations';

interface Props {
	title: string;
	text: string;
	category: string;
	src: any;
	
}

export const Header = (props: Props) => {
	return (
		<header className='h-screen w-full relative overflow-x-hidden'>
			<div className='w-full h-full max-w-7xl flex flex-col md:flex-row justify-center items-center p-8  mx-auto'>
				<div className='md:w-1/2 self-start md:self-auto'>
					<motion.p variants={fade} className='text-sm lg:text-base text-neutral-300'>{props.category}</motion.p>
					<motion.h1 variants={titleAnim} className='mb-4 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>{props.title}</motion.h1>
					<motion.p variants={textAnim} className='md:text-lg lg:text-xl'>{props.text}</motion.p>
				</div>
				<motion.div variants={scaleAnim} className=' w-11/12 md:w-1/2'>
					<Player  className='w-full max-w-md md:max-w-none' autoplay loop src={props.src}></Player>
				</motion.div>
			</div>
			
		</header>
	);
};

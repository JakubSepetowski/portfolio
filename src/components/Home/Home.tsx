import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import Laptop from '../../assets/lotties/laptop.json';
import { motion } from 'framer-motion';
import { fade, titleAnim ,scaleAnim ,} from '../../animation/animations';

export const Home = () => {
	return (
		<header className='h-screen w-full overflow-x-hidden relative  '>
			<div className='max-w-7xl w-full h-full flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between mx-auto p-4 md:p-8 '>
				<div className='lg:w-1/2 '>
					<motion.h1 variants={titleAnim} className=' text-3xl text-center md:text-4xl lg:text-left lg:text-5xl xl:text-6xl '>
						I am here to make your <span className='text-orange-400 '>dreams</span> come true.
					</motion.h1>
					<motion.div variants={fade} className='mt-6 text-center md:text-2xl md:mt-10 lg:text-left lg:mt-14 lg:text-2xl'>
						<Link
							to={'about'}
							className='transition-colors duration-200 border-2  p-1 pl-3 pr-3 lg:p-2 lg:pl-5 lg:pr-5 border-orange-400 rounded-lg hover:border-purple-500 '>
							See more
						</Link>
						<Link
							className=' ml-4 lg:ml-10 transition-colors duration-200 border-2 p-1 pl-3 pr-3 lg:p-2 lg:pl-5 lg:pr-5 border-orange-400 rounded-lg hover:border-purple-500 '
							to={'contact'}>
							Contact me
						</Link>
					</motion.div>
				</div>
				<motion.div variants={scaleAnim} className='test flex justify-center items-center mt-10 w-full lg:w-1/2 lg:ml-10 lg:mt-0'>
					<Player autoplay loop src={Laptop}></Player>
				</motion.div>
			
			</div>
		</header>
	);
};

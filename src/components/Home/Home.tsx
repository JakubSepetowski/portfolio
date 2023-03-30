import { Link } from 'react-router-dom';
import { NavContext } from '../../store/nav-context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import Laptop from '../../assets/lotties/laptop.json';

export const Home = () => {
	const { toggleNav, isOpen } = useContext(NavContext);
	const toggleNavHandler = () => {
		toggleNav();
	};

	const titleAnimation = {
		hidden: { opacity: 0, x: 100 },
		show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
	};
	const laptopAnimation = {
		hidden: { opacity: 0, y: 100 },
		show: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1 } },
	};
	const linksAnimation = {
		hidden: { opacity: 0, y: 100 },
		show: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 2 } },
	};
	const navBtnAnimation = {
		hidden: { opacity: 0, pointerEvents: 'none' as const },
		show: { opacity: 1, pointerEvents: 'all' as const, transition: { duration: 1.5, delay: 3 } },
	};

	return (
		<header className='h-screen w-full overflow-x-hidden '>
			<div className='max-w-7xl w-full h-full flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between mx-auto p-4 md:p-8 '>
				<motion.button
					variants={navBtnAnimation}
					initial='hidden'
					animate='show'
					onClick={toggleNavHandler}
					className={`fixed top-2 left-2 z-50 text-xl p-2 transition-colors duration-200 md:hidden ${
						isOpen ? 'text-black' : 'text-white'
					}`}>
					<FontAwesomeIcon icon={isOpen ? faClose : faBars} />
				</motion.button>
				<div className='lg:w-1/2 '>
					<motion.h1
						variants={titleAnimation}
						initial='hidden'
						animate='show'
						className='text-3xl text-center md:text-4xl lg:text-left lg:text-5xl xl:text-6xl '>
						I am here to make your <span className='text-orange-400 '>dreams</span> come true.
					</motion.h1>
					<motion.div
						variants={linksAnimation}
						initial='hidden'
						animate='show'
						className='mt-6 text-center md:text-2xl md:mt-10 lg:text-left lg:mt-14 lg:text-2xl'>
						<Link
							to={'/'}
							className='transition-colors duration-200 border-2  p-1 pl-3 pr-3 lg:p-2 lg:pl-5 lg:pr-5 border-orange-400 rounded-lg hover:border-white hover:text-orange-400'>
							See more
						</Link>
						<Link
							className=' ml-4 lg:ml-10 transition-colors duration-200 border-2 p-1 pl-3 pr-3 lg:p-2 lg:pl-5 lg:pr-5 border-orange-400 rounded-lg hover:border-white hover:text-orange-400'
							to={'/'}>
							Contact me
						</Link>
					</motion.div>
				</div>
				<motion.div
					variants={laptopAnimation}
					initial='hidden'
					animate='show'
					className='test flex justify-center items-center mt-10 w-full lg:w-1/2 lg:ml-10 lg:mt-0'>
					<Player autoplay loop src={Laptop}></Player>
				</motion.div>
			</div>
		</header>
	);
};

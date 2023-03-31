import { NavLink } from 'react-router-dom';
import { NavContext } from '../../store/nav-context';
import { useContext } from 'react';
import { motion, Variants } from 'framer-motion';

export const Nav = () => {
	const { isOpen, closeNav } = useContext(NavContext);

	const navAnimation: Variants = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 1.5, delay: 2.5 } },
	};
	const closeMoblieNavHandler = () => {
		closeNav();
	};

	return (
		<motion.nav
			variants={navAnimation}
			initial='hidden'
			animate='show'
			className={`w-3/5 fixed bg-transparent md:w-full z-30 md:translate-x-0 transition-transform duration-300 ${
				isOpen ? 'translate-x-0 shadow-md' : 'translate-x-[-105%] shadow-none'
			}`}>
			<div className='w-full h-screen text-black md:text-white bg-white md:bg-inherit md:h-full p-4 md:pl-8 md:pr-8 max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:shadow-none  text-xl md:text-2xl '>
				<NavLink
					to='/'
					className='hidden md:block font-bold text-orange-400 transition-colors duration-200 hover:text-purple-500'>
					&lt;/&gt;
				</NavLink>
				<div className=' flex flex-col md:flex-row gap-6 md:gap-10'>
					<NavLink
						onClick={closeMoblieNavHandler}
						to='/'
						className={({ isActive }) =>
							isActive
								? 'mt-10 md:mt-0 hover:text-orange-400 text-purple-500 transition-colors duration-200'
								: 'mt-10 md:mt-0 hover:text-orange-400 transition-colors duration-200'
						}
						end>
						Home
					</NavLink>
					<NavLink
						onClick={closeMoblieNavHandler}
						to='about'
						className={({ isActive }) =>
							isActive
								? ' hover:text-orange-400 text-purple-500 transition-colors duration-200'
								: ' hover:text-orange-400 transition-colors duration-200'
						}
						end>
						About me
					</NavLink>
					<NavLink
						onClick={closeMoblieNavHandler}
						to='projects'
						className={({ isActive }) =>
							isActive
								? ' hover:text-orange-400 text-purple-500 transition-colors duration-200'
								: ' hover:text-orange-400 transition-colors duration-200'
						}
						end>
						My Projects
					</NavLink>
					<NavLink
						onClick={closeMoblieNavHandler}
						to='contact'
						className={({ isActive }) =>
							isActive
								? ' hover:text-orange-400 text-purple-500 transition-colors duration-200'
								: ' hover:text-orange-400 transition-colors duration-200'
						}
						end>
						Contact me
					</NavLink>
				</div>
			</div>
		</motion.nav>
	);
};

import { Link } from 'react-router-dom';
import { NavContext } from '../../store/nav-context';
import { useContext } from 'react';

export const Nav = () => {
	const { isOpen } = useContext(NavContext);

	return (
		<nav className='w-3/5 fixed bg-transparent md:w-full '>
			<div
				className={`w-full h-screen text-black md:text-white bg-white md:bg-inherit md:h-full p-4 md:pl-8 md:pr-8 max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:shadow-none  text-xl md:text-2xl md:translate-x-0 transition-transform duration-200 ${
					isOpen ? 'translate-x-0 shadow-md' : 'translate-x-[-100%] shadow-none'
				}`}>
				<Link
					to='/'
					className='hidden md:block font-bold text-orange-400 transition-colors duration-200 hover:text-white'>
					&lt;/&gt;
				</Link>
				<div className=' flex flex-col md:flex-row gap-6 md:gap-10'>
					<Link
						to='/'
						className='mt-10 md:mt-0 hover:text-orange-400 transition-colors duration-200'>
						Home
					</Link>
					<Link to='/' className='hover:text-orange-400 transition-colors duration-200'>
						About me
					</Link>
					<Link to='/' className='hover:text-orange-400 transition-colors duration-200'>
						My Projects
					</Link>
					<Link to='/' className='hover:text-orange-400 transition-colors duration-200'>
						Contact me
					</Link>
				</div>
			</div>
		</nav>
	);
};

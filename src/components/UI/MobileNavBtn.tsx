import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NavContext } from '../../store/nav-context';
import { useContext } from 'react';
import { motion, Variants } from 'framer-motion';

export const MoblieNavBtn = () => {
	const { toggleNav, isOpen } = useContext(NavContext);
	const toggleNavHandler = () => {
		toggleNav();
	};

	const navBtnAnimation: Variants = {
		hidden: { opacity: 0, pointerEvents: 'none' },
		show: { opacity: 1, pointerEvents: 'all', transition: { duration: 1.5, delay: 3 } },
	};

	return (
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
	);
};

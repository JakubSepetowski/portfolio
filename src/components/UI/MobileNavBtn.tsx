import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NavContext } from '../../store/nav-context';
import { useContext } from 'react';

export const MoblieNavBtn = () => {
	const { toggleNav, isOpen } = useContext(NavContext);
	const toggleNavHandler = () => {
		toggleNav();
	};

	return (
		<button
			onClick={toggleNavHandler}
			className={`fixed top-2 left-2 z-50 text-xl p-2 transition-colors duration-200 md:hidden ${
				isOpen ? 'text-black' : 'text-white'
			}`}>
			<FontAwesomeIcon icon={isOpen ? faClose : faBars} />
		</button>
	);
};

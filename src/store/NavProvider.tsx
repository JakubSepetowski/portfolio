import { useState } from 'react';
import { NavContext } from './nav-context';

interface Props {
	children: React.ReactNode;
}

export const NavProvider = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavHandler = () => {
		setIsOpen((prev) => !prev);
	};
	const closeNavHandler = () => {
		setIsOpen(false);
	};
	const navContext = {
		isOpen,
		toggleNav: toggleNavHandler,
		closeNav: closeNavHandler,
	};
	return <NavContext.Provider value={navContext}>{props.children}</NavContext.Provider>;
};

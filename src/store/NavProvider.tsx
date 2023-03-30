import { useState } from 'react';
import { NavContext } from './nav-context';

interface Props {
	children: React.ReactNode;
}

export const NavProvider = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavHanndler = () => {
		setIsOpen((prev) => !prev);
	};
	const navContext = {
		isOpen,
		toggleNav: toggleNavHanndler,
	};
	return <NavContext.Provider value={navContext}>{props.children}</NavContext.Provider>;
};

import { useState } from 'react';
import { NavContext } from './nav-context';

interface Props {
	children: React.ReactNode;
}

export const NavProvider = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [hasBgc, sethasBgc] = useState(false);
	const toggleNavHandler = () => {
		setIsOpen((prev) => !prev);
	};
	const closeNavHandler = () => {
		setIsOpen(false);
	};
	const toggleBgcHnalder = (isVisable:boolean) => {
		sethasBgc(isVisable)
	}
	const navContext = {
		isOpen,
		hasBgc,
		toggleNav: toggleNavHandler,
		closeNav: closeNavHandler,
		toggleBgc: toggleBgcHnalder,
	};
	return <NavContext.Provider value={navContext}>{props.children}</NavContext.Provider>;
};

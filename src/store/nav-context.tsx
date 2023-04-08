import React from 'react';

export const NavContext = React.createContext({
	isOpen: false,
	hasBgc: false,
	toggleNav: () => {},
	closeNav: () => {},
	toggleBgc: (isVisable:boolean)=>{}
});

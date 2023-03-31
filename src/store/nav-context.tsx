import React from 'react';

export const NavContext = React.createContext({
	isOpen: false,
	toggleNav: () => {},
	closeNav: () => {},
});

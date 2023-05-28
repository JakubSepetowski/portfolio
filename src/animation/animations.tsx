import { Variants } from 'framer-motion';

export const pageAnimation: Variants = {
	hidden: {
		opacity: 0,
		x: -250,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};
export const techCardAnimation: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
};

export const titleAnim: Variants = {
	hidden: {
		opacity: 0,
		x: 250,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
};
export const goUpAnim: Variants = {
	hidden: {
		opacity: 0,
		y: 250,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
};
export const goDownAnim: Variants = {
	hidden: {
		opacity: 0,
		y: -250,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: 'easeOut',
		},
	},
};
export const goRight: Variants = {
	hidden: {
		opacity: 0,
		x: -250,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
};

export const fade: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.8,
			when: 'beforeChildren',
			staggerChildren: 0.4,
			ease: 'easeOut',
		},
	},
};

export const scaleAnim: Variants = {
	hidden: {
		scale: 1.2,
	},
	show: {
		scale: 1,
		transition: {
			duration: 0.8,
			ease: 'easeOut',
		},
	},
};
export const cardAnim: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

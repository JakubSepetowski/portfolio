import { TechCard } from './TechCard';
import { useScrollAnim } from '../../../hooks/useScrollAnim';
import { AnimationControls, motion } from 'framer-motion';
import { fade } from '../../../animation/animations';

import html from '../../../assets/svg/html.svg';
import css from '../../../assets/svg/css.svg';
import sass from '../../../assets/svg/sass.svg';
import tailwindcss from '../../../assets/svg/tailwindcss.svg';
import bootstrap from '../../../assets/svg/bootstrap.svg';
import js from '../../../assets/svg/js.svg';
import ts from '../../../assets/svg/ts.svg';
import router from '../../../assets/svg/router.svg';
import react from '../../../assets/svg/react.svg';
import redux from '../../../assets/svg/redux.svg';
import firebase from '../../../assets/svg/firebase.svg';
import framerMotion from '../../../assets/svg/framerMotion.svg';
import next from "../../../assets/svg/next.svg"

const techs = [
	{ name: 'HTML', svg: html },
	{ name: 'CSS', svg: css },
	{ name: 'SASS', svg: sass },
	{ name: 'Tailwindcss', svg: tailwindcss },
	{ name: 'Bootstrap', svg: bootstrap },
	{ name: 'JavaScript', svg: js },
	{ name: 'TypeScript', svg: ts },
	{ name: 'React', svg: react },
	{ name: 'React Router', svg: router },
	{ name: 'React Redux', svg: redux },
	{ name: 'Next.js', svg: next },
	{ name: 'Firebase', svg: firebase },
	{ name: 'Framer Motion', svg: framerMotion },
];

export const Techs = () => {
	const [element, controls] = useScrollAnim();
	return (
		<motion.div
			ref={element as React.Ref<HTMLHeadingElement> | undefined}
			variants={fade}
			animate={controls as AnimationControls}
			initial='hidden'
			className=' justify-center mt-20 gap-x-10 gap-y-16 flex flex-wrap'>
			{techs.map((tech) => (
				<TechCard key={tech.name} name={tech.name} svg={tech.svg} />
			))}
		</motion.div>
	);
};

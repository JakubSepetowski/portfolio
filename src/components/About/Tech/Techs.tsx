import { TechCard } from './TechCard';
import html from '../../../assets/svg/html.svg';
import css from '../../../assets/svg/css.svg';
import sass from '../../../assets/svg/sass.svg';
import tailwindcss from '../../../assets/svg/tailwindcss.svg';
import bootstrap from '../../../assets/svg/bootstrap.svg';
import js from '../../../assets/svg/js.svg';
import ts from '../../../assets/svg/ts.svg';
import react from "../../../assets/svg/react.svg"
const techs = [
	{ name: 'html', svg: html },
	{ name: 'css', svg: css },
	{ name: 'sass', svg: sass },
	{ name: 'tailwindcss', svg: tailwindcss },
	{ name: 'react', svg: react },
	{ name: 'bootstrap', svg: bootstrap },
	{ name: 'javaScript', svg: js },
	{ name: 'typeScript', svg: ts },
];

export const Techs = () => {
	return (
		<div className=' justify-center mt-20 gap-10 flex flex-wrap'>
			{techs.map((tech) => (
				<TechCard key={tech.name} name={tech.name} svg={tech.svg} />
			))}
		</div>
	);
};

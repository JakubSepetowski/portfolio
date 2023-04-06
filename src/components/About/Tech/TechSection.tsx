import { Techs } from './Techs';
import { Player } from '@lottiefiles/react-lottie-player';
import fullstack from '../../../assets/lotties/fullstack.json';
import { Section } from '../../common/Section';
import { AnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';
import { fade,textAnim } from '../../../animation/animations';

import { useScrollAnim } from '../../../hooks/useScrollAnim';

export const TechSection = () => {
	const [h2, h2Controlls] = useScrollAnim();
	const [div, divControlls] = useScrollAnim();

	return (
		<Section>
			<motion.h2
				ref={h2 as React.Ref<HTMLHeadingElement> | undefined}
				variants={fade}
				animate={h2Controlls as AnimationControls}
				initial='hidden'
				className='text-center text-orange-400 text-3xl md:text-4xl lg:text-5xl'>
				Technologies I use
			</motion.h2>
			<Techs />
			<motion.div
				ref={div as React.Ref<HTMLHeadingElement> | undefined}
				variants={textAnim}
				animate={divControlls as AnimationControls}
				initial='hidden'>
				<Player className=' md:w-1/2 lg:1/3' autoplay loop src={fullstack}></Player>
			</motion.div>
		</Section>
	);
};

import { Section } from '../../common/Section';
import guitar from '../../../assets/svg/guitar.svg';
import { useScrollAnim } from '../../../hooks/useScrollAnim';
import { AnimationControls, motion } from 'framer-motion';
import { fade, goRight, goUpAnim, titleAnim } from '../../../animation/animations';

export const HobbySection = () => {
	const [div, divControlls] = useScrollAnim(0.2);

	return (
		<Section>
			<motion.div
				ref={div as React.Ref<HTMLHeadingElement> | undefined}
				variants={fade}
				animate={divControlls as AnimationControls}
				initial='hidden'
				className='flex flex-col md:flex-row items-center justify-center w-full h-full overflow-hidden'>
				<div className='md:w-1/2'>
					<motion.p variants={goRight} className='text-sm lg:text-base text-neutral-300'>
						Hobby.
					</motion.p>
					<motion.h2
						variants={titleAnim}
						className='mb-4 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>
						Not just prgramming
					</motion.h2>
					<motion.p variants={goUpAnim} className='md:text-lg lg:text-xl'>
						I love spending time on programming, but it's not the only thing that interests me. I
						also love music, of all kinds. Admittedly, I have no talent for singing, but playing the
						guitar gives me great pleasure. Both classical and electric guitar, but I feel better
						playing at electric one.
					</motion.p>
				</div>
				<motion.div
					variants={fade}
					className='w-1/2 mt-10 md:mt-0 md:w-1/2 flex justify-center items-center'>
					<img className='w-full max-w-md' src={guitar} alt='guitar' />
				</motion.div>
			</motion.div>
		</Section>
	);
};

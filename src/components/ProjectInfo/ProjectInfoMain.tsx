import { AnimationControls, motion } from 'framer-motion';
import { useScrollAnim } from '../../hooks/useScrollAnim';
import { ProjectDetails } from '../../types/types';
import { fade, goRight, titleAnim } from '../../animation/animations';

type Props = {
	details: ProjectDetails;
};

export const ProjectInfoMain = ({ details }: Props) => {
	const [el, elControlls] = useScrollAnim();
	return (
		<motion.main
			ref={el as React.Ref<HTMLHeadingElement> | undefined}
			variants={fade}
			animate={elControlls as AnimationControls}
			initial='hidden'
			className='w-full max-w-7xl mx-auto p-8  text-center overflow-x-hidden'>
			<div className=' mb-8 md:mb-2 text-left'>
				<motion.h2 variants={titleAnim} className='mb-2 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>Description</motion.h2>

				<motion.p variants={goRight} className='md:text-lg lg:text-xl md:w-3/5'>{details.description}</motion.p>
			</div>

			<div className=' mb-8 md:mb-2 text-right'>
				<motion.h2 variants={goRight} className='mb-2  text-3xl  text-orange-400 md:text-4xl lg:text-5xl'>Technologies</motion.h2>
				<motion.p variants={titleAnim} className='md:text-lg lg:text-xl w-full '>{details.technologies.join(' ')}</motion.p>
			</div>

			<div className='mb-8 md:mb-2 text-left'>
				<motion.h2 variants={titleAnim} className='mb-2 text-3xl text-orange-400   md:text-4xl lg:text-5xl'>Links</motion.h2>
				{details.liveLink && (
					<motion.div variants={goRight}>
						<p className='md:text-lg lg:text-xl w-full'>
							Live demo:{' '}
							<a
								className='text-purple-500 hover:text-orange-400 transition-colors duration-200'
								target='_blank'
								href={details.liveLink}>
								click here!
							</a>
						</p>
						<p className='md:text-lg mt-1 lg:text-xl w-full'>
							Repository:{' '}
							<a
								className='text-purple-500 hover:text-orange-400 transition-colors duration-200'
								target='_blank'
								href={details.repoLink}>
								or here!
							</a>
						</p>
					</motion.div>
				)}
				{!details.liveLink && (
					<motion.p variants={goRight} className='md:text-lg lg:text-xl w-full md:w-1/2'>
						Unfortunately, due to the functioning of the api, I do not have a live demo application,
						but instructions on how to check the operation of the site is in the repository{' '}
						<a className='text-purple-500' target='_blank' href={details.repoLink}>
							check here!
						</a>
					</motion.p>
				)}
			</div>
		</motion.main>
	);
};

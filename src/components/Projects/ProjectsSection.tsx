import { Section } from '../common/Section';
import { ProjetCard } from './ProjectCard';
import portfolio from '../../assets/img/portfolioProj.png';
import noted from '../../assets/img/justNotedProj.png';
import form from '../../assets/img/formProj.png';
import rest from '../../assets/img/restProj.png';
import eproduct from '../../assets/img/eprodcutProj.png';
import recipe from '../../assets/img/recipeProj.png';
import travell from '../../assets/img/travellProj.png';
import news from '../../assets/img/newsProj.png';
import { motion, AnimationControls } from 'framer-motion';
import { fade, goRight, titleAnim } from '../../animation/animations';
import { useScrollAnim } from '../../hooks/useScrollAnim';
export const ProjectsSection = () => {
	const [top, topControlls] = useScrollAnim();
	const [main, mainControlls] = useScrollAnim();
	return (
		<Section>
			<motion.div
				className='overflow-x-hidden'
				ref={top as React.Ref<HTMLHeadingElement> | undefined}
				variants={fade}
				animate={topControlls as AnimationControls}
				initial='hidden'>
				<motion.p variants={goRight} className='text-sm lg:text-base text-neutral-300'>
					Passion.
				</motion.p>
				<motion.h2
					variants={titleAnim}
					className='mb-5 text-3xl text-orange-400 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl'>
					Projects
				</motion.h2>
			</motion.div>

			<motion.div
				ref={main as React.Ref<HTMLHeadingElement> | undefined}
				variants={fade}
				animate={mainControlls as AnimationControls}
				initial='hidden'
				className='w-full flex flex-col justify-center gap-5  '>
				<div className='flex flex-wrap md:flex-nowrap gap-5 '>
					<ProjetCard
						isBig={false}
						img={portfolio}
						title='Portfolio'
						text='Is this my personal side?'
					/>
					<ProjetCard
						isBig={true}
						img={noted}
						title='JustNoted'
						text='Do you also like to take notes and personalzation?'
					/>
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5 '>
					<ProjetCard
						isBig={true}
						img={news}
						title='GnNews'
						text="Are you interested in what's happening in the world? Do you like to keep up to date with news in your country?"
					/>
					<ProjetCard
						isBig={false}
						img={form}
						title='Multi step form'
						text='Do you also not like filling out forms?'
					/>
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5'>
					<ProjetCard
						isBig={false}
						img={recipe}
						title='Recipe app'
						text='Do you have a taste for pizza?'
					/>
					<ProjetCard
						isBig={true}
						img={rest}
						title='Rest countries'
						text='Are you planning a trip to a country and want to learn more about it?'
					/>
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5'>
					<ProjetCard
						isBig={true}
						img={travell}
						title='Travel mark'
						text='Do you love to travel and plan every trip? And also do you like to be organized?'
					/>
					<ProjetCard
						isBig={false}
						img={eproduct}
						title='E-product'
						text='Do you love to shop online?'
					/>
				</div>
			</motion.div>
		</Section>
	);
};

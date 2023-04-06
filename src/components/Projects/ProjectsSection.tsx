import { Section } from '../common/Section';
import { ProjetCard } from './ProjectCard';
import form from '../../assets/img/formProj.png';
import rest from '../../assets/img/restProj.png';
import eproduct from '../../assets/img/eprodcutProj.png';
import recipe from '../../assets/img/recipeProj.png';
import travell from '../../assets/img/travellProj.png';
import news from '../../assets/img/newsProj.png';
export const ProjectsSection = () => {
	return (
		<Section>
			<p className='text-sm lg:text-base text-neutral-300'>Passion.</p>
			<h2 className='mb-5 text-3xl text-orange-400 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl'>
				Projects
			</h2>
			<div className='w-full flex flex-col justify-center gap-5 '>
				<div className='flex flex-wrap md:flex-nowrap gap-5 '>
					<ProjetCard
						isBig={true}
						img={news}
						title='GnNews'
						text="Are you interested in what's happening in the world? Do you like to keep up to date with news in your country?"
					/>
					<ProjetCard isBig={false} img={form} title='Multi step form' text='Do you also not like filling out forms?'/>
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5'>
					<ProjetCard
						isBig={false}
						img={recipe}
						title='Recipe app'
						text='Do you have a taste for pizza?'
					/>
					<ProjetCard isBig={true} img={rest} title='Rest countries' text='Are you planning a trip to a country and want to learn more about it?' />
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5'>
					<ProjetCard
						isBig={true}
						img={travell}
						title='Travel mark'
						text='Do you love to travel and plan every trip? And also do you like to be organized?'
					/>
					<ProjetCard isBig={false} img={eproduct} title='E-product' text='Do you love to shop online?' />
				</div>
			</div>
		</Section>
	);
};

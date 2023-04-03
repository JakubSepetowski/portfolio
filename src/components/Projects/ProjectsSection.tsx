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
					<ProjetCard isBig={true} img={news} />
					<ProjetCard isBig={false} img={form} />
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5'>
					<ProjetCard isBig={false} img={recipe} />
					<ProjetCard isBig={true} img={rest} />
				</div>
				<div className='flex flex-wrap md:flex-nowrap gap-5'>
					<ProjetCard isBig={true} img={travell} />
					<ProjetCard isBig={false} img={eproduct} />
				</div>
			</div>
		</Section>
	);
};

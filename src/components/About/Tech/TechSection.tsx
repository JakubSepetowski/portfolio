import { Techs } from './Techs';
import { Player } from '@lottiefiles/react-lottie-player';
import fullstack from '../../../assets/lotties/fullstack.json';
import { Section } from '../../common/Section';


export const TechSection = () => {
	
	return (
		<Section>
			<h2  className='text-center text-orange-400 text-3xl md:text-4xl lg:text-5xl'>
				Technologies I use
			</h2>
			<Techs />
			<Player className=' md:w-1/2 lg:1/3' autoplay loop src={fullstack}></Player>
		</Section>
	);
};

import { Techs } from './Techs';
import { Player } from '@lottiefiles/react-lottie-player';
import fullstack from "../../assets/lotties/fullstack.json"

export const TechSection = () => {
	return (
		<section className='h-screen w-full mt-20 lg:mt-30 '>
			<div className='mx-auto h-full w-full max-w-7xl p-4 md:p-8'>
				<h2 className='text-center text-orange-400 text-3xl md:text-4xl lg:text-5xl'>
					Technologies I use.
				</h2>
				<Techs />
				<div className='mt-20'>
					<h3 className='text-center text-xl md:text-2xl lg:text-3xl'>
						I currently want to focus on node.js and next.js. In the future I would like to develop
						as a <span className='text-purple-500'>full stack developer</span>.
					</h3>
			
					<Player className='w-1/2' autoplay loop src={fullstack}></Player>
				</div>
			</div>
		</section>
	);
};

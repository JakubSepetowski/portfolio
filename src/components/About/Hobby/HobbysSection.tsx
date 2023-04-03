import { Section } from '../../common/Section';
import guitar from '../../../assets/svg/guitar.svg';
import guitrarEffect from '../../../assets/music/guitar-effect.mp3';

export const HobbySection = () => {
	

	const guitarSoundHandler = () => {
	
	};
	return (
		<Section>
			<div className='flex flex-col md:flex-row items-center justify-center w-full h-full'>
				<div className='md:w-1/2'>
					<p className='text-sm lg:text-base text-neutral-300'>Hobby.</p>
					<h2 className='mb-5 text-3xl text-orange-400 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl'>
						Not just prgramming
					</h2>
					<p className='md:text-lg lg:text-xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aut earum ad quia facilis,
						et natus nobis est voluptate quae optio hic aperiam exercitationem dicta cumque a
						sapiente officiis fuga.
					</p>
				</div>
				<div className='w-1/2 mt-10 md:mt-0 md:w-1/3'>
					<img
						onClick={guitarSoundHandler}
						className='transition-all duration-200 hover:rotate-6 cursor-pointer'
						src={guitar}
						alt='guitar'
					/>
				</div>
			</div>
		</Section>
	);
};

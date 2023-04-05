import { Section } from '../../common/Section';
import guitar from '../../../assets/svg/guitar.svg';


export const HobbySection = () => {
	

	const guitarSoundHandler = () => {
	
	};
	return (
		<Section>
			<div className='flex flex-col md:flex-row items-center justify-center w-full h-full '>
				<div className='md:w-1/2'>
					<p className='text-sm lg:text-base text-neutral-300'>Hobby.</p>
					<h2 className='mb-4 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>
						Not just prgramming
					</h2>
					<p className='md:text-lg lg:text-xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aut earum ad quia facilis,
						et natus nobis est voluptate quae optio hic aperiam exercitationem dicta cumque a
						sapiente officiis fuga.
					</p>
				</div>
				<div className='w-1/2 mt-10 md:mt-0 md:w-1/2 flex justify-center items-center'>
					<img
						onClick={guitarSoundHandler}
						className='w-full max-w-md transition-all duration-200 hover:rotate-6 cursor-pointer'
						src={guitar}
						alt='guitar'
					/>
				</div>
			</div>
		</Section>
	);
};

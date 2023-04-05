import { ProjectDetails } from '../../types/types';

type Props = {
	details: ProjectDetails;
};

export const ProjectInfoMain = ({ details }: Props) => {
	return (
		<main className='w-full max-w-7xl mx-auto p-8  text-center'>
			<div className=' mb-8 md:mb-2 text-left'>
				<h2 className='mb-2 text-3xl text-orange-400  md:text-4xl lg:text-5xl'>Description</h2>

				<p className='md:text-lg lg:text-xl md:w-3/5'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci quod
					perspiciatis minima. Officia cumque libero obcaecati iste perferendis reiciendis
					necessitatibus odio quod porro commodi dolorum placeat et ullam eum, qui animi harum!
					Quasi, esse? Consectetur dolorum suscipit ipsum obcaecati.
				</p>
			</div>

			<div className=' mb-8 md:mb-2 text-right'>
				<h2 className='mb-2  text-3xl  text-orange-400 md:text-4xl lg:text-5xl'>Technologies</h2>
				<p className='md:text-lg lg:text-xl w-full '>{details.technologies.join(' ')}</p>
			</div>

			<div className='mb-8 md:mb-2 text-left'>
				<h2 className='mb-2 text-3xl text-orange-400   md:text-4xl lg:text-5xl'>Links</h2>
				{details.liveLink && (
					<>
						<p className='md:text-lg lg:text-xl w-full'>
							Live demo:{' '}
							<a className='text-purple-500 hover:text-orange-400 transition-colors duration-200' target='_blank' href={details.liveLink}>
								cilick here!
							</a>
						</p>
						<p className='md:text-lg mt-1 lg:text-xl w-full'>
							Repository:{' '}
							<a className='text-purple-500 hover:text-orange-400 transition-colors duration-200' target='_blank' href={details.repoLink}>
								or here!
							</a>
						</p>
					</>
				)}
				{!details.liveLink && (
					<p className='md:text-lg lg:text-xl w-full md:w-1/2'>
						Unfortunately, due to the functioning of the api, I do not have a live demo application,
						but instructions on how to check the operation of the site is in the repository:{' '}
						<a className='text-purple-500' target='_blank' href={details.repoLink}>
							chceck here!
						</a>
					</p>
				)}
			</div>
		</main>
	);
};

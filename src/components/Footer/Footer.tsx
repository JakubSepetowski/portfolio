export const Footer = () => {
	return (
		<footer className='w-full bg-neutral-800 mt-10 md:shadow-md'>
			<div className='w-full max-w-7xl p-8 mx-auto flex flex-col md:flex-row justify-center  items-center md:justify-between text-base md:text-lg'>
			
					<p className=' text-center '>
						&copy; 2023 Sepetowski. All rights reserved.
					</p>
			

				<div className='flex flex-col md:flex-row'>
					<div className='flex flex-col items-center justify-center mt-2 md:mt-0  md:mr-10'>
						<p>Music by:</p>
						<div>
							<a
								target='_blank'
								href='https://pixabay.com/pl/users/studiokolomna-2073170/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=136788'>
								<span className='text-orange-400 hover:text-purple-500 transition-colors duration-200'>
									StudioKolomna
								</span>
							</a>{' '}
							from{' '}
							<a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=136788'>
								<span className='text-orange-400 hover:text-purple-500 transition-colors duration-200'>
									PixaBay
								</span>
							</a>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center mt-2 md:mt-0'>
						<p>Icons by:</p>
						<div>
							<a target='_blank' href='https://lottiefiles.com/'>
								{' '}
								<span className='text-orange-400 hover:text-purple-500 transition-colors duration-200'>
									Lotties
								</span>
							</a>
							<a target='_blank' href='https://www.svgrepo.com/'>
								{' '}
								<span className='text-orange-400 hover:text-purple-500 transition-colors duration-200'>
									SvgRepo
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

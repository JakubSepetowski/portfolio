import { Player } from '@lottiefiles/react-lottie-player';
import programming from '../../assets/lotties/programming.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const AboutHeader = () => {
	
	return (
		<header className='h-screen w-full relative'>
			<div className=' flex flex-col items-center justify-center md:flex-row md:items-center w-full h-full max-w-7xl p-4 md:p-8 mx-auto'>
				<div className='p-4  md:w-1/2 '>
					<p className='text-sm lg:text-base text-neutral-300'>About me.</p>
					<h1 className='mb-5 text-3xl text-orange-400 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl'>
						So who am I?
					</h1>
					<p className='md:text-lg lg:text-xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos, cupiditate
						id repellat quae alias ad quo similique ut debitis minima incidunt aperiam eos quidem
						earum numquam eveniet accusamus ea sit a dolores.
					</p>
				</div>
				<div className='w-10/12 p-4 md:w-1/2'>
					<Player autoplay loop src={programming}></Player>
				</div>
			</div>
			<button  className='absolute bottom-5 md:bottom-10 left-1/2 translate-x-[-50%] p-2 animate-pulse  '>
				<FontAwesomeIcon className='text-xl md:text-2xl lg:text-3xl ' icon={faArrowDown} />
			</button>
		</header>
	);
};

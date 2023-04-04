import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
	title: string;
	text: string;
	category: string;
	src: any;
}

export const Header = (props: Props) => {
	return (
		<header className='h-screen w-full relative'>
			<div className='w-full h-full max-w-7xl flex flex-col md:flex-row justify-center items-center p-8  mx-auto'>
				<div className='md:w-1/2'>
					<p className='text-sm lg:text-base text-neutral-300'>{props.category}</p>
					<h1 className='mb-5 text-3xl text-orange-400 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl'>
						{props.title}
					</h1>
					<p className='md:text-lg lg:text-xl'>{props.text}</p>
				</div>
				<div className='md:w-1/2'>
					
					<Player className='w-full max-w-md md:max-w-none' autoplay loop src={props.src}></Player>
				</div>
			</div>
			<button className='absolute bottom-5 md:bottom-10 left-1/2 translate-x-[-50%] p-2 animate-pulse  '>
				<FontAwesomeIcon className='text-xl md:text-2xl lg:text-3xl ' icon={faArrowDown} />
			</button>
		</header>
	);
};

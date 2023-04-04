import { Link } from 'react-router-dom';

interface Props {
	isBig: boolean;
	img: string;
	title: string;
}

export const ProjetCard = (props: Props) => {
	const { isBig } = props;
	return (
		<div
			className={`w-full h-52 md:h-72 lg:h-80 rounded-md overflow-hidden relative transition-transform duration-200 shadow-md hover:scale-[1.02] ${
				isBig ? 'md:grow' : 'md:w-2/3 xl:w-1/3'
			}`}>
			<img className='w-full h-full object-cover' src={props.img} alt='test' />
			<div className='absolute top-0 bg-black bg-opacity-50 h-full w-full flex justify-end items-start flex-col p-4 md:p-8'>
				<h3 className='mb-1 font-bold text-lg md:text-xl lg:text-2xl'>{props.title}</h3>
				<p className='mb-2 text-sm md:text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus nihil dolor id
					totam beatae.
				</p>
				<Link to={`project/${props.title}`} className='uppercase  text-sm md:text-base'>
					Learn more...
				</Link>
			</div>
		</div>
	);
};

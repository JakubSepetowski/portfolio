
interface Props {
	name: string;
	svg: string;
}

export const TechCard = (props: Props) => {
	return (
		<div className='w-20 md:w-24 lg:w-28'>
			<img src={props.svg} alt={props.name} />
		</div>
	);
};

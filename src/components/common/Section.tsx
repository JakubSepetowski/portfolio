interface Props {
	children: React.ReactNode;
}
export const Section = (props: Props) => {
	return (
		<section className='w-full mt-10'>
			<div className='mx-auto h-full w-full max-w-7xl p-8'>{props.children}</div>
		</section>
	);
};

interface Props {
	children: React.ReactNode;
}
export const Section = (props: Props) => {
	return (
		<section className='h-screen w-full mt-20'>
			<div className='mx-auto h-full w-full max-w-7xl p-4 md:p-8'>{props.children}</div>
		</section>
	);
};

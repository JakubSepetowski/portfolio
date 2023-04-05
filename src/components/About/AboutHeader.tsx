import programming from '../../assets/lotties/programming.json';
import { Header } from '../common/Header';

export const AboutHeader = () => {
	return (
		<Header
			title='So who am I?'
			category='About me.'
			link={true}
			src={programming}
			text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos, cupiditate
			id repellat quae alias ad quo similique ut debitis minima incidunt aperiam eos quidem
			earum numquam eveniet accusamus ea sit a dolores.'
		/>
	);
};

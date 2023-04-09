import programming from '../../assets/lotties/programming.json';
import { Header } from '../common/Header';

export const AboutHeader = () => {
	return (
		<Header
			title='So who am I?'
			category='Know me better.'
			src={programming}
			text='Hello! I’m a Jakub Sepetowski - Frontend developer. What can I tell about myself? So, I am a student committed to learning and developing skills in computer science and teamwork. I consider myself an energetic, communicative, but also independent person, which allows me to get great results on projects both when working independently and in teams.'
		/>
	);
};

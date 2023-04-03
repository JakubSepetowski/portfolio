import { AboutHeader } from '../components/About/AboutHeader';
import { HobbySection } from '../components/About/Hobby/HobbysSection';
import { TechSection } from '../components/About/Tech/TechSection';
import { Footer } from '../components/Footer/Footer';

export const AboutPage = () => {
	return (
		<>
			<AboutHeader />
			<TechSection />
			<HobbySection/>
			<Footer/>
		</>
	);
};

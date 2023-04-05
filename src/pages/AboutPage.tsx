import { AboutHeader } from '../components/About/AboutHeader';
import { HobbySection } from '../components/About/Hobby/HobbysSection';
import { TechSection } from '../components/About/Tech/TechSection';
import { Footer } from '../components/Footer/Footer';
import { useScrollTop } from '../hooks/useScrollTop';

export const AboutPage = () => {
	useScrollTop()
	return (
		<>
			<AboutHeader />
			<main>
				<TechSection />
				<HobbySection />
			</main>
			<Footer />
		</>
	);
};

import { AboutHeader } from '../components/About/AboutHeader';
import { HobbySection } from '../components/About/Hobby/HobbysSection';
import { TechSection } from '../components/About/Tech/TechSection';
import { Footer } from '../components/Footer/Footer';
import { useScrollTop } from '../hooks/useScrollTop';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation/animations';

export const AboutPage=()=> {
	useScrollTop();

	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show'>
			<AboutHeader />
			<main>
				<TechSection />
				<HobbySection />
			</main>
			<Footer />
		</motion.div>
	);
}

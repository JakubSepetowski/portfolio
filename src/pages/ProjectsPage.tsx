import { Footer } from '../components/Footer/Footer';
import { ProjectsHeaders } from '../components/Projects/ProjectsHeader';
import { ProjectsSection } from '../components/Projects/ProjectsSection';
import { useScrollTop } from '../hooks/useScrollTop';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation/animations';

 function ProjectsPage  () {
	useScrollTop();
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show'>
			<ProjectsHeaders />
			<main>
				<ProjectsSection />
			</main>
			<Footer />
		</motion.div>
	);
};
export default ProjectsPage
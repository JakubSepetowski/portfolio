import { Footer } from '../components/Footer/Footer';
import { ProjectsHeaders } from '../components/Projects/ProjectsHeader';
import { ProjectsSection } from '../components/Projects/ProjectsSection';
import { useScrollTop } from '../hooks/useScrollTop';

export const ProjectsPage = () => {
	useScrollTop()
	return (
		<>
			<ProjectsHeaders />
			<main>
				<ProjectsSection />
			</main>
			<Footer />
		</>
	);
};

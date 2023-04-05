import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { ProjectDetails } from '../types/types';
import { ProjectInfoHeader } from '../components/ProjectInfo/ProjectInfoHeader';
import { useScrollTop } from '../hooks/useScrollTop';
import { Footer } from '../components/Footer/Footer';

export const getPageData: LoaderFunction = async ({ params }) => {
	const res = await fetch('/projetcsInfo.json');
	const data: ProjectDetails[] = await res.json();
	const projectInfo = data.filter((project) => project.title === params.projectId);
	return projectInfo[0];
};

export const ProjectDetailsPage = () => {
	useScrollTop();
	const projectDetails = useLoaderData() as ProjectDetails;

	return (
		<>
			<ProjectInfoHeader details={projectDetails} />
			<Footer />
		</>
	);
};

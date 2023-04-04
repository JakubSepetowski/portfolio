import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { ProjectDetails } from '../types/types';
import { ProjectInfo } from '../components/ProjectInfo/ProjectInfo';

export const getPageData: LoaderFunction = async ({ params }) => {
	const res = await fetch('/projetcsInfo.json');
	const data: ProjectDetails[] = await res.json();
	const projectInfo = data.filter((project) => project.title === params.projectId);
	return projectInfo[0];
};

export const ProjectDetailsPage = () => {
	const projectDetails = useLoaderData() as ProjectDetails;

	return <ProjectInfo details={projectDetails} />
};

import projects from '../../assets/lotties/projects.json';
import { Header } from '../common/Header';

export const ProjectsHeaders = () => {
	return (
		<Header
			title='My latest projects'
			category='Creativity.'
			link={true}
			src={projects}
			text="The best part of being a programmer is having a real impact on what we create. That's
        why creating projects gives me great joy, watching us start from scratch to create
        something amazing gives me an incredible feeling."
		/>
	);
};

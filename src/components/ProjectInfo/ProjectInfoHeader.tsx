import { ProjectDetails } from '../../types/types';
import { Header } from '../common/Header';
import { Titles } from '../../types/types';
import { ProjectInfoMain } from './ProjectInfoMain';
import countries from '../../assets/lotties/countries.json';
import recipe from '../../assets/lotties/food.json';
import form from '../../assets/lotties/form.json';
import maps from '../../assets/lotties/maps.json';
import news from '../../assets/lotties/news.json';
import shop from '../../assets/lotties/shop.json';
import notes from '../../assets/lotties/notes.json';
import laptop from '../../assets/lotties/laptop.json';
import photo from '../../assets/lotties/photo.json';

type Props = {
	details: ProjectDetails;
};

export const ProjectInfoHeader = ({ details }: Props) => {
	let lottie;
	switch (details.title) {
		case Titles.news:
			lottie = news;
			break;
		case Titles.form:
			lottie = form;
			break;
		case Titles.recipe:
			lottie = recipe;
			break;
		case Titles.countries:
			lottie = countries;
			break;
		case Titles.maps:
			lottie = maps;
			break;
		case Titles.shop:
			lottie = shop;
			break;
		case Titles.portfolio:
			lottie = laptop;
			break;
		case Titles.noted:
			lottie = notes;
			break;
		case Titles.natalia:
			lottie = photo;
	}
	return (
		<>
			<Header title={details.title} category='overview.' text={details.overview} src={lottie} />
			<ProjectInfoMain details={details} />
		</>
	);
};

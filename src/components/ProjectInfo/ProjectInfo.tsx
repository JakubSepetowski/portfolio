import { ProjectDetails } from '../../types/types';
import { Header } from '../common/Header';
import { Titles } from '../../types/types';
import countries from '../../assets/lotties/countries.json';
import recipe from '../../assets/lotties/food.json';
import form from '../../assets/lotties/form.json';
import maps from '../../assets/lotties/maps.json';
import news from '../../assets/lotties/news.json';
import shop from '../../assets/lotties/shop.json';

type Props = {
	details: ProjectDetails;
};


export const ProjectInfo = ({ details }: Props) => {
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
	}
	return (
		<Header
			title={details.title}
			category='text'
			text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos, cupiditate
    id repellat quae alias ad quo similique ut debitis minima incidunt aperiam eos quidem
    earum numquam eveniet accusamus ea sit a dolores.'
			src={lottie}
		/>
	);
};

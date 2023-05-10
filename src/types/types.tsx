export interface ProjectDetails {
	title: string;
	description: string;
	overview: string;
	technologies: string[];
	repoLink: string;
	liveLink: string | null;
}
export enum Titles {
	news = 'GnNews',
	form = 'Multi step form',
	recipe = 'Recipe app',
	countries = 'Rest countries',
	maps = 'Travel mark',
	shop = 'E-product',
	portfolio = 'Portfolio',
	noted = 'JustNoted',
}

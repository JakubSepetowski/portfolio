export interface ProjectDetails {
	title: string;
	description: string;
	technologies: string[];
	repoLink: string;
	liveLink: string | null;

}
export enum Titles {
	news = 'GnNews',
	form = 'Multi step form',
	recipe = 'Recipe app',
	countries = 'Rest countries',
	maps = 'Travell mark',
	shop = 'E-product',
}
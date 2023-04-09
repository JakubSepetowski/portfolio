import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import ProjectDetailsPage, { getPageData } from './pages/ProjectDetalisPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'projects',
				element: <ProjectsPage />,
			},
			{
				path: 'projects/project/:projectId',
				element: <ProjectDetailsPage />,
				loader: getPageData,
			},
			{
				path: 'contact',
				element: <ContactPage />,
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};

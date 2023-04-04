import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { RootLayout } from './pages/RootLayout';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectDetailsPage ,getPageData } from './pages/ProjectDetalisPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
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
				loader: getPageData
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

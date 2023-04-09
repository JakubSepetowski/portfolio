import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RootLayout } from './pages/RootLayout';
import { getPageData } from './pages/ProjectDetalisPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetalisPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: (
			<Suspense>
				<ErrorPage />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: 'about',
				element: (
					<Suspense>
						<AboutPage />
					</Suspense>
				),
			},
			{
				path: 'projects',
				element: (
					<Suspense>
						<ProjectsPage />
					</Suspense>
				),
			},
			{
				path: 'projects/project/:projectId',
				element: (
					<Suspense>
						<ProjectDetailsPage />
					</Suspense>
				),
				loader: getPageData,
			},
			{
				path: 'contact',
				element: (
					<Suspense>
						<ContactPage />
					</Suspense>
				),
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};

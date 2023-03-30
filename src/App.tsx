import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { RootLayout } from './pages/RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [{ index: true, element: <HomePage /> }],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};

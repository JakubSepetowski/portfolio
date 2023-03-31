import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav/Nav';
import { MoblieNavBtn } from '../components/UI/MobileNavBtn';
import { MusicHandler } from '../components/UI/MusicHandler';

export const RootLayout = () => {
	return (
		<>
			<Nav />
			<MoblieNavBtn />
			<Outlet />
			<MusicHandler />
		</>
	);
};

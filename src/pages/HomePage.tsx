import { Home } from '../components/Home/Home';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation/animations';
import { useContext, useEffect } from 'react';
import { NavContext } from '../store/nav-context';

 function HomePage() {
	const { toggleBgc } = useContext(NavContext);
	useEffect(() => {
		toggleBgc(false);
	}, []);
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show'>
			<Home />
		</motion.div>
	);
}
export default HomePage
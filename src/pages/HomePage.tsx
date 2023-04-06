import { Home } from '../components/Home/Home';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation/animations';

export const HomePage = () => {
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show'  >
			<Home  />
		</motion.div>
	);
};

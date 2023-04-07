import { motion } from "framer-motion";
import { Form } from "../components/Form/Form";
import { pageAnimation } from "../animation/animations";

export const ContactPage = () => {
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show' >
			<Form />
		</motion.div>
	);
};

import { motion } from "framer-motion";
import { ContactForm } from "../components/Form/ContactForm";
import { pageAnimation } from "../animation/animations";
import { useContext, useEffect } from "react";
import { NavContext } from "../store/nav-context";

export const ContactPage = () => {
	const { toggleBgc } = useContext(NavContext);
	useEffect(()=>{
		toggleBgc(false)
	},[])
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show' >
			<ContactForm />
		</motion.div>
	);
};

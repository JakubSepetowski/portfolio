import { motion } from "framer-motion";
import { cardAnim} from "../../../animation/animations";

interface Props {
	name: string;
	svg: string;
}

export const TechCard = (props: Props) => {
	
	return (
		<motion.div variants={cardAnim} className='w-20 md:w-24 lg:w-28 duration-200 transition-transform hover:scale-105'>
			<img src={props.svg} alt={props.name} />
		</motion.div>
	);
};

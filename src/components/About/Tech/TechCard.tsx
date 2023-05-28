import { AnimatePresence, motion } from 'framer-motion';
import { cardAnim, techCardAnimation } from '../../../animation/animations';
import { useState } from 'react';

interface Props {
	name: string;
	svg: string;
}

export const TechCard = (props: Props) => {
	const [isHovering, setIsHovering] = useState(false);

	const mouseOverHandler = () => {
		setIsHovering(true);
	};

	const mouseOutHandler = () => {
		setIsHovering(false);
	};

	return (
		<motion.div
			variants={cardAnim}
			className='w-20 md:w-24 lg:w-28 duration-200 transition-transform hover:scale-105 relative cursor-help'
			onMouseOver={mouseOverHandler}
			onTouchStart={mouseOverHandler}
			onMouseOut={mouseOutHandler}
			onTouchEnd={mouseOutHandler}>
			<img src={props.svg} alt={props.name} />
			<AnimatePresence>
				{isHovering && (
					<motion.div
						key={props.name}
						variants={techCardAnimation}
						initial='hidden'
						animate='show'
						exit="exit"
						className='absolute top-[-40px] left-0  text-orange-400 p-  '>
						<p>{props.name}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

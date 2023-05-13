import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollAnim = (threshold = 0.3) => {
	const [element, view] = useInView({ threshold });
	const controls = useAnimation();

	useEffect(() => {
		if (view) {
			controls.start('show');
		}
	}, [view]);

	return [element, controls];
};

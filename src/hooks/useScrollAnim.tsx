import {useEffect} from "react"
import {useInView} from "react-intersection-observer"
import { useAnimation } from "framer-motion";

export const useScrollAnim = () => {
    const [element, view] = useInView({ threshold: 0.3 });
	const controls = useAnimation();

	useEffect(() => {
		if (view) {
			controls.start('show');
		} 
	}, [view]);

    return [element, controls]
}
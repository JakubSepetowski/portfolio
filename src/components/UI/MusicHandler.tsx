import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import music from '../../assets/music/music.mp3';
const audio = new Audio(music);
audio.loop = true;
export const MusicHandler = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (isPlaying) audio.play();
		else audio.pause();
	}, [isPlaying]);

	const playMusicHandler = () => {
		setIsPlaying((prev) => !prev);
	};
	return (
		<div className='fixed bottom-14 right-10'>
			<button
				onClick={playMusicHandler}
				className={`bg-orange-400 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 lg:w-16 lg:h-16 md:p-4 flex justify-center items-center bg-opacity-50 hover:bg-opacity-100 transition-colors duration-300  ${
					!isPlaying ? 'bg-opacity-50' : 'bg-opacity-100'
				} `}>
				<FontAwesomeIcon className='w-full h-full ' icon={isPlaying ? faStop : faPlay} />
			</button>
		</div>
	);
};

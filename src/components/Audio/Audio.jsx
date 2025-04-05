import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import audioFile from '../../assets/Bermuara.mp3';
import './Audio.css';

const Audio = ({ allowedPaths = [] }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();

  const shouldPlay = allowedPaths.includes(location.pathname);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.warn('Gagal play audio:', err));
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!shouldPlay) {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setIsPlaying(false);
      return;
    }

    audio.loop = true;
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    const handleFirstGesture = () => {
      toggleAudio();
      document.removeEventListener('click', handleFirstGesture);
    };

    document.addEventListener('click', handleFirstGesture);

    return () => {
      document.removeEventListener('click', handleFirstGesture);
    };
  }, [location, shouldPlay]);

  if (!shouldPlay) return null;

  return (
    <div className="audio-wrapper" onClick={toggleAudio} title="Toggle Music">
      <audio ref={audioRef} src={audioFile} />
      <img
        src="https://img.icons8.com/ios-filled/50/cd--v1.png"
        alt="Cassette"
        className={`cassette ${isPlaying ? 'spin' : ''}`}
      />
    </div>
  );
};

export default Audio;
import React, { useRef, useEffect } from 'react';

const AudioPlayer = (props) => {
  const { soundFile } = props;
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div id='container-audio'>
      <audio ref={audioRef}>
        <source src={soundFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlay}>Play Audio</button>
      <button onClick={handlePause}>Pause Audio</button>
    </div>
  );
};

export default AudioPlayer;

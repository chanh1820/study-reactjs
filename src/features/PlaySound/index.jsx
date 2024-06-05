import { useEffect,useState  } from "react";
import React from 'react';

const PlaySoundComponent = ({ path }) => {
    const [audio] = useState(new Audio(path));
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasPermission, setHasPermission] = useState(true);
  
    const handlePlaySound = () => {
      audio.muted = false; // Ensure the audio is not muted
      audio.play()
        .then(() => {
          setHasPermission(true);
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Audio playback failed: ", error);
        });
    };
  
    useEffect(() => {
        if (hasPermission) {
          // Auto-play sound when component renders and has permission
          handlePlaySound();
        }
      }, []);
    return (
      <div>
        {!isPlaying && (
          <button onClick={handlePlaySound}>Click to Enable Sound</button>
        )}
      </div>
    );
  };
  
  export default PlaySoundComponent;
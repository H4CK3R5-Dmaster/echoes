import React, { useState, useEffect } from 'react';

const BackgroundMusic = () => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAudio(new Audio('/dodo.mp3')); 
    }
  }, []);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.play().catch((err) => {
        if(err){
            console.log(err)
        }
      })
    }
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  return null;
};

export default BackgroundMusic;

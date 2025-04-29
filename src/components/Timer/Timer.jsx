import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Timer.module.css'; 

export default function Timer({ minutes, onTimeUp }) {
  const { timer } = useSelector((state) => state.input);
  const [timeLeft, setTimeLeft] = useState(timer * 60); 
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    let interval;

    if (timeLeft > 0 && !isTimeUp) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimeUp(true);
      onTimeUp(); 
    }

    return () => clearInterval(interval);
  }, [timeLeft, isTimeUp, onTimeUp]);

  const formatTime = (time) => {
    
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={style.timerContainer}>
      {!isTimeUp ? (
        <div className={style.timer}>
          Time Left: {formatTime(timeLeft)}
        </div>
      ) : (
        <div className={style.timeUp}>Time's Up!</div>
      )}
    </div>
  );
}

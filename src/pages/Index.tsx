
import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import GameArea from '../components/GameArea';

const Index = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState({ stock: 24, thru: 0 });

  useEffect(() => {
    let intervalId: number | undefined;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000) as unknown as number;
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex-1">
        <GameArea />
      </div>
      
      <div className="footer">
        <div className="timer">
          <span>{formatTime(seconds)}</span>
          <button className="play-button" onClick={toggleTimer}>
            {isRunning ? '⏸' : '▶️'}
          </button>
        </div>
        
        <div className="score-display">
          <div className="score-item">
            <div className="score-value">{moves}</div>
            <div className="score-label">Moves</div>
          </div>
          
          <div className="score-item">
            <div className="score-value">{score.stock}</div>
            <div className="score-label">Stock</div>
          </div>
          
          <div className="score-item">
            <div className="score-value">{score.thru}</div>
            <div className="score-label">Passthrus</div>
          </div>
        </div>
        
        <div>
          <span className="text-yellow-400">★</span>
          <button className="hover:underline mr-4">Bookmark us</button>
          <button className="hover:underline">Report bug</button>
        </div>
      </div>
    </div>
  );
};

export default Index;

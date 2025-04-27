
import React from 'react';
import { Undo } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="text-white font-bold">Solitaire</div>
      
      <button className="green-button top-bar-button">New Game</button>
      <button className="green-button top-bar-button">Undo</button>
      <button className="green-button top-bar-button">Hint</button>
      
      <div className="flex-1"></div>
      
      <button className="green-button top-bar-button">Turn 1</button>
      <button className="green-button top-bar-button">Turn 3</button>
      <button className="green-button top-bar-button">More Games</button>
      
      <button className="yellow-button top-bar-button flex items-center gap-1">
        <span className="text-xs">★</span>
        Game of the Day
      </button>
    </div>
  );
};

export default TopBar;


import React from 'react';
import { Undo } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="text-white font-bold">Solitaire</div>
      
      <button className="green-button top-bar-button">Turn 1</button>
      <button className="green-button top-bar-button">Turn 3</button>
      <button className="green-button top-bar-button">More</button>
      
      <button className="green-button top-bar-button">New game</button>
      <button className="green-button top-bar-button">Settings</button>
      
      <button className="yellow-button top-bar-button flex items-center gap-2">
        <span className="material-icons text-sm">calendar_today</span>
        Game of the Day
      </button>
      
      <button className="yellow-button top-bar-button">Hint</button>
      
      <button className="yellow-button top-bar-button flex items-center gap-1">
        <Undo className="w-4 h-4" />
        Undo
      </button>
    </div>
  );
};

export default TopBar;


import React from 'react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="font-bold text-xl mr-4">Solitaire</div>
      
      <button className="top-button green-button mr-1">Turn 1</button>
      <button className="top-button green-button mr-1">Turn 3</button>
      <div className="relative group">
        <button className="top-button green-button">More ▼</button>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="relative group">
        <button className="top-button green-button">New game ▼</button>
      </div>
      
      <div className="relative group">
        <button className="top-button green-button">Settings ▼</button>
      </div>
      
      <button className="top-button yellow-button flex items-center gap-1">
        <span className="text-xs">⬜</span>
        Game of the Day
      </button>

      <button className="top-button hint-button">Hint</button>
      <button className="top-button undo-button">Undo</button>
    </div>
  );
};

export default TopBar;

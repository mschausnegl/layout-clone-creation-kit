
import React from 'react';
import TopBar from '../components/TopBar';
import GameArea from '../components/GameArea';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <GameArea />
      
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-2 text-sm text-white/80">
        <div className="flex items-center gap-2">
          <span>00:00</span>
          <button className="p-1 hover:bg-white/10 rounded">▶</button>
        </div>
        
        <div className="flex items-center gap-4">
          <span>0</span>
          <span>24</span>
          <span>0</span>
          <span>15%</span>
          <span>115</span>
          <div className="flex items-center gap-2">
            <span>Moves</span>
            <span>Stock</span>
            <span>Passtimes</span>
            <span>Shuffle Win %</span>
            <span>AI best moves</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hover:underline">⭐ Bookmark us</button>
          <button className="hover:underline">Report bug</button>
        </div>
      </div>
    </div>
  );
};

export default Index;

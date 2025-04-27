
import React from 'react';
import TopBar from '../components/TopBar';
import GameArea from '../components/GameArea';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <GameArea />
      
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-2 text-sm text-white/80 bg-black/20">
        <div className="flex items-center gap-2">
          <span>00:00</span>
          <button className="p-1 hover:bg-white/10 rounded">▶</button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Moves: 0</span>
            <span>Score: 0</span>
          </div>
        </div>
        
        <div>
          <button className="hover:underline">⚙️ Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Index;

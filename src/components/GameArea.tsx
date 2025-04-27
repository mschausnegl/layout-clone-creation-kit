
import React from 'react';
import Card from './Card';

const GameArea = () => {
  return (
    <div className="p-4">
      <div className="flex gap-4 mb-8">
        {/* Stock pile */}
        <div className="card-pile">
          <Card faceDown className="w-full" />
        </div>
        
        {/* Empty space */}
        <div className="card-pile">
          <div className="card-placeholder w-full"></div>
        </div>

        {/* Foundation piles */}
        <div className="flex-1"></div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="card-pile">
            <div className="card-placeholder w-full opacity-30">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white/20">
                  GAME<br/>OF THE<br/>DAY
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tableau */}
      <div className="flex gap-4">
        <div className="card-pile">
          <Card value="2" suit="spades" className="w-full" />
        </div>
        <div className="card-pile">
          <Card value="9" suit="spades" className="w-full" />
        </div>
        <div className="card-pile">
          <Card value="J" suit="diamonds" className="w-full" />
        </div>
        <div className="card-pile">
          <Card value="9" suit="hearts" className="w-full" />
        </div>
        <div className="card-pile">
          <Card value="8" suit="spades" className="w-full" />
        </div>
        <div className="card-pile">
          <Card value="8" suit="hearts" className="w-full" />
        </div>
        <div className="card-pile">
          <Card value="3" suit="clubs" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default GameArea;

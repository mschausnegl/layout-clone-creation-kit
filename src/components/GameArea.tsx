
import React from 'react';
import Card from './Card';

const GameArea = () => {
  return (
    <div className="game-area">
      {/* Top row: stock, waste and foundation piles */}
      <div className="top-row">
        {/* Stock pile */}
        <div className="card-pile">
          <Card faceDown />
        </div>
        
        {/* Waste pile - empty space */}
        <div className="card-pile">
          <div className="dropzone"></div>
        </div>

        {/* Spacer - adjusted to be smaller */}
        <div className="flex-1 max-w-[100px]"></div>
        
        {/* Foundation piles - 4 of them - positioned closer to the left */}
        <div className="card-pile">
          <div className="dropzone"></div>
        </div>
        <div className="card-pile">
          <div className="dropzone"></div>
        </div>
        <div className="card-pile">
          <div className="dropzone"></div>
        </div>
        <div className="card-pile">
          <div className="dropzone"></div>
        </div>
      </div>

      {/* Bottom row: tableau piles - with proper overlapping */}
      <div className="bottom-row">
        {/* First tableau pile */}
        <div className="tableau-stack">
          <Card value="8" suit="spades" />
        </div>
        
        {/* Second tableau pile */}
        <div className="tableau-stack">
          <Card faceDown style={{ top: 0 }} />
          <Card value="Q" suit="spades" style={{ top: '25px' }} />
        </div>
        
        {/* Third tableau pile */}
        <div className="tableau-stack">
          <Card faceDown style={{ top: 0 }} />
          <Card faceDown style={{ top: '25px' }} />
          <Card value="4" suit="diamonds" style={{ top: '50px' }} />
        </div>
        
        {/* Fourth tableau pile */}
        <div className="tableau-stack">
          <Card faceDown style={{ top: 0 }} />
          <Card faceDown style={{ top: '25px' }} />
          <Card faceDown style={{ top: '50px' }} />
          <Card value="4" suit="hearts" style={{ top: '75px' }} />
        </div>
        
        {/* Fifth tableau pile */}
        <div className="tableau-stack">
          <Card faceDown style={{ top: 0 }} />
          <Card faceDown style={{ top: '25px' }} />
          <Card faceDown style={{ top: '50px' }} />
          <Card faceDown style={{ top: '75px' }} />
          <Card value="J" suit="spades" style={{ top: '100px' }} />
        </div>
        
        {/* Sixth tableau pile */}
        <div className="tableau-stack">
          <Card faceDown style={{ top: 0 }} />
          <Card faceDown style={{ top: '25px' }} />
          <Card faceDown style={{ top: '50px' }} />
          <Card faceDown style={{ top: '75px' }} />
          <Card faceDown style={{ top: '100px' }} />
          <Card value="2" suit="clubs" style={{ top: '125px' }} />
        </div>
        
        {/* Seventh tableau pile */}
        <div className="tableau-stack">
          <Card faceDown style={{ top: 0 }} />
          <Card faceDown style={{ top: '25px' }} />
          <Card faceDown style={{ top: '50px' }} />
          <Card faceDown style={{ top: '75px' }} />
          <Card faceDown style={{ top: '100px' }} />
          <Card faceDown style={{ top: '125px' }} />
          <Card value="9" suit="clubs" style={{ top: '150px' }} />
        </div>
      </div>
    </div>
  );
};

export default GameArea;

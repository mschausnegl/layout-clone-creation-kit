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
        
        {/* Waste pile */}
        <div className="card-pile">
          <Card value="K" suit="hearts" className="w-full" />
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Foundation piles */}
        <div className="card-pile">
          <div className="card-placeholder w-full"></div>
        </div>
        <div className="card-pile">
          <Card value="A" suit="hearts" className="w-full" />
        </div>
        <div className="card-pile">
          <div className="card-placeholder w-full"></div>
        </div>
        <div className="card-pile">
          <div className="card-placeholder w-full"></div>
        </div>
      </div>

      {/* Tableau */}
      <div className="flex gap-4">
        {/* First pile - cascading cards */}
        <div className="card-pile">
          <div className="relative">
            <Card value="9" suit="clubs" className="w-full" />
            <Card value="8" suit="diamonds" className="w-full absolute top-5" />
            <Card value="7" suit="clubs" className="w-full absolute top-10" />
          </div>
        </div>
        
        {/* Other tableau piles */}
        <div className="card-pile">
          <div className="relative">
            <Card faceDown className="w-full" />
            <Card value="Q" suit="spades" className="w-full absolute top-5" />
          </div>
        </div>
        
        <div className="card-pile">
          <div className="relative">
            <Card faceDown className="w-full" />
            <Card faceDown className="w-full absolute top-5" />
            <Card value="J" suit="diamonds" className="w-full absolute top-10" />
          </div>
        </div>
        
        <div className="card-pile">
          <div className="relative">
            <Card faceDown className="w-full" />
            <Card faceDown className="w-full absolute top-5" />
            <Card faceDown className="w-full absolute top-10" />
            <Card value="10" suit="hearts" className="w-full absolute top-15" />
          </div>
        </div>
        
        <div className="card-pile">
          <div className="relative">
            <Card faceDown className="w-full" />
            <Card faceDown className="w-full absolute top-5" />
            <Card faceDown className="w-full absolute top-10" />
            <Card faceDown className="w-full absolute top-15" />
            <Card value="2" suit="spades" className="w-full absolute top-20" />
          </div>
        </div>
        
        <div className="card-pile">
          <div className="relative">
            <Card faceDown className="w-full" />
            <Card faceDown className="w-full absolute top-5" />
            <Card faceDown className="w-full absolute top-10" />
            <Card faceDown className="w-full absolute top-15" />
            <Card faceDown className="w-full absolute top-20" />
            <Card value="6" suit="clubs" className="w-full absolute top-25" />
          </div>
        </div>
        
        <div className="card-pile">
          <div className="relative">
            <Card faceDown className="w-full" />
            <Card faceDown className="w-full absolute top-5" />
            <Card faceDown className="w-full absolute top-10" />
            <Card faceDown className="w-full absolute top-15" />
            <Card faceDown className="w-full absolute top-20" />
            <Card faceDown className="w-full absolute top-25" />
            <Card value="5" suit="hearts" className="w-full absolute top-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameArea;

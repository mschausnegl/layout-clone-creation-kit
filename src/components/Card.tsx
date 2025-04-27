
import React from 'react';

interface CardProps {
  suit?: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value?: string;
  faceDown?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ suit, value, faceDown = false, className = '' }) => {
  if (faceDown) {
    return (
      <div className={`playing-card ${className}`}>
        <img 
          src="/lovable-uploads/498fa9b1-35be-460c-a3ae-db4c33540879.png" 
          alt="Card back"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const isRed = suit === 'hearts' || suit === 'diamonds';
  const suitSymbol = 
    suit === 'hearts' ? '♥' : 
    suit === 'diamonds' ? '♦' : 
    suit === 'clubs' ? '♣' : '♠';
  
  return (
    <div className={`playing-card bg-white relative ${className}`}>
      <div className={`absolute top-1 left-1 flex flex-col items-center ${isRed ? 'text-red-600' : 'text-black'}`}>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-lg">{suitSymbol}</div>
      </div>
      
      <div className={`absolute bottom-1 right-1 flex flex-col items-center rotate-180 ${isRed ? 'text-red-600' : 'text-black'}`}>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-lg">{suitSymbol}</div>
      </div>
      
      {(suit === 'hearts' || suit === 'diamonds' || suit === 'clubs' || suit === 'spades') && (
        <div className={`absolute inset-0 flex items-center justify-center text-4xl ${isRed ? 'text-red-600' : 'text-black'}`}>
          {suitSymbol}
        </div>
      )}
    </div>
  );
};

export default Card;

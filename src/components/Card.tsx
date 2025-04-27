
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
  
  return (
    <div className={`playing-card bg-white ${className}`}>
      <div className={`p-1 text-lg font-bold ${isRed ? 'text-red-600' : 'text-black'}`}>
        {value}
        <span>{suit === 'hearts' ? '♥' : suit === 'diamonds' ? '♦' : suit === 'clubs' ? '♣' : '♠'}</span>
      </div>
    </div>
  );
};

export default Card;

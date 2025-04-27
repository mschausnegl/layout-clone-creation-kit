
import React from 'react';
import { Heart, Club, Diamond, Spade } from 'lucide-react';

interface CardProps {
  suit?: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value?: string;
  faceDown?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
}

const Card: React.FC<CardProps> = ({ 
  suit, 
  value, 
  faceDown = false, 
  className = '', 
  style = {}, 
  onClick,
  draggable = false,
  onDragStart,
  onDrop,
  onDragOver
}) => {
  if (faceDown) {
    return (
      <div 
        className={`playing-card card-back ${className}`} 
        style={style}
        onClick={onClick}
      >
        <div className="card-pattern"></div>
      </div>
    );
  }

  const isRed = suit === 'hearts' || suit === 'diamonds';
  const colorClass = isRed ? 'card-red' : 'card-black';
  
  const getSuitSymbol = () => {
    if (suit === 'hearts') return '♥';
    if (suit === 'diamonds') return '♦';
    if (suit === 'clubs') return '♣';
    return '♠';
  };

  const suitSymbol = getSuitSymbol();
  
  // Generate card content based on value
  const renderCardContent = () => {
    // Handle face cards (Jack, Queen, King, Ace)
    if (['J', 'Q', 'K', 'A'].includes(value || '')) {
      return <div className={`card-center ${colorClass} face-card`}>{value}</div>;
    }

    // For number cards
    const numericValue = parseInt(value || '0', 10);
    if (isNaN(numericValue) || numericValue === 0) return null;

    // Generate patterns based on the card value
    let symbols = [];
    for (let i = 0; i < numericValue; i++) {
      symbols.push(
        <div key={i} className="suit-symbol">
          {suitSymbol}
        </div>
      );
    }

    // Arrange symbols in a pattern
    return (
      <div className={`card-center ${colorClass} number-card number-${numericValue}`}>
        {symbols}
      </div>
    );
  };
  
  return (
    <div 
      className={`playing-card bg-white ${className} ${draggable ? 'draggable' : ''}`} 
      style={style}
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <div className={`card-top-left ${colorClass}`}>
        <div className="card-value">{value}</div>
        <div className="card-suit">{suitSymbol}</div>
      </div>
      
      {renderCardContent()}
      
      <div className={`card-bottom-right ${colorClass}`}>
        <div className="card-value">{value}</div>
        <div className="card-suit">{suitSymbol}</div>
      </div>
    </div>
  );
};

export default Card;

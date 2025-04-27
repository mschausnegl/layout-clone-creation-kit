
import React from 'react';

interface CardProps {
  suit?: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value?: string;
  faceDown?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ suit, value, faceDown = false, className = '', style = {} }) => {
  if (faceDown) {
    return (
      <div className={`playing-card card-back ${className}`} style={style}>
        <div className="card-logo">♠♥</div>
      </div>
    );
  }

  const isRed = suit === 'hearts' || suit === 'diamonds';
  const colorClass = isRed ? 'card-red' : 'card-black';
  
  const suitSymbol = 
    suit === 'hearts' ? '♥' : 
    suit === 'diamonds' ? '♦' : 
    suit === 'clubs' ? '♣' : '♠';
  
  // For face cards we need special rendering
  const isFaceCard = ['J', 'Q', 'K'].includes(value || '');
  
  return (
    <div className={`playing-card bg-white ${className}`} style={style}>
      <div className={`card-top-left ${colorClass}`}>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-lg">{suitSymbol}</div>
      </div>
      
      <div className={`card-bottom-right ${colorClass}`}>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-lg">{suitSymbol}</div>
      </div>
      
      {!isFaceCard && (
        <div className={`card-center ${colorClass}`}>
          {suit === 'hearts' || suit === 'diamonds' ? (
            <div className="flex flex-wrap justify-center">
              {value === '4' && (
                <>
                  <div className="w-1/2 text-center">{suitSymbol}</div>
                  <div className="w-1/2 text-center">{suitSymbol}</div>
                  <div className="w-1/2 text-center">{suitSymbol}</div>
                  <div className="w-1/2 text-center">{suitSymbol}</div>
                </>
              )}
              {value === '9' && (
                <>
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="text-center mx-1">{suitSymbol}</div>
                  ))}
                </>
              )}
              {value === '2' && (
                <>
                  <div className="w-full text-center">{suitSymbol}</div>
                  <div className="w-full text-center">{suitSymbol}</div>
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {value === '8' && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="text-center mx-1">{suitSymbol}</div>
                  ))}
                </>
              )}
              {value === '2' && (
                <>
                  <div className="w-full text-center">{suitSymbol}</div>
                  <div className="w-full text-center">{suitSymbol}</div>
                </>
              )}
              {value === '9' && (
                <>
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="text-center mx-1">{suitSymbol}</div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;

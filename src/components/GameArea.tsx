
import React, { useState } from 'react';
import Card from './Card';

interface CardData {
  id: string;
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
  faceDown: boolean;
}

const GameArea: React.FC = () => {
  const [draggedCard, setDraggedCard] = useState<string | null>(null);

  // Handler for drag start
  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    setDraggedCard(cardId);
    e.dataTransfer.setData('text/plain', cardId);
    e.dataTransfer.effectAllowed = 'move';
  };

  // Handler for drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // Handler for drop event
  const handleDrop = (e: React.DragEvent, targetPileId: string) => {
    e.preventDefault();
    if (!draggedCard) return;
    
    const cardId = e.dataTransfer.getData('text/plain');
    console.log(`Moved card ${cardId} to ${targetPileId}`);
    // Here you would update your game state - for now just logging
    
    setDraggedCard(null);
  };

  // Handle card click for auto-moves
  const handleCardClick = (cardId: string) => {
    console.log(`Clicked card: ${cardId}`);
    // Implement auto-move logic here
  };

  return (
    <div className="game-area">
      {/* Top row: stock, waste and foundation piles */}
      <div className="top-row">
        {/* Stock pile */}
        <div 
          className="card-pile stock-pile"
          onDrop={(e) => handleDrop(e, 'stock')}
          onDragOver={handleDragOver}
        >
          <Card 
            faceDown 
            onClick={() => console.log('Drew card from stock')}
          />
        </div>
        
        {/* Waste pile */}
        <div 
          className="card-pile waste-pile"
          onDrop={(e) => handleDrop(e, 'waste')}
          onDragOver={handleDragOver}
        >
          <div className="dropzone"></div>
        </div>

        {/* Spacer - adjusted to be smaller */}
        <div className="flex-1 max-w-[100px]"></div>
        
        {/* Foundation piles - 4 of them */}
        {['hearts', 'diamonds', 'clubs', 'spades'].map((suit, index) => (
          <div 
            key={`foundation-${index}`}
            className="card-pile foundation-pile"
            onDrop={(e) => handleDrop(e, `foundation-${suit}`)}
            onDragOver={handleDragOver}
          >
            <div className="dropzone">
              {suit === 'clubs' && <span className="foundation-hint">♣</span>}
              {suit === 'diamonds' && <span className="foundation-hint">♦</span>}
              {suit === 'hearts' && <span className="foundation-hint">♥</span>}
              {suit === 'spades' && <span className="foundation-hint">♠</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row: tableau piles */}
      <div className="bottom-row">
        {/* Seven tableau piles */}
        {[...Array(7)].map((_, pileIndex) => (
          <div 
            key={`tableau-${pileIndex}`}
            className="tableau-stack"
            onDrop={(e) => handleDrop(e, `tableau-${pileIndex}`)}
            onDragOver={handleDragOver}
          >
            {/* Render face-down cards based on pile index */}
            {[...Array(pileIndex)].map((_, cardIndex) => (
              <Card 
                key={`facedown-${pileIndex}-${cardIndex}`}
                faceDown 
                style={{ top: `${cardIndex * 25}px` }}
              />
            ))}
            
            {/* Render the face-up card for each pile */}
            {pileIndex === 0 && (
              <Card 
                value="8" 
                suit="spades" 
                style={{ top: `${pileIndex * 25}px` }}
                draggable
                onDragStart={(e) => handleDragStart(e, `8-spades`)}
                onClick={() => handleCardClick(`8-spades`)}
              />
            )}
            {pileIndex === 1 && (
              <Card 
                value="Q" 
                suit="spades" 
                style={{ top: `${pileIndex * 25}px` }}
                draggable
                onDragStart={(e) => handleDragStart(e, `Q-spades`)}
                onClick={() => handleCardClick(`Q-spades`)}
              />
            )}
            {pileIndex === 2 && (
              <Card 
                value="4" 
                suit="diamonds" 
                style={{ top: `${pileIndex * 25}px` }}
                draggable
                onDragStart={(e) => handleDragStart(e, `4-diamonds`)}
                onClick={() => handleCardClick(`4-diamonds`)}
              />
            )}
            {pileIndex === 3 && (
              <Card 
                value="4" 
                suit="hearts" 
                style={{ top: `${pileIndex * 25}px` }} 
                draggable
                onDragStart={(e) => handleDragStart(e, `4-hearts`)}
                onClick={() => handleCardClick(`4-hearts`)}
              />
            )}
            {pileIndex === 4 && (
              <Card 
                value="J" 
                suit="spades" 
                style={{ top: `${pileIndex * 25}px` }} 
                draggable
                onDragStart={(e) => handleDragStart(e, `J-spades`)}
                onClick={() => handleCardClick(`J-spades`)}
              />
            )}
            {pileIndex === 5 && (
              <Card 
                value="2" 
                suit="clubs" 
                style={{ top: `${pileIndex * 25}px` }} 
                draggable
                onDragStart={(e) => handleDragStart(e, `2-clubs`)}
                onClick={() => handleCardClick(`2-clubs`)}
              />
            )}
            {pileIndex === 6 && (
              <Card 
                value="9" 
                suit="clubs" 
                style={{ top: `${pileIndex * 25}px` }} 
                draggable
                onDragStart={(e) => handleDragStart(e, `9-clubs`)}
                onClick={() => handleCardClick(`9-clubs`)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameArea;

import React from 'react';

interface GameGridProps {
  grid: string[];
  currentPlayer: number;
  placeBomb: (index: number) => void;
  handleCellClick: (index: number) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({
  grid,
  currentPlayer,
  placeBomb,
  handleCellClick
}) => {
  return (
    <div className="grid">
      {grid.map((cell, index) => (
        <button
          key={index}
          className={`cell ${cell === '💣' ? 'bomb-cell' : ''}`}
          onClick={() => {
            if (cell === '') {
              if (currentPlayer === 0) {
                placeBomb(index);
              } else {
                handleCellClick(index);
              }
            }
          }}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

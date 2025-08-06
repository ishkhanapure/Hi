import React from 'react';

interface GameUIProps {
  currentPlayer: number;
  winner: string | null;
  onReset: () => void;
}

export const GameUI: React.FC<GameUIProps> = ({ currentPlayer, winner, onReset }) => {
  return (
    <div className="game-ui">
      {winner ? (
        <h2>🏆 {winner} wins!</h2>
      ) : (
        <h2>🎯 Player {currentPlayer + 1}'s turn</h2>
      )}
      <button onClick={onReset}>🔁 Reset</button>
    </div>
  );
};

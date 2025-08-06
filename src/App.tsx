import React from 'react';
import { useTrapGame } from './useTrapGame';
import { PlayerSetup } from './PlayerSetup';
import { GameGrid } from './GameGrid';
import { GameUI } from './GameUI';

const App: React.FC = () => {
  const {
    players,
    currentPlayer,
    winner,
    grid,
    placeBomb,
    handleCellClick,
    resetGame,
    setPlayers,
  } = useTrapGame();

  return (
    <div className="container">
      <h1 className="title">🎮 Trap Game</h1>
      {!players ? (
        <PlayerSetup onStart={setPlayers} />
      ) : (
        <>
          <GameUI
            currentPlayer={currentPlayer}
            winner={winner}
            onReset={resetGame}
          />
          <GameGrid
            grid={grid}
            currentPlayer={currentPlayer}
            placeBomb={placeBomb}
            handleCellClick={handleCellClick}
          />
        </>
      )}
    </div>
  );
};

export default App;

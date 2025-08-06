import { useState } from 'react';

export const useTrapGame = () => {
  const [players, setPlayers] = useState<{ name: string; trapLocation: number | null }[] | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [grid, setGrid] = useState<string[]>(Array(9).fill(''));
  const [winner, setWinner] = useState<string | null>(null);

  const placeBomb = (index: number) => {
    if (!players) return;
    const newGrid = [...grid];
    newGrid[index] = '💣';
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayer].trapLocation = index;
    setGrid(newGrid);
    setPlayers(updatedPlayers);
    setCurrentPlayer(1);
  };

  const handleCellClick = (index: number) => {
    if (!players) return;
    const opponent = players[1 - currentPlayer];
    const newGrid = [...grid];

    if (index === opponent.trapLocation) {
      newGrid[index] = '💥';
      setGrid(newGrid);
      setWinner(opponent.name); // ✅ Player who set the trap wins
    } else {
      newGrid[index] = '✅';
      setGrid(newGrid);
      setCurrentPlayer(1 - currentPlayer);
    }
  };

  const resetGame = () => {
    setGrid(Array(9).fill(''));
    setCurrentPlayer(0);
    if (players) {
      setPlayers([
        { name: players[0].name, trapLocation: null },
        { name: players[1].name, trapLocation: null }
      ]);
    }
    setWinner(null);
  };

  return {
    players,
    currentPlayer,
    winner,
    grid,
    placeBomb,
    handleCellClick,
    resetGame,
    setPlayers
  };
};

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import checkWinner from './checkwinner';
import Board from './features/board/Board';
import { selectBoard } from './features/board/boardSlice';

function App() {
  const board = useSelector(selectBoard);

  useEffect(() => {
    const winner = checkWinner(board);
    console.log(winner);
  }, [board])

  return (
    <div>
      <Board />
    </div>
  );
}

export default App;

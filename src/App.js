import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkWinner from './checkwinner';
import Board from './features/board/Board';
import { aiMove, selectBoard, selectPlayer, setPlayer, setWinnner } from './features/board/boardSlice';
import Winner from './features/winner/Winner';

function App() {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);

  useEffect(() => {
    console.table(board);
    dispatch(setWinnner(checkWinner(board)));
  }, [board, dispatch])

  useEffect(() => {
    console.log({ player });
    if (!player) dispatch(setPlayer('O'));
    if (player === 'X') {
      dispatch(aiMove(player));
    }
  }, [dispatch, player])

  return (
    <div>
      <Board />
      <Winner />
    </div>
  );
}

export default App;

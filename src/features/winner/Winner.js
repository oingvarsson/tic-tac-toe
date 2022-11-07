import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, selectWinner } from '../board/boardSlice';
import './winner.css';

const Winner = () => {
  const dispatch = useDispatch();
  const winner = useSelector(selectWinner);
  console.log(winner);

  if (!winner) return null;

  return (
    <div className='winnerwrapper'>
      <div className='winner'>
        <div className='winneritem'>{winner !== 'draw' ? 'WINNER' : 'DRAW'}</div>
        <div className='winneritem'>{winner !== 'draw' ? winner : ''}</div>
        <div className='winneritem'>
          <button onClick={() => dispatch(reset())}>Play again</button>
        </div>
      </div>
    </div>
  );
};

export default Winner;

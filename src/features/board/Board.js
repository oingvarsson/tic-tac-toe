import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placePlayer, selectBoard } from './boardSlice';
import './board.css';

const Square = ({column, row, token}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (token!=='') return;
    dispatch(placePlayer({column, row, token: 'O' }))
  };

  return (
    <div style={{cursor: token==='' ? 'pointer' : 'not-allowed'}} className='square' onClick={handleClick}>
      {token}
    </div>
  )
};

const Row = ({ columns, row }) => {
  return (
    <div className='row'>
      {columns.map((token, i) => <Square key={i} column={i} token={token} row={row} />)}
    </div>
  )
};

const Board = () => {
  const board = useSelector(selectBoard);
  return (
    <div>
      {board.map((columns, i) => <Row key={i} columns={columns} row={i} />)}
    </div>
  );
};

export default Board;

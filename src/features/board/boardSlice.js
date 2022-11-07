import { createSlice } from '@reduxjs/toolkit';
import findBestMove from '../../minimax';

const players = ['X', 'O'];

const switchPlayer = token => token===players[0] ? players[1] : players[0];

const initialState = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  player: null,
  winner: ''
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    aiMove: (state, action) => {
      console.log('AI Move');
      const token = action.payload;
      console.log(token);
      const bestMove = findBestMove(token, state.board);
      console.log(bestMove);
      state.player = switchPlayer(token);
      state.board = bestMove.board;
    },
    placePlayer: (state, action) => {
      const { row, column, token } = action.payload;
      state.board[row][column] = token;
      state.player = switchPlayer(token);
    },
    reset: () => initialState,
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setWinnner: (state, action) => {
      console.log('Set winner');
      state.winner = action.payload;
    }
  }
});

export const { aiMove, placePlayer, reset, setPlayer, setWinnner } = boardSlice.actions;

export const selectBoard = (state) => state.board.board;
export const selectPlayer = (state) => state.board.player;
export const selectWinner = (state) => state.board.winner;

export default boardSlice.reducer;

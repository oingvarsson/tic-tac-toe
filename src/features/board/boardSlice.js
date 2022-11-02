import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    placePlayer: (state, action) => {
      const { row, column, token } = action.payload;
      state[row][column] = token;
    }
  }
});

export const { placePlayer } = boardSlice.actions;

export const selectBoard = (state) => state.board;

export default boardSlice.reducer;

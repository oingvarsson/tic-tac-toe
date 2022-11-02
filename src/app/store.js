import { configureStore } from '@reduxjs/toolkit';
import board from '../features/board/boardSlice';

export const store = configureStore({
  reducer: {
    board
  },
});

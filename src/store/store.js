import { configureStore } from '@reduxjs/toolkit';
import { authSlice, authSliceName } from '../auth/store/authSlice';
import { journalSlice, journalSliceName } from '../journal/store/journalSlice';

export const store = configureStore({
  reducer: {
    [authSliceName]: authSlice.reducer,
    [journalSliceName]: journalSlice.reducer,
  },
})


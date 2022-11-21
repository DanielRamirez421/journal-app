import { configureStore } from '@reduxjs/toolkit';
import { authSlice, authSliceName } from '../auth/store/authSlice';

export const store = configureStore({
  reducer: {
    [authSliceName]: authSlice.reducer,
  },
})


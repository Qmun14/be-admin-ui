import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentications/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

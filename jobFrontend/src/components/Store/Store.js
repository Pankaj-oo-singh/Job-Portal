// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Optional: Add middleware or devtools customization if needed
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

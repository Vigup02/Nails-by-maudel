// testStore.js
import { configureStore } from '@reduxjs/toolkit';
import { saveUserDataReducer } from '../assets/userSlice'; 

export const testStore = configureStore({
  reducer: {
    user: saveUserDataReducer, 
  },
});

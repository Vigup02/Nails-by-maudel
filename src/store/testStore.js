// testStore.js
import { configureStore } from '@reduxjs/toolkit';
import { saveUserDataReducer } from '../assets/userSlice'; // Assurez-vous que le chemin est correct

export const testStore = configureStore({
  reducer: {
    user: saveUserDataReducer, // Ajoutez ici vos réducteurs nécessaires
  },
});

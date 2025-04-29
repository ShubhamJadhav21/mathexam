import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './slices/inputSlice';

const store = configureStore({
  reducer: {
    input: inputReducer
  }
});

export default store;

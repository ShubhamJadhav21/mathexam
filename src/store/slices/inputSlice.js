import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  min: '',
  max: '',
  count: '',
  timer: 0, // Add a timer field
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setMin(state, action) {
      state.min = action.payload;
    },
    setMax(state, action) {
      state.max = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
    setTimer(state, action) { // Set timer action
      state.timer = action.payload;
    },
  },
});

export const { setMin, setMax, setCount, setTimer } = inputSlice.actions;
export default inputSlice.reducer;

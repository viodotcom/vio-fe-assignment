import * as R from 'ramda';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [
    {
      adults: 2,
      childrenAges: [null, 8],
    },
    {
      adults: 1,
      childrenAges: [12, 8],
    },
  ],
};

export const counterSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    increment: (state) => R.mergeRight(state, {
      value: state.value + 1,
    }),
    decrement: (state) => R.mergeRight(state, {
      value: state.value - 1,
    }),
    incrementByAmount: (state, action) => R.mergeRight(state, {
      value: state.value + action.payload,
    }),
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

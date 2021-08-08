import { createSlice } from '@reduxjs/toolkit';

import { deserializeRoomsData } from '../../libs/url';

const roomsFromQueryParams = deserializeRoomsData();

const roomTemplate = {
  adults: 0,
  childrenAges: [],
};

const initialState = {
  rooms: roomsFromQueryParams,
};

export const counterSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom(state) {
      return { ...state, rooms: [...state.rooms, roomTemplate] };
    },
    removeRoomById(state, { payload }) {
      state.rooms = state.rooms.filter((r, i) => i !== payload);
    },
  },
});

export const { addRoom, removeRoomById } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice, configureStore } from "@reduxjs/toolkit";

export type RoomType = {
  maxNumberOfAdults: number;
  maxNumberOfChildren: number;
  maxOccupancy: number;
  adultsCounter: number;
  totalGuests: number;
  children: [
    {
      age: number | null;
    }?
  ];
};

export type StoreStateType = {
  maxNumberOfRooms: number;
  rooms: RoomType[];
};

const initialRoomsState = {
  maxNumberOfAdults: 5,
  maxNumberOfChildren: 3,
  maxOccupancy: 5,
  adultsCounter: 1,
  totalGuests: 1,
  children: [],
};

const initialState = {
  maxNumberOfRooms: 8,
  rooms: [initialRoomsState],
};

const counterSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    resetStore: (state): void => {
      state.rooms = [initialRoomsState];
    },
    addRoom: (state): void => {
      const { rooms, maxNumberOfRooms } = state;

      if (rooms.length < maxNumberOfRooms) {
        rooms.push(initialRoomsState);
      }
    },
    removeRoom: (state, action): void => {
      if (state.rooms.length > 1) {
        state.rooms.splice(action.payload, 1);
      }
    },
    addAdult: (state, action): void => {
      const room = state.rooms[action.payload];

      if (
        room.adultsCounter < room.maxNumberOfAdults &&
        room.totalGuests < room.maxOccupancy
      ) {
        room.adultsCounter += 1;
        room.totalGuests += 1;
      }
    },
    removeAdult: (state, action): void => {
      const room = state.rooms[action.payload];

      if (room.adultsCounter > 1) {
        room.adultsCounter -= 1;
        room.totalGuests -= 1;
      }
    },
    addChild: (state, action): void => {
      const room = state.rooms[action.payload];

      if (
        room.children.length < room.maxNumberOfChildren &&
        room.totalGuests < room.maxOccupancy
      ) {
        room.children.push({
          age: null,
        });
        room.totalGuests += 1;
      }
    },
    removeChild: (state, action): void => {
      const room = state.rooms[action.payload];
      const { children } = room;

      if (children.length) {
        children.splice(children.length - 1, 1);
        room.totalGuests -= 1;
      }
    },
    removeSpecificChild: (state, action): void => {
      const { childrenPosition, roomPosition } = action.payload;
      const room = state.rooms[roomPosition];
      const { children } = room;

      if (children.length) {
        children?.splice(childrenPosition, 1);
        room.totalGuests -= 1;
      }
    },
    changeChildAge: (state, action): void => {
      const { childrenPosition, roomPosition, age } = action.payload;
      const { children } = state.rooms[roomPosition];

      if (Boolean(age)) {
        children[childrenPosition].age = Number(age);
      }
    },
  },
});

export const {
  resetStore,
  addRoom,
  removeRoom,
  addAdult,
  removeAdult,
  addChild,
  removeChild,
  removeSpecificChild,
  changeChildAge,
} = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

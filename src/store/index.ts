import { createSlice, configureStore } from "@reduxjs/toolkit";

export type RoomType = {
  adultsCounter: number;
  children: [
    {
      age: number | null;
    }?
  ];
};

export type StoreStateType = {
  rooms: RoomType[];
};

const initialRoomsState = {
  adultsCounter: 0,
  children: [],
};

const initialState = {
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
      state.rooms.push({
        adultsCounter: 0,
        children: [],
      });
    },
    removeRoom: (state, action): void => {
      state.rooms.splice(action.payload, 1);
    },
    addAdult: (state, action): void => {
      state.rooms[action.payload].adultsCounter += 1;
    },
    removeAdult: (state, action): void => {
      const room = state.rooms[action.payload];

      if (room.adultsCounter > 0) {
        state.rooms[action.payload].adultsCounter -= 1;
      }
    },
    addChild: (state, action): void => {
      state.rooms[action.payload].children.push({
        age: null,
      });
    },
    removeChild: (state, action): void => {
      const { children } = state.rooms[action.payload];
      children.splice(children.length - 1, 1);
    },
    removeSpecificChild: (state, action): void => {
      const { childrenPosition, roomPosition } = action.payload;
      const { children } = state.rooms[roomPosition];

      children?.splice(childrenPosition, 1);
    },
    changeChildAge: (state, action): void => {
      const { childrenPosition, roomPosition, age } = action.payload;
      const { children } = state.rooms[roomPosition];

      children[childrenPosition].age = age;
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

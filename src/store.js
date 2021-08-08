import { configureStore } from '@reduxjs/toolkit';

import roomsReducer from './components/Rooms/roomsSlice';

export default configureStore({
  reducer: roomsReducer,
});

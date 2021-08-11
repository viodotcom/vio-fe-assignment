import { combineReducers, createStore } from 'redux';

import { roomsReducer } from './reducers';

export default createStore(
  combineReducers({
    rooms: roomsReducer,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

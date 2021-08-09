import * as R from 'ramda';
import { createStore, combineReducers } from 'redux';

import { deserializeRoomsData } from './libs/url';
import {
  MAX_ROOMS_COUNT, MAX_ADULTS_FOR_ROOM_COUNT, MAX_CHILDREN_FOR_ROOM_COUNT, MAX_ROOM_OCCUPANCY_COUNT,
} from './constants';

const initialRoomsState = [];

const roomPattern = {
  adults: 0,
  childrenAges: [],
};

// reducer

const roomsReducer = (state = initialRoomsState, action) => {
  const { type, payload } = action;
  const isRoomOccupancyExhausted = (roomId) => {
    const currentOccupancy = R.length(R.prop('childrenAges', state[roomId])) + R.prop('adults', state[roomId]);
    return currentOccupancy < MAX_ROOM_OCCUPANCY_COUNT;
  };

  switch (type) {
    case 'GET_ROOMS_FROM_URL': {
      const mapIndexed = R.addIndex(R.map);
      return mapIndexed((r, i) => R.assoc('id', `${i}`, r), deserializeRoomsData());
    }
    case 'ADD_ROOM':
      return state.length + 1 <= MAX_ROOMS_COUNT ? R.append(roomPattern, state) : state;
    case 'REMOVE_ROOM_BY_ID':
      return R.remove(payload, 1, state);
    case 'INC_ADULT_BY_ROOM_ID':
      if (
        state[payload].adults + 1 <= MAX_ADULTS_FOR_ROOM_COUNT
        && isRoomOccupancyExhausted(payload)
      ) {
        state[payload].adults += 1;
      }
      return R.update(payload, state[payload], state);
    case 'DEC_ADULT_BY_ROOM_ID':
      if (state[payload].adults - 1 >= 0) {
        state[payload].adults -= 1;
      }
      return R.update(payload, state[payload], state);
    case 'INC_CHILD_BY_ROOM_ID':
      if (
        R.length(R.prop('childrenAges', state[payload])) < MAX_CHILDREN_FOR_ROOM_COUNT
        && isRoomOccupancyExhausted(payload)
      ) {
        state[payload].childrenAges.push(null);
      }
      return R.update(payload, state[payload], state);
    case 'DEC_CHILD_BY_ROOM_ID':
      if (R.length(R.prop('childrenAges', state[payload])) > 0) {
        state[payload].childrenAges.pop();
      }
      return R.update(payload, state[payload], state);
    case 'REMOVE_CHILD_BY_ID': {
      const { roomId, childId } = payload;

      state[roomId].childrenAges = R.remove(childId, 1, R.prop('childrenAges', state[roomId]));
      return R.update(roomId, state[roomId], state);
    }
    case 'INC_CHILD_AGE_BY_ID': {
      const { roomId, childId } = payload;

      state[roomId].childrenAges[childId] += 1;
      return R.update(roomId, state[roomId], state);
    }
    case 'DEC_CHILD_AGE_BY_ID': {
      const { roomId, childId } = payload;

      if (state[roomId].childrenAges[childId] > 0) {
        state[roomId].childrenAges[childId] -= 1;
      }
      return R.update(roomId, state[roomId], state);
    }
    default:
      return state;
  }
};

// actions

export const getRoomsFromUrl = () => ({
  type: 'GET_ROOMS_FROM_URL',
});

export const addRoom = () => ({
  type: 'ADD_ROOM',
});

export const removeRoomById = (roomId) => ({
  type: 'REMOVE_ROOM_BY_ID',
  payload: roomId,
});

export const incAdultByRoomId = (roomId) => ({
  type: 'INC_ADULT_BY_ROOM_ID',
  payload: roomId,
});

export const decAdultByRoomId = (roomId) => ({
  type: 'DEC_ADULT_BY_ROOM_ID',
  payload: roomId,
});

export const incChildByRoomId = (roomId) => ({
  type: 'INC_CHILD_BY_ROOM_ID',
  payload: roomId,
});

export const decChildByRoomId = (roomId) => ({
  type: 'DEC_CHILD_BY_ROOM_ID',
  payload: roomId,
});

export const removeChildById = (roomId, childId) => ({
  type: 'REMOVE_CHILD_BY_ID',
  payload: { roomId, childId },
});

export const incChildAgeById = (roomId, childId) => ({
  type: 'INC_CHILD_AGE_BY_ID',
  payload: { roomId, childId },
});

export const decChildAgeById = (roomId, childId) => ({
  type: 'DEC_CHILD_AGE_BY_ID',
  payload: { roomId, childId },
});

export default createStore(
  combineReducers({ rooms: roomsReducer }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

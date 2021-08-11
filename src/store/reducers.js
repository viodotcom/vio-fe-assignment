import * as R from 'ramda';

import {
  MAX_CHILDREN_FOR_ROOM_COUNT,
  MAX_ROOM_OCCUPANCY_COUNT,
  MAX_ROOMS_COUNT,
  MIN_ADULTS_FOR_ROOM_COUNT,
} from '../constants';
import { getRoomsDataFromQueryParams } from '../libs/url';

const initialRoomsState = [];

const roomPattern = {
  adults: MIN_ADULTS_FOR_ROOM_COUNT,
  childrenAges: [],
};

const validateRoomsData = (rooms) => {
  const validateRoom = (room) => {
    const childrenCount = R.length(R.prop('childrenAges', room) || []);
    const adultsCount = R.prop('adults', room);
    const occupancy = childrenCount + adultsCount;

    if (
      occupancy <= MAX_ROOM_OCCUPANCY_COUNT
      && childrenCount <= MAX_CHILDREN_FOR_ROOM_COUNT
      && childrenCount >= 0
      && adultsCount >= MIN_ADULTS_FOR_ROOM_COUNT
    ) {
      return true;
    }

    console.log('Room data is not valide', room);
    return false;
  };

  return R.filter(validateRoom, rooms);
};

// Selectors

const isIncOccupancyDisabled = (rooms, roomId) => {
  const currentOccupancy = R.length(R.prop('childrenAges', rooms[roomId]) || []) + R.prop('adults', rooms[roomId]);
  return currentOccupancy >= MAX_ROOM_OCCUPANCY_COUNT;
};

export const isAdultsIncDisabled = (state, roomId) => {
  const rooms = R.prop('rooms', state);
  const room = rooms[roomId];
  return isIncOccupancyDisabled(rooms, roomId) || R.prop('adults', room) >= MAX_ROOM_OCCUPANCY_COUNT;
};

export const isAdultsDecDisabled = (state, roomId) => {
  const rooms = R.prop('rooms', state);
  const room = rooms[roomId];
  return R.prop('adults', room) <= MIN_ADULTS_FOR_ROOM_COUNT;
};

export const isChildrenIncDisabled = (state, roomId) => {
  const rooms = R.prop('rooms', state);
  const room = rooms[roomId];
  return isIncOccupancyDisabled(rooms, roomId) || R.length(R.prop('childrenAges', room)) >= MAX_CHILDREN_FOR_ROOM_COUNT;
};

export const isRoomRemovingDisabled = (roomId) => Number(roomId) === 0;

// Reducer

export const roomsReducer = (state = initialRoomsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_ROOMS_FROM_URL': {
      const roomsData = getRoomsDataFromQueryParams();
      const validatedRoomsData = validateRoomsData(roomsData);
      return R.length(validatedRoomsData) ? validatedRoomsData : [R.clone(roomPattern)];
    }

    case 'ADD_ROOM':
      return state.length + 1 <= MAX_ROOMS_COUNT ? R.append(R.clone(roomPattern), state) : state;

    case 'REMOVE_ROOM_BY_ID':
      return R.remove(payload, 1, state);

    case 'INC_ADULT_BY_ROOM_ID':
      if (!isIncOccupancyDisabled(state, payload)) {
        state[payload].adults += 1;
      }
      return R.update(payload, state[payload], state);

    case 'DEC_ADULT_BY_ROOM_ID':
      if (state[payload].adults - 1 >= MIN_ADULTS_FOR_ROOM_COUNT) {
        state[payload].adults -= 1;
      }
      return R.update(payload, state[payload], state);

    case 'INC_CHILD_BY_ROOM_ID':
      if (
        R.length(R.prop('childrenAges', state[payload])) < MAX_CHILDREN_FOR_ROOM_COUNT
        && !isIncOccupancyDisabled(state, payload)
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

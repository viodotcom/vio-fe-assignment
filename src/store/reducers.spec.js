import * as R from 'ramda';

import {
  MIN_ADULTS_FOR_ROOM_COUNT,
  MAX_CHILDREN_FOR_ROOM_COUNT,
  MAX_ROOMS_COUNT,
  MAX_ROOM_OCCUPANCY_COUNT,
} from '../constants';
import {
  addRoom,
  decAdultByRoomId,
  incAdultByRoomId,
  incChildByRoomId,
  decChildByRoomId,
  removeRoomById,
} from './actions';
import { roomsReducer } from './reducers';
import { deserializeRoomsData } from '../libs/url';

const roomPattern = {
  adults: MIN_ADULTS_FOR_ROOM_COUNT,
  childrenAges: [],
};

// Deserialize room data

describe('Desetialize room data', () => {
  test('should make correct data structure from string "1:4,6|3"', () => {
    const roomsData = '1:4,6|3';
    const result = [
      { adults: 1, childrenAges: [4, 6] },
      { adults: 3, childrenAges: [] },
    ];

    expect(deserializeRoomsData(roomsData)).toEqual(result);
  });

  test('should make correct data structure from string ":|"', () => {
    const roomsData = ':|';
    const result = [
      { adults: 0, childrenAges: [] },
      { adults: 0, childrenAges: [] },
    ];

    expect(deserializeRoomsData(roomsData)).toEqual(result);
  });

  test('should make correct data structure from string ":4,6|3"', () => {
    const roomsData = ':4,6|3';
    const result = [
      { adults: 0, childrenAges: [] },
      { adults: 3, childrenAges: [] },
    ];

    expect(deserializeRoomsData(roomsData)).toEqual(result);
  });

  test('should make correct data structure from string ":4,6|"', () => {
    const roomsData = ':4,6|';
    const result = [
      { adults: 0, childrenAges: [] },
      { adults: 0, childrenAges: [] },
    ];

    expect(deserializeRoomsData(roomsData)).toEqual(result);
  });
});

// Rooms

test(`should not add rooms more than ${MAX_ROOMS_COUNT}`, () => {
  const previousState = R.repeat(R.clone(roomPattern), MAX_ROOMS_COUNT);
  expect(roomsReducer(previousState, addRoom())).toEqual(R.repeat(R.clone(roomPattern), MAX_ROOMS_COUNT));
});

test('should add room', () => {
  const previousState = R.repeat(R.clone(roomPattern), 1);
  expect(roomsReducer(previousState, addRoom())).toEqual(R.repeat(R.clone(roomPattern), 2));
});

test('should remove room', () => {
  const previousState = R.repeat(R.clone(roomPattern), 2);
  expect(roomsReducer(previousState, removeRoomById(0))).toEqual([R.clone(roomPattern)]);
});

// Adults

test('should not remove all adults', () => {
  const previousState = R.repeat(R.clone(roomPattern), 1);
  expect(roomsReducer(previousState, decAdultByRoomId(0))).toEqual([R.clone(roomPattern)]);
});

test('should add adult', () => {
  const previousState = R.repeat(R.clone(roomPattern), 1);
  const resultState = R.mergeRight(
    R.clone(roomPattern),
    { adults: 2 },
  );
  expect(roomsReducer(previousState, incAdultByRoomId(0))).toEqual([resultState]);
});

test('should remove adult', () => {
  const previousState = R.repeat(R.mergeRight(
    R.clone(roomPattern),
    { adults: 3 },
  ), 1);
  const resultState = R.mergeRight(
    R.clone(roomPattern),
    { adults: 2 },
  );
  expect(roomsReducer(previousState, decAdultByRoomId(0))).toEqual([resultState]);
});

// Children

test(`should not add children more than ${MAX_CHILDREN_FOR_ROOM_COUNT}`, () => {
  const previousState = R.repeat(R.mergeRight(
    R.clone(roomPattern),
    { childrenAges: R.repeat(1, MAX_CHILDREN_FOR_ROOM_COUNT) },
  ), 1);
  const resultState = R.mergeRight(
    R.clone(roomPattern),
    { childrenAges: R.repeat(1, MAX_CHILDREN_FOR_ROOM_COUNT) },
  );

  expect(roomsReducer(previousState, incChildByRoomId(0))).toEqual([resultState]);
});

test('should add children', () => {
  const previousState = R.repeat(R.mergeRight(
    R.clone(roomPattern),
    { childrenAges: [1, 1] },
  ), 1);
  const resultState = R.mergeRight(
    R.clone(roomPattern),
    { childrenAges: [1, 1, null] },
  );

  expect(roomsReducer(previousState, incChildByRoomId(0))).toEqual([resultState]);
});

test('should remove children', () => {
  const previousState = R.repeat(R.mergeRight(
    R.clone(roomPattern),
    { childrenAges: [1, 1] },
  ), 1);
  const resultState = R.mergeRight(
    R.clone(roomPattern),
    { childrenAges: [1] },
  );

  expect(roomsReducer(previousState, decChildByRoomId(0))).toEqual([resultState]);
});

test(`should not exceed room occupancy = ${MAX_ROOM_OCCUPANCY_COUNT}, if try to add children`, () => {
  const previousState = [{ adults: MAX_ROOM_OCCUPANCY_COUNT - 2, childrenAges: [1, 1] }];
  const resultState = [{ adults: MAX_ROOM_OCCUPANCY_COUNT - 2, childrenAges: [1, 1, null] }];

  expect(roomsReducer(previousState, incChildByRoomId(0))).not.toEqual(resultState);
});

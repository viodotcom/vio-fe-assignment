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

export const resetToInitial = () => ({
  type: 'GET_ROOMS_FROM_URL',
});

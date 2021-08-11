import * as R from 'ramda';

import { ROOMS_DATA_GET_PARAM_NAME } from '../constants';

export const deserializeRoomsData = (str) => {
  const data = str ? str.split('|') : [];
  const rooms = [];

  data.forEach((room) => {
    rooms.push({
      adults: room[0] && Number(room[0]) ? Number(room[0]) : 0,
      childrenAges: room.indexOf(':') > 0 ? R.map(Number, room.split(':')[1].split(',')) : [],
    });
  });

  return rooms;
};

export const getRoomsDataFromQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const roomsDataStr = urlSearchParams.get(ROOMS_DATA_GET_PARAM_NAME);
  return deserializeRoomsData(roomsDataStr);
};

export const serializeRoomsData = (rooms) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let resultString = '';

  rooms.forEach((r, i) => {
    const childrenAges = R.reject(R.equals(null))(r.childrenAges);
    if (i > 0) resultString += '|';
    resultString += `${r.adults}`;
    if (childrenAges.length) resultString += `:${childrenAges.join(',')}`;
  });
  urlSearchParams.set(ROOMS_DATA_GET_PARAM_NAME, resultString);
  window.history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams.toString()}`);
};

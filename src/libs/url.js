import * as R from 'ramda';

const ROOMS_DATA = 'roomsData';

export const deserializeRoomsData = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const roomsDataStr = urlSearchParams.get(ROOMS_DATA);
  const roomsFromDataStr = roomsDataStr ? roomsDataStr.split('|') : [];
  const rooms = [];

  roomsFromDataStr.forEach((room) => {
    rooms.push({
      adults: Number(R.head(room)),
      childrenAges: room.indexOf(':') > 0 ? R.map(Number, room.split(':')[1].split(',')) : [],
    });
  });

  return R.reject(R.isNil, rooms);
};

export const serializeRoomsData = (rooms) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let resultString = '';

  rooms.forEach((r) => {
    resultString += `${r.adults}:${r.childrenAges.join(',')}|`;
  });
  urlSearchParams.set(ROOMS_DATA, resultString);
  window.history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams.toString()}`);
};

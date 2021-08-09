import * as R from 'ramda';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { serializeRoomsData } from '../../libs/url';

import { addRoom } from '../../store';

import { Room } from './Room';

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Rooms</h1>
      {rooms.map((r, i) => (
        <Room
          key={r.id}
          id={i}
          adults={r.adults}
          childrenAges={R.prop('childrenAges', r)}
        />
      ))}
      <button type="button" onClick={() => dispatch(addRoom())}>Add room</button>
      <button type="button" onClick={() => serializeRoomsData(rooms)}>
        Search
        {' '}
        {rooms.length}
        {' '}
        rooms
        {' '}
      </button>
    </div>
  );
};

export default Rooms;

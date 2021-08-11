import * as R from 'ramda';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { serializeRoomsData } from '../../libs/url';
import { MAX_ROOMS_COUNT } from '../../constants';
import { addRoom, resetToInitial } from '../../store/actions';
import { Room } from './Room';

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const handleAddRoom = () => dispatch(addRoom());
  const handleResetToInitial = () => dispatch(resetToInitial());

  return (
    <div>
      <p>
        <button type="button" onClick={handleResetToInitial}>Reset to initial</button>
      </p>
      <h1>Rooms</h1>
      {rooms.map((r, i) => (
        <Room
          key={i.toString()}
          id={i}
          adults={R.prop('adults', r)}
          childrenAges={R.prop('childrenAges', r)}
        />
      ))}
      <button type="button" disabled={R.length(rooms) === MAX_ROOMS_COUNT} onClick={handleAddRoom}>Add room</button>
      <button type="button" disabled={!R.length(rooms)} onClick={() => serializeRoomsData(rooms)}>
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

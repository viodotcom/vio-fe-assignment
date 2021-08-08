import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRoom, removeRoomById } from './roomsSlice';
import { serializeRoomsData } from '../../libs/url';

import { Room } from './Room';

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const handleRemoveRoom = React.useCallback((id) => {
    dispatch(removeRoomById(id));
  }, [dispatch]);

  return (
    <div>
      <h1>Rooms</h1>
      {rooms.map((r, i) => (
        <Room
          key={i.toString()}
          id={i}
          adults={r.adults}
          childrenAges={r.childrenAges ? r.childrenAges.length : 0}
          onRemove={handleRemoveRoom}
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

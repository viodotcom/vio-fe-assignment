import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Child } from './Child';
import './Room.css';
import {
  removeRoomById,
  incAdultByRoomId,
  decAdultByRoomId,
  incChildByRoomId,
  decChildByRoomId,
  removeChildById,
  incChildAgeById,
  decChildAgeById,
} from '../../store';

export function Room({
  // eslint-disable-next-line react/prop-types
  id, adults, childrenAges,
}) {
  const dispatch = useDispatch();
  const childrenCount = childrenAges ? R.length(childrenAges) : 0;
  const handleRemoveRoom = React.useCallback(() => {
    dispatch(removeRoomById(id));
  }, [dispatch, id]);
  const handleAddAdultByRoomId = React.useCallback(() => {
    dispatch(incAdultByRoomId(id));
  }, [dispatch, id]);
  const handleRemoveAdultByRoomId = React.useCallback(() => {
    dispatch(decAdultByRoomId(id));
  }, [dispatch, id]);
  const handleAddChildByRoomId = React.useCallback(() => {
    dispatch(incChildByRoomId(id));
  }, [dispatch, id]);
  const handleRemoveChildByRoomId = React.useCallback(() => {
    dispatch(decChildByRoomId(id));
  }, [dispatch, id]);
  const handleRemoveChildById = React.useCallback((childId) => {
    dispatch(removeChildById(id, childId));
  }, [dispatch, id]);
  const handleIncChildAgeById = React.useCallback((childId) => {
    dispatch(incChildAgeById(id, childId));
  }, [dispatch, id]);
  const handleDecChildAgeById = React.useCallback((childId) => {
    dispatch(decChildAgeById(id, childId));
  }, [dispatch, id]);
  console.log('Render room', id);
  return (
    <div className="Room">
      <button type="button" onClick={handleRemoveRoom}>Remove room</button>

      <p>
        <button type="button" onClick={handleAddAdultByRoomId}>Add adult</button>
        <button type="button" onClick={handleRemoveAdultByRoomId}>Remove adult</button>
      </p>

      <p>
        <button type="button" onClick={handleAddChildByRoomId}>Add child</button>
        <button type="button" onClick={handleRemoveChildByRoomId}>Remove child</button>
      </p>
      <h3>
        Room
        {id + 1}
      </h3>
      <div>
        Adults:
        {adults}
      </div>
      <div>
        Children
        {' '}
        {/* eslint-disable-next-line react/prop-types */}
        {childrenCount}
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {childrenCount ? childrenAges.map((age, i) => (
        <Child
          key={i.toString()}
          id={i}
          age={age}
          onRemove={() => handleRemoveChildById(i)}
          onIncAge={() => handleIncChildAgeById(i)}
          onDecAge={() => handleDecChildAgeById(i)}
        />
      )) : null}
    </div>
  );
}

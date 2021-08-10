import * as R from 'ramda';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  isAdultsIncDisabled,
  isAdultsDecDisabled,
  isChildrenIncDisabled,
  isRoomRemovingDisabled,
} from '../../store';

export function Room({
  id, adults, childrenAges,
}) {
  const dispatch = useDispatch();
  const childrenCount = childrenAges ? R.length(childrenAges) : 0;
  const handleRemoveRoom = () => dispatch(removeRoomById(id));
  const handleAddAdultByRoomId = () => dispatch(incAdultByRoomId(id));
  const handleRemoveAdultByRoomId = () => dispatch(decAdultByRoomId(id));
  const handleAddChildByRoomId = () => dispatch(incChildByRoomId(id));
  const handleRemoveChildByRoomId = () => dispatch(decChildByRoomId(id));
  const handleRemoveChildById = (childId) => dispatch(removeChildById(id, childId));
  const handleIncChildAgeById = (childId) => dispatch(incChildAgeById(id, childId));
  const handleDecChildAgeById = (childId) => dispatch(decChildAgeById(id, childId));

  const isAdultsIncreaseDisabled = useSelector((state) => isAdultsIncDisabled(state, id));
  const isAdultsDecreaseDisabled = useSelector((state) => isAdultsDecDisabled(state, id));
  const isChildrenIncreaseDisabled = useSelector((state) => isChildrenIncDisabled(state, id));
  const isRoomRemoveDisabled = useSelector(() => isRoomRemovingDisabled(id));

  return (
    <div className="Room">
      <button type="button" disabled={isRoomRemoveDisabled} onClick={handleRemoveRoom}>Remove room</button>

      <p>
        <button type="button" disabled={isAdultsIncreaseDisabled} onClick={handleAddAdultByRoomId}>Add adult</button>
        <button type="button" disabled={isAdultsDecreaseDisabled} onClick={handleRemoveAdultByRoomId}>Remove adult</button>
      </p>

      <p>
        <button type="button" disabled={isChildrenIncreaseDisabled} onClick={handleAddChildByRoomId}>Add child</button>
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
        {childrenCount}
      </div>
      {childrenCount ? childrenAges.map((age, i) => (
        <Child
          key={i.toString()}
          age={age}
          onRemove={() => handleRemoveChildById(i)}
          onIncAge={() => handleIncChildAgeById(i)}
          onDecAge={() => handleDecChildAgeById(i)}
        />
      )) : null}
    </div>
  );
}

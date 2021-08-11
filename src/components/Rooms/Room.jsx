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
  changeChildAgeById,
} from '../../store/actions';
import {
  isAdultsIncDisabled,
  isAdultsDecDisabled,
  isChildrenIncDisabled,
  isChildrenDecDisabled,
  isRoomRemovingDisabled,
} from '../../store/reducers';
import Button from '../ui/Button';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

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
  const handleChangeChildAgeById = (childId, age) => dispatch(changeChildAgeById(id, childId, age));

  const isAdultsIncreaseDisabled = useSelector((state) => isAdultsIncDisabled(state, id));
  const isAdultsDecreaseDisabled = useSelector((state) => isAdultsDecDisabled(state, id));
  const isChildrenIncreaseDisabled = useSelector((state) => isChildrenIncDisabled(state, id));
  const isChildrenDecreaseDisabled = useSelector((state) => isChildrenDecDisabled(state, id));
  const isRoomRemoveDisabled = useSelector(() => isRoomRemovingDisabled(id));

  return (
    <div className="room">
      <div className="col">
        <h3>
          Room
          {' '}
          {id + 1}
        </h3>
      </div>
      <div className="col right">
        {!isRoomRemoveDisabled && (
          <button type="button" onClick={handleRemoveRoom} className="room_removeBtn">Remove room</button>
        )}
      </div>

      <div className="col">
        Adults
      </div>
      <div className="col right">
        <div className="action_buttons">
          <div className="action_buttons_wrapper">
            <Button
              disabled={isAdultsDecreaseDisabled}
              onClick={handleRemoveAdultByRoomId}
              icon={<MinusIcon />}
            />
            {adults}
            <Button
              disabled={isAdultsIncreaseDisabled}
              onClick={handleAddAdultByRoomId}
              icon={<PlusIcon />}
            />
          </div>
        </div>
      </div>

      <div className="col">
        Children
      </div>
      <div className="col right">
        <div className="action_buttons">
          <div className="action_buttons_wrapper">
            <Button
              disabled={isChildrenDecreaseDisabled}
              onClick={handleRemoveChildByRoomId}
              icon={<MinusIcon />}
            />
            {childrenCount}
            <Button
              disabled={isChildrenIncreaseDisabled}
              onClick={handleAddChildByRoomId}
              icon={<PlusIcon />}
            />
          </div>
        </div>
      </div>

      {childrenCount ? (
        <div className="room_children">
          {childrenAges.map((age, i) => (
            <Child
              key={i.toString()}
              number={i + 1}
              age={R.isNil(age) ? -1 : age}
              onRemove={() => handleRemoveChildById(i)}
              onChangeAge={(selectedAge) => handleChangeChildAgeById(i, selectedAge)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

import * as R from 'ramda';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { MAX_CHILD_AGE } from '../../constants';
import { Child } from './Child';
import Button from '../ui/Button';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import './Room.css';

export function Room({
  id,
  adults,
  childrenAges,
}) {
  const dispatch = useDispatch();
  const childrenCount = childrenAges ? R.length(childrenAges) : 0;

  const handleRemoveRoom = React.useCallback(() => dispatch(removeRoomById(id)), [id]);
  const handleAddAdultByRoomId = React.useCallback(() => dispatch(incAdultByRoomId(id)), [id]);
  const handleRemoveAdultByRoomId = React.useCallback(() => dispatch(decAdultByRoomId(id)), [id]);
  const handleAddChildByRoomId = React.useCallback(() => dispatch(incChildByRoomId(id)), [id]);
  const handleRemoveChildByRoomId = React.useCallback(() => dispatch(decChildByRoomId(id)), [id]);
  const handleRemoveChildById = React.useCallback((childId) => dispatch(removeChildById(id, childId)), [id]);
  const handleChangeChildAgeById = React.useCallback((childId, age) => dispatch(changeChildAgeById(id, childId, age)), [id]);

  const isAdultsIncreaseDisabled = useSelector((state) => isAdultsIncDisabled(state, id));
  const isAdultsDecreaseDisabled = useSelector((state) => isAdultsDecDisabled(state, id));
  const isChildrenIncreaseDisabled = useSelector((state) => isChildrenIncDisabled(state, id));
  const isChildrenDecreaseDisabled = useSelector((state) => isChildrenDecDisabled(state, id));
  const isRoomRemoveDisabled = useSelector(() => isRoomRemovingDisabled(id));

  const childAges = React.useRef([...Array(MAX_CHILD_AGE + 1).keys()]);

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
              id={i}
              age={R.isNil(age) ? -1 : age}
              ages={childAges.current}
              onRemove={handleRemoveChildById}
              onChangeAge={handleChangeChildAgeById}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

import React from 'react';

import { ReactComponent as CrossIcon } from '../../icons/cross_red.svg';
import Button from '../ui/Button';
import Select from '../ui/Select';
import './Child.css';

export function Child({
  id,
  age,
  ages,
  onRemove,
  onChangeAge,
}) {
  const handleOnChange = React.useCallback((e) => onChangeAge(id, e.currentTarget.value), [onChangeAge]);
  const handleOnRemove = React.useCallback(() => onRemove(id), [onRemove, id]);

  return (
    <div>
      <div className="col">
        <div className="child_caption">
          Child
          {' '}
          {id + 1}
          {' '}
          age
        </div>
      </div>
      <div className="col right">
        <div className="action_buttons">
          <div className="action_buttons_wrapper">
            <Select
              value={age}
              onChange={handleOnChange}
              className="child_select"
            >
              <option value="-1">Age</option>
              {ages.map((a) => (<option key={a.toString()} value={a}>{a}</option>))}
            </Select>
            <Button
              transparent
              onClick={handleOnRemove}
              icon={<CrossIcon />}
              className="child_removeBtn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

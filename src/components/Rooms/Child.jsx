import React from 'react';

import { ReactComponent as CrosIcon } from '../../icons/cros_red.svg';
import Button from '../ui/Button';
import Select from '../ui/Select';

import './Child.css';

export function Child({
  number,
  age,
  onRemove,
  onChangeAge,
}) {
  return (
    <div>
      <div className="col">
        <div className="child_caption">
          Child
          {' '}
          {number}
          {' '}
          age
        </div>
      </div>
      <div className="col right">
        <div className="action_buttons">
          <div className="action_buttons_wrapper">
            <Select
              value={age}
              onChange={(e) => onChangeAge(e.currentTarget.value)}
              className="child_select"
            >
              <option value="-1">Age</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </Select>
            <Button
              transparent
              onClick={onRemove}
              icon={<CrosIcon />}
              className="child_removeBtn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

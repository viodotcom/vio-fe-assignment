import React from 'react';

export function Child({
  age,
  onRemove,
  onChangeAge,
}) {
  return (
    <>
      <h4>child</h4>
      <span>
        Child
      </span>
      <span>
        Age
        {age}
        <select value={age} onChange={(e) => onChangeAge(e.currentTarget.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </span>
      <button type="button" onClick={onRemove}>Delete child</button>
    </>
  );
}

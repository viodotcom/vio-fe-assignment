import React from 'react';

export function Child({
  // eslint-disable-next-line react/prop-types
  id, age, onRemove, onIncAge, onDecAge,
}) {
  return (
    <>
      <h4>child</h4>
      <span>
        Child
        {id + 1}
        {' '}
        age
      </span>
      <span>
        Age
        {age}
      </span>
      <button type="button" onClick={onIncAge}>+</button>
      <button type="button" onClick={onDecAge}>-</button>
      <button type="button" onClick={onRemove}>Delete child</button>
    </>
  );
}

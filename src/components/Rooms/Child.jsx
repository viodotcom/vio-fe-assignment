import React from 'react';

export function Child({
  age,
  onRemove,
  onIncAge,
  onDecAge,
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
      </span>
      <button type="button" onClick={onIncAge}>+</button>
      <button type="button" onClick={onDecAge}>-</button>
      <button type="button" onClick={onRemove}>Delete child</button>
    </>
  );
}

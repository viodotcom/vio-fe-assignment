import React from 'react';

// eslint-disable-next-line react/prop-types
export function Child({ id, age, onRemove }) {
  return (
    <>
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
      <button type="button" onClick={onRemove}>Delete child</button>
    </>
  );
}

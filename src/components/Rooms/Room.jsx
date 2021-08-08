import React from 'react';
import { Child } from './Child';

export function Room({
  // eslint-disable-next-line react/prop-types
  id, adults, childrenAges, onRemove,
}) {
  const onRemoveRoom = React.useCallback(() => {
    onRemove(id);
  }, [id]);

  return (
    <div>
      <button type="button" onClick={onRemoveRoom}>Remove room</button>
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
        {childrenAges && childrenAges.length}
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {childrenAges.length && childrenAges.map((age, i) => (
        <>
          <h4>child</h4>
          <Child key={i.toString()} id={i} age={age} />
        </>
      ))}
    </div>
  );
}

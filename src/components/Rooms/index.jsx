import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './roomsSlice';

const Hello = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Hello!</p>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
      {rooms.map((r, i) => (
        <div key={i.toString()}>
          <h1>
            Room
            {i + 1}
          </h1>
          <div key={i.toString()}>
            Adults:
            {r.adults}
          </div>
          <div>
            Children
            {' '}
            {r.childrenAges.length}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hello;

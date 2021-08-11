import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRoomsFromUrl } from './store/actions';
import Rooms from './components/Rooms';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomsFromUrl());
  }, []);

  return (
    <div className="App">
      <Rooms />
    </div>
  );
}

export default App;

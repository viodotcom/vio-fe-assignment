import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRoomsFromUrl, resetToInitial } from './store/actions';
import Rooms from './components/Rooms';
import './App.css';
import { ReactComponent as CrosIcon } from './icons/cros.svg';
import Button from './components/ui/Button';

function App() {
  const dispatch = useDispatch();
  const handleResetToInitial = () => dispatch(resetToInitial());

  useEffect(() => {
    dispatch(getRoomsFromUrl());
  }, []);

  return (
    <div className="app">
      <div className="header">
        <Button
          transparent
          onClick={handleResetToInitial}
          icon={<CrosIcon />}
          className="header_closeBtn"
        />
        {' '}
        Who is staying?
      </div>
      <Rooms />
    </div>
  );
}

export default App;

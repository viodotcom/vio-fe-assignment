import * as R from 'ramda';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MAX_ROOMS_COUNT } from '../../constants';
import { serializeRoomsData } from '../../libs/url';
import { addRoom } from '../../store/actions';
import { Room } from './Room';
import Button from '../ui/Button';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as LensIcon } from '../../icons/lens.svg';
import './index.css';

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const handleAddRoom = React.useCallback(() => dispatch(addRoom()), [dispatch, addRoom]);

  return (
    <div className="rooms">
      <div className="rooms_wrapper">
        <div className="rooms_content">
          {rooms.map((r, i) => (
            <Room
              key={i.toString()}
              id={i}
              adults={R.prop('adults', r)}
              childrenAges={R.prop('childrenAges', r)}
            />
          ))}
          <Button
            fullwidth
            disabled={R.length(rooms) === MAX_ROOMS_COUNT}
            onClick={handleAddRoom}
            icon={<PlusIcon />}
          >
            Add room
          </Button>
        </div>
      </div>
      <div className="stickyContainer">
        <div className="stickyContainer_content">
          <Button
            contained
            fullwidth
            disabled={!R.length(rooms)}
            onClick={() => serializeRoomsData(rooms)}
            icon={<LensIcon />}
          >
            Search
            {' '}
            {rooms.length}
            {' '}
            rooms
            {' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

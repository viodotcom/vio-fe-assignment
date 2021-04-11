import store, {
  resetStore,
  addRoom,
  removeRoom,
  addAdult,
  removeAdult,
  addChild,
  removeChild,
  removeSpecificChild,
  changeChildAge,
} from "store";

describe("Rooms Store", () => {
  beforeEach(() => store.dispatch(resetStore()));

  it("should add and remove a room", () => {
    let { rooms, maxNumberOfRooms } = store.getState();

    expect(rooms.length).toBe(1);

    store.dispatch(addRoom());
    rooms = store.getState().rooms;

    expect(rooms.length).toBe(2);

    let lastRoom = rooms[rooms.length - 1];

    store.dispatch(removeRoom(rooms.indexOf(lastRoom)));
    rooms = store.getState().rooms;

    expect(rooms.length).toBe(1);

    // Preserves one as the lowest possible number
    store.dispatch(removeRoom(rooms.indexOf(lastRoom)));
    rooms = store.getState().rooms;

    expect(rooms.length).toBe(1);

    // Preserves five as the highest possible number
    for (let i = 1; i <= maxNumberOfRooms + 1; i++) {
      store.dispatch(addRoom());
    }

    rooms = store.getState().rooms;

    expect(rooms.length).toBe(8);
  });

  it("should add and remove a adult from a room", () => {
    let { rooms } = store.getState();
    let room = rooms[0];

    expect(room.adultsCounter).toBe(1);

    store.dispatch(addAdult(rooms.indexOf(room)));
    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(2);

    store.dispatch(removeAdult(rooms.indexOf(room)));
    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(1);

    // Preserves one as the lowest possible number
    store.dispatch(removeAdult(rooms.indexOf(room)));
    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(1);

    // Preserves five as the highest possible number
    for (let i = 1; i <= 6; i++) {
      store.dispatch(addAdult(rooms.indexOf(room)));
    }

    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(5);
  });

  it("should preserves the max occupancy of a room", () => {
    const roomIndex = 0;
    let { rooms } = store.getState();
    let room = rooms[0];

    expect(room.totalGuests).toBe(1);

    for (let i = 1; i <= room.maxOccupancy + 1; i++) {
      store.dispatch(addAdult(roomIndex));
    }

    room = store.getState().rooms[roomIndex];

    expect(room.totalGuests).toBe(5);

    store.dispatch(removeAdult(roomIndex));
    room = store.getState().rooms[roomIndex];

    expect(room.totalGuests).toBe(4);

    for (let i = 1; i <= room.maxOccupancy + 1; i++) {
      store.dispatch(addChild(roomIndex));
    }

    room = store.getState().rooms[roomIndex];

    expect(room.totalGuests).toBe(5);
  });

  it("should be able to add and remove a child", () => {
    const roomIndex = 0;
    let { rooms } = store.getState();
    let { children } = rooms[roomIndex];

    expect(children.length).toBe(0);

    store.dispatch(addChild(roomIndex));
    rooms = store.getState().rooms;
    children = rooms[roomIndex].children;

    expect(children.length).toBe(1);

    store.dispatch(removeChild(roomIndex));
    rooms = store.getState().rooms;
    children = rooms[roomIndex].children;

    expect(children.length).toBe(0);

    // Preserves three as the highest possible number
    for (let i = 1; i <= 4; i++) {
      store.dispatch(addChild(roomIndex));
    }

    rooms = store.getState().rooms;
    children = rooms[roomIndex].children;

    expect(children.length).toBe(3);
  });

  it("should be able to change a child age and remove a specific child", () => {
    const roomIndex = 0;

    store.dispatch(addChild(roomIndex));
    store.dispatch(addChild(roomIndex));

    let { rooms } = store.getState();
    let { children } = rooms[roomIndex];

    expect(children.length).toBe(2);

    store.dispatch(
      changeChildAge({ childrenPosition: 1, roomPosition: roomIndex, age: 10 })
    );
    rooms = store.getState().rooms;
    children = rooms[roomIndex].children;

    expect(children[0].age).toBeNull();
    expect(children[1].age).toBe(10);

    store.dispatch(
      removeSpecificChild({ childrenPosition: 0, roomPosition: roomIndex })
    );
    rooms = store.getState().rooms;
    children = rooms[roomIndex].children;

    expect(children.length).toBe(1);
    expect(children[0].age).toBe(10);
  });

  it("should not change child age with invalid value", () => {
    const roomIndex = 0;

    store.dispatch(addChild(roomIndex));

    let { children } = store.getState().rooms[roomIndex];

    store.dispatch(
      changeChildAge({ childrenPosition: 0, roomPosition: roomIndex, age: "" })
    );

    expect(children[0].age).toBeNull();
  });

  it("should reset the store", () => {
    store.dispatch(addRoom());
    store.dispatch(addRoom());
    store.dispatch(addRoom());

    let { rooms } = store.getState();

    expect(rooms.length).toBe(4);

    store.dispatch(resetStore());
    rooms = store.getState().rooms;

    expect(rooms.length).toBe(1);
  });
});

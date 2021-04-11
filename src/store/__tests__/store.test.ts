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
  afterEach(() => {
    store.dispatch(resetStore());
  });

  it("should add and remove a room", () => {
    let { rooms } = store.getState();

    expect(rooms.length).toBe(1);

    store.dispatch(addRoom());
    rooms = store.getState().rooms;

    expect(rooms.length).toBe(2);

    let lastRoom = rooms[rooms.length - 1];

    store.dispatch(removeRoom(rooms.indexOf(lastRoom)));
    rooms = store.getState().rooms;

    expect(rooms.length).toBe(1);
  });

  it("should add and remove a adult from a room", () => {
    let { rooms } = store.getState();
    let room = rooms[0];

    expect(room.adultsCounter).toBe(rooms.indexOf(room));

    store.dispatch(addAdult(rooms.indexOf(room)));
    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(1);

    store.dispatch(removeAdult(rooms.indexOf(room)));
    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(0);

    // Preserve zero as the lowest possible number
    store.dispatch(removeAdult(rooms.indexOf(room)));
    rooms = store.getState().rooms;
    room = rooms[0];

    expect(room.adultsCounter).toBe(0);
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
  });

  it("shoudl be able to change a child age and remove a specific child from the store", () => {
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

  it("shoudl reset the store", () => {
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

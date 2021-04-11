import { RoomType } from "store";

export const serializeRooms = (rooms: Array<RoomType>): string => {
  const mappedRooms = rooms.map((room) => {
    let serializedRoom = String(room.adultsCounter);

    if (room.children.length) {
      const serializedChildren = room.children.reduce(
        (childStr, child, childIndex) => {
          if (childIndex + 1 <= room.children.length) {
            childStr += childIndex ? `,${child.age}` : child.age;
          }
          return childStr;
        },
        ""
      );

      serializedRoom += `:${serializedChildren}`;
    }

    return serializedRoom;
  }, []);

  const reducedRooms = mappedRooms.reduce((str, room, index) => {
    if (index + 1 <= mappedRooms.length) {
      str += index ? `|${room}` : room;
    }

    return str;
  }, "");

  return window.encodeURIComponent(reducedRooms);
};

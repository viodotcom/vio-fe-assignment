import { serializeRooms } from "..";

describe("serializeRooms", () => {
  it("should return a serialized string of rooms", () => {
    const mockedRooms = [
      {
        maxNumberOfAdults: 5,
        maxNumberOfChildren: 3,
        maxOccupancy: 5,
        adultsCounter: 1,
        totalGuests: 1,
        children: [{ age: 2 }, { age: 3 }],
      },
      {
        maxNumberOfAdults: 5,
        maxNumberOfChildren: 3,
        maxOccupancy: 5,
        adultsCounter: 2,
        totalGuests: 1,
        children: [{ age: 4 }],
      },
      {
        maxNumberOfAdults: 5,
        maxNumberOfChildren: 3,
        maxOccupancy: 5,
        adultsCounter: 4,
        totalGuests: 1,
        children: [],
      },
    ];

    const expectedSting = encodeURIComponent("1:2,3|2:4|4");

    expect(serializeRooms(mockedRooms)).toBe(expectedSting);
  });
});

import { chunk } from ".";

describe("Test Chunk array", () => {
  test("Chunk method when input = [1,2,3,4,5] and size = 1", () => {
    const input = [1, 2, 3, 4, 5];
    const size = 1;
    const chunkArrayResult = chunk(input, size);
    expect(chunkArrayResult.toString()).toBe(
      [[1], [2], [3], [4], [5]].toString()
    );
  });

  test("Chunk method when input = [1,2,3,4,5] and size = 3", () => {
    const input = [1, 2, 3, 4, 5];
    const size = 3;
    const chunkArrayResult = chunk(input, size);
    expect(chunkArrayResult.toString()).toBe(
      [
        [1, 2, 3],
        [4, 5],
      ].toString()
    );
  });
});

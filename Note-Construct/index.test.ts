import { canConstructNote } from ".";

describe("Test Note Construct method", () => {
  test.each`
    note    | magazine                                                  | expected
    ${"a"}  | ${"b"}                                                    | ${false}
    ${"a"}  | ${"a"}                                                    | ${true}
    ${"aa"} | ${"ab"}                                                   | ${false}
    ${"aa"} | ${"aab"}                                                  | ${true}
    ${"aa"} | ${"aab"}                                                  | ${true}
    ${"bg"} | ${"efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"} | ${true}
  `(
    "canConstructNote($note, $magazine) === $expected",
    ({ note, magazine, expected }) => {
      expect(canConstructNote(note, magazine)).toBe(expected);
    }
  );
});

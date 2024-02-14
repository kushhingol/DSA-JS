import { isPowerOfThree } from ".";

describe("Test isPowerOfThree Method", () => {
  test.each`
    n          | expected
    ${0}       | ${false}
    ${1}       | ${true}
    ${3}       | ${true}
    ${9}       | ${true}
    ${27}      | ${true}
    ${45}      | ${false}
    ${81}      | ${true}
    ${243}     | ${true}
    ${729}     | ${true}
    ${2187}    | ${true}
    ${6561}    | ${true}
    ${19683}   | ${true}
    ${59049}   | ${true}
    ${177147}  | ${true}
    ${531441}  | ${true}
    ${1594323} | ${true}
    ${-3}      | ${false}
    ${-9}      | ${false}
    ${-27}     | ${false}
  `(
    "test isPowerOfThree when n: $n and result will be $expected",
    ({ n, expected }) => {
      expect(isPowerOfThree(n)).toBe(expected);
    }
  );
});

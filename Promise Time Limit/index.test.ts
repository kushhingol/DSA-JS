import { timeLimit } from ".";

describe("Test Promise Time Limit", () => {
  test("Testcase 1: When t=100 and n=5", async () => {
    const inputFn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const limited = timeLimit(inputFn, 100);
    try {
      await limited(5);
    } catch (e) {
      expect(e).toBe("Time Limit Exceeded");
    }
  });

  test("Testcase 2: Input Value: 0", async () => {
    const inputFn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const limited = timeLimit(inputFn, 100);
    const data = await limited(5);
    expect(data).toBe(25);
  });
});

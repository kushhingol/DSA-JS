import { sleep } from ".";

describe("test sleep method", () => {
  test("Should output 100 if input is 100", async () => {
    let t = Date.now();
    await sleep(100);
    expect(Date.now() - t).toBeGreaterThanOrEqual(100);
  });

  test("Should output 100 if input is 200", async () => {
    let t = Date.now();
    await sleep(200);
    expect(Date.now() - t).toBeGreaterThanOrEqual(200);
  });
});

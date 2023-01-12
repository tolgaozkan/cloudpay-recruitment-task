import { generateRandomNumberBetween } from "./generate-random-number-between";

describe("generateRandomNumberBetween", () => {
  it("should return number between", async () => {
    expect(generateRandomNumberBetween(0, 100)).toBeGreaterThanOrEqual(0);
    expect(generateRandomNumberBetween(0, 100)).toBeLessThanOrEqual(100);
    expect(generateRandomNumberBetween(5, 7)).toBeGreaterThanOrEqual(5);
    expect(generateRandomNumberBetween(5, 7)).toBeLessThanOrEqual(7);
  });
  it("should not return number out of range", async () => {
    expect(generateRandomNumberBetween(0, 100)).not.toBeGreaterThan(100);
    expect(generateRandomNumberBetween(0, 100)).not.toBeLessThan(0);
    expect(generateRandomNumberBetween(5, 7)).not.toBeGreaterThan(7);
    expect(generateRandomNumberBetween(5, 7)).not.toBeLessThan(5);
  });
});

import { getRandomSubarray } from "./get-random-subarray";

describe("getRandomSubarray", () => {
  it("should return selected size of sub array from parent array", async () => {
    const parentArray = ["A", "B", "C", "D", "E"];

    expect(getRandomSubarray(parentArray, 1)).toHaveLength(1);
    expect(getRandomSubarray(parentArray, 2)).toHaveLength(2);
    expect(getRandomSubarray(parentArray, 3)).toHaveLength(3);
  });
  it("should return sub array from parent array", async () => {
    const parentArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

    const subArr = getRandomSubarray(parentArray, 2);
    for (const subArrItem of subArr) {
      expect(parentArray.includes(subArrItem)).toBeTruthy();
    }

    const subArr2 = getRandomSubarray(parentArray, 5);
    for (const subArrItem of subArr2) {
      expect(parentArray.includes(subArrItem)).toBeTruthy();
    }

    const subArr3 = getRandomSubarray(parentArray, 7);
    for (const subArrItem of subArr3) {
      expect(parentArray.includes(subArrItem)).toBeTruthy();
    }
  });
});

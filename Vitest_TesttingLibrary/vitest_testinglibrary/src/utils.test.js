import { describe, it } from "vitest";
import { range } from "./utils";

describe("utils", () => {
  describe("range", () => {
    it("ir returns correct results from 1 - 6 range", () => {
      const results = range(1, 6);
      expect(results).toEqual([1, 2, 3, 4, 5]);
    });
    it("ir returns correct results from 41 - 45 range", () => {
      const results = range(41, 45);
      expect(results).toEqual([41, 42, 43, 44]);
    });
  });
});

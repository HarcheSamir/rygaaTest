"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feature_1 = require("./feature");
describe("concatenateAndSort", () => {
    test("concatenates and sorts two arrays in descending order", () => {
        expect((0, feature_1.concatenateAndSort)([3, 1, 2], [5, 4])).toEqual([5, 4, 3, 2, 1]);
    });
    test("works with empty arrays", () => {
        expect((0, feature_1.concatenateAndSort)([], [1])).toEqual([1]);
        expect((0, feature_1.concatenateAndSort)([1], [])).toEqual([1]);
        expect((0, feature_1.concatenateAndSort)([], [])).toEqual([]);
    });
    test("handles negative numbers", () => {
        expect((0, feature_1.concatenateAndSort)([-1, -3], [-2, 0])).toEqual([0, -1, -2, -3]);
    });
});
describe("findAllPairs", () => {
    test("finds all pairs that sum up to target", () => {
        const result = (0, feature_1.findAllPairs)([1, 2, 3, 4, 5], 5);
        // This test can fail if the result is for example: [[1, 4], [2, 3]].
        // So you can change the order of the tests to make it works
        expect(result).toEqual(expect.arrayContaining([
            [2, 3],
            [1, 4],
        ]));
        expect(result.length).toBe(2);
    });
    test("works with negative numbers and zero", () => {
        const result = (0, feature_1.findAllPairs)([-2, 0, 1, 3], 1);
        // This test can fail if the result is for example: [[0, 1], [-2, 3]].
        // So you can change the order of the tests to make it works
        expect(result).toEqual(expect.arrayContaining([
            [-2, 3],
            [0, 1],
        ]));
        expect(result.length).toBe(2);
    });
    test("handles duplicate numbers correctly", () => {
        const result = (0, feature_1.findAllPairs)([1, 1, 2, 2, 3], 4);
        // This test can fail if the result is for example: [[2, 2], [1, 3]].
        // So you can change the order of the tests to make it works
        expect(result).toEqual(expect.arrayContaining([
            [1, 3],
            [2, 2],
        ]));
        expect(result.length).toBe(2);
    });
    test("returns an empty array when no pairs are found", () => {
        expect((0, feature_1.findAllPairs)([1, 2, 3], 7)).toEqual([]);
    });
    test("ignores multiple identical pairs", () => {
        const result = (0, feature_1.findAllPairs)([1, 1, 1, 2, 2, 3], 3);
        expect(result).toEqual(expect.arrayContaining([[1, 2]]));
        expect(result.length).toBe(1);
    });
});
describe("longestConsecutiveSequence", () => {
    test("finds the longest consecutive sequence", () => {
        expect((0, feature_1.longestConsecutiveSequence)([100, 4, 200, 1, 3, 2])).toBe(4);
    });
    test("returns 0 for empty array", () => {
        expect((0, feature_1.longestConsecutiveSequence)([])).toBe(0);
    });
    test("handles sequence with negative numbers", () => {
        expect((0, feature_1.longestConsecutiveSequence)([-1, -2, -3, 1, 2, 0])).toBe(6);
    });
});
describe("removeDivisibleBy", () => {
    test("removes elements divisible by k", () => {
        let nums = [1, 2, 3, 4, 5, 6];
        expect((0, feature_1.removeDivisibleBy)(nums, 2)).toBe(3);
        expect(nums.slice(0, 3)).toEqual([1, 3, 5]);
    });
    test("returns original length when no element is divisible by k", () => {
        let nums = [1, 3, 5];
        expect((0, feature_1.removeDivisibleBy)(nums, 2)).toBe(3);
    });
    test("returns 0 when all elements are divisible by k", () => {
        let nums = [2, 4, 6];
        expect((0, feature_1.removeDivisibleBy)(nums, 2)).toBe(0);
    });
});
describe("findSingleElement", () => {
    test("finds the single element", () => {
        expect((0, feature_1.findSingleElement)([2, 2, 1])).toBe(1);
        expect((0, feature_1.findSingleElement)([4, 1, 2, 1, 2])).toBe(4);
    });
    test("returns the same number if all elements are the same", () => {
        expect((0, feature_1.findSingleElement)([7, 7, 7])).toBe(7);
    });
    test("handles an empty array", () => {
        expect((0, feature_1.findSingleElement)([])).toBe(0);
    });
});

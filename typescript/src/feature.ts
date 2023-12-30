/*
  Given two arrays of integers, create a function that concatenates these two arrays 
  and then sorts the resulting array in descending order.
*/
export function concatenateAndSort(arr1: number[], arr2: number[]): number[] {
  //concatination and descending sort
  return [...arr1, ...arr2].sort((a, b) => b - a);
}

/*
  Given an array of integers 'nums' and an integer 'target', 
  write a function to find all unique pairs in the array that sum up to 'target'.
  Return an array of pairs.
*/
export function findAllPairs(nums: number[], target: number): [number, number][] {
  const result: [number, number][] = [];
  const seenNumbers = new Set<number>();

  for (const num of nums) {
    const complement = target - num;

    if (seenNumbers.has(complement)) {
      result.push([num, complement]);
    }

    seenNumbers.add(num);
  }

  return result.filter((pair, index, self) => {
    // remove similair pairs
    return index === self.findIndex((p) => p[0] === pair[0] && p[1] === pair[1]);
});
}

/*
  Given an unsorted array of integers 'nums', 
  write a function to find the length of the longest consecutive elements sequence.
*/
export function longestConsecutiveSequence(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  // Sort the array
  nums.sort((a, b) => a - b);

  let longestStreak = 1;
  let currentStreak = 1;

  // Iterate through the sorted array
  for (let i = 1; i < nums.length; i++) {
    // Check if the current element is consecutive to the previous one
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        // Increment the current streak if consecutive
        currentStreak++;
      } else {
        // Reset the current streak if not consecutive
        currentStreak = 1;
      }

      // Update the longest streak
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

/*
  Given an array of integers 'nums' and an integer 'k', 
  write a function to remove all elements that are divisible by 'k' 
  and return the new length of the array.
*/
export function removeDivisibleBy(nums: number[], k: number): number {
  // Use filter to keep only elements not divisible by k
  const filteredArray = nums.filter(num => num % k !== 0);

  // Modify the original array to contain only elements not divisible by k
  nums.length = 0;
  nums.push(...filteredArray);

  // Return the new length of the array
  return nums.length;
}

/*
  Given an array of integers, where every element appears twice except for one,
  write a function to find that single one that does not appear twice.
*/
export function findSingleElement(nums: number[]): number {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}

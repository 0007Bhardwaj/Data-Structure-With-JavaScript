// Easy Level (1-20)

// 1 - Two Sum (LC 1) - Find two numbers that add up to target

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

// 2 -  Best Time to Buy and Sell Stock (LC 121) - Maximum profit from stock prices

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1), sell on day 5 (price = 6), profit = 6 - 1 = 5.

function maxProfit(prices = []) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let index = 0; index < prices?.length; index++) {
    if (prices[index] < minPrice) {
      minPrice = prices[index];
    } else {
      maxProfit = Math.max(maxProfit, prices[index] - minPrice);
    }
  }
  return maxProfit;
}

// 3 - Contains Duplicate (LC 217) - Check if array has duplicates

// nums = [1, 2, 3, 1] → true (because 1 appears twice)
// nums = [1, 2, 3, 4] → false (all numbers are unique)
// nums = [0] → false (only one number)
// nums = [5, 5, 5] → true (5 appears multiple times)

function containsDuplicate(array = [1, 2, 3, 4, 5, 6, 1, 2]) {
  // first approach
  // return array.length !== new Set(array).size;
  // second approach
  const mySet = new Set();
  for (const element of array) {
    if (mySet.has(element)) {
      return true;
    }
    mySet.add(element);
  }
  return false;
}

//  4 - Product of Array Except Self (LC 238) - Product of all elements except current

// Input:  [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

function productOfArrayExceptSelf(array = []) {}

// 5 - Maximum Subarray (LC 53) - Kadane's algorithm for max sum subarray

// Input:  [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function maxSubArray(nums) {

}

// 6. FIND SMALLEST ELEMENT IN THE ARRAY

function findSmallesElement(array = []) {
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    smallest = Math.min(smallest, array[i]);
  }

  return smallest;
}

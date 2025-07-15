// What is the Two Pointers Algorithm?

// The Two Pointers algorithm is a technique that uses two indices (pointers) to traverse a data structure (usually an array or linked list) simultaneously or in some coordinated fashion to solve problems efficiently.

// Core Idea:

// Instead of using nested loops (which can be O(n²) complexity), two pointers can help reduce the complexity to O(n) or O(n log n) depending on the problem.
//  The pointers move through the data structure based on conditions, narrowing down a solution space or checking pairs of elements without redundant comparisons.

// When and Why Use Two Pointers?

// 1. When you need to process or analyze pairs or subarrays in a linear structure.
// 2. To reduce time complexity from quadratic to linear or near linear.
// 3. When the problem involves sorted data or requires searching for pairs, triplets, or subarrays with certain properties.
// 4. When you need to partition or segregate elements (e.g., separating even and odd numbers).
// 5. Useful in problems involving sliding windows, merging two sorted arrays, or palindrome checking.

// IMPORTANT QUESTIONS
// QUESTION 1- REVESE VOWELS OF STRING USING TWO POINTERS

function reverseStringVowels(str = "hello") {
  const vowels = new Set("aeiouAEIOU");
  const arr = [...str];
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
    } else if (!vowels.has(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

// QUESTION 2- REVESE COMPLETE  STRING USING TWO POINTERS

function reverseCompleteString(string = "hello") {
  const arr = string.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap characters
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

// QUESTION 3- REMOVE DUPLICATES FROM SORTED ARRAY NON DECREASING ORDER

function removeDuplicateSortedArray(nums = []) {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
}

// QUESTION 4- REVESE WORDS OF A STRING // should not return extra space either in the end, between or start

function reverseWordsOfString(string = "  hello boy    how are   you    ") {
  // approach 1
  let words = string?.split(" ");
  let result = "";
  for (let index = words?.length - 1; index >= 0; index--) {
    if (words?.[index]?.length == 0) continue;
    else {
      if (result.length === 0) result += words[index];
      else {
        result += " " + words[index];
      }
    }
  }
  return result;

  //   approach 2 - using inbuilts methods
  return string
    .trim()
    .split(" ")
    ?.filter((w) => w)
    .reverse()
    .join(" ");
}

// QUESTION 5 - CHECK WHETHER A STRING IS PALINDROME OR NOT

function checkPalindrome(string = "") {
  if (string?.length <= 2) return true;
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

// QUESTION 6 - GIVEN AN INTEGER OF ARRAYS MOVE ALL ZEROS TO THE END OF ARRAY

function moveAllZerosToEnd(arr = []) {
  let left = 0; // position to place next non-zero element

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
  }

  return arr;
}

// QUESTION 7 -TWO SUM PROBLEM (WITHOUT SORTED ARRAY)

function twoSum(nums, target) {
  const map = new Map(); // number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  // If no solution is found (won’t happen as per constraints)
  return [];
}

// QUESTION 8 -TWO SUM PROBLEM (WITH SORTED ARRAY GIVEN)
function twoSumWithSortedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// TWO POINTERS MEDIUM LEVEL QUESTIONS

// 1. CONTAINERS WITH MOST WATER

function containerWithMostWater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let maxWaterHolder = Math.min(height[left], height[right]) * width;
    maxArea = Math.max(maxArea, maxWaterHolder);

    if (height[left] <= height[right]) left++;
    else {
      right--;
    }
  }
  return maxArea;
}

// 2. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

function longestSubstringWithoutRepeatingCharacters(string = "GeeksForGeeks") {
  let maxLength = 0;
  let subString = new Set();
  let left = 0;
  let right = 0;

  while (right < string.length) {
    if (!subString.has(string[right])) {
      subString.add(string[right]);
      maxLength = Math.max(maxLength, subString.size);
      right++;
    } else {
      subString.delete(string[left]);
      left++;
    }
  }

  return maxLength;
}

// 3. LONGEST PALINDROME SUBSTRING

function longestPalindrome(string = "babad") {
  let maxLength = 0;
  let subString = new Set();
  let left = 0;
  let right = 0;
}

// 4. MINIMUM SIZE SUBARRAY SUM LEETCODE - #209

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let min = Infinity;
}

// 4. BUY AND SELL STOCK TO GET MAX PROFIT

// console.log(maxProfit([7,1,5,3,6,4])); // ➤ 5 (Buy at 1, sell at 6)
// console.log(maxProfit([7,6,4,3,1]));   // ➤ 0 (No profit)

function maxProfit(prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
    sell++
  }

  return maxProfit;
}


// IF WE WANT TO RETURN THE SUBARRAY

function maxProfit(prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;
  let bestBuy = 0;
  let bestSell = 1;

  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      if (prices[sell] - prices[buy] > maxProfit) {
        bestBuy = buy;
        bestSell = sell;
      }
      maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
    sell++
  }

   // Return the subarray from bestBuy to bestSell (inclusive)
  return maxProfit > 0 ? prices.slice(bestBuy, bestSell + 1) : [];
}


// IF WE HAVE K DAYS OF DIFFERENCE BETWEEN BUY AND SELL DAY

function maxProfit(prices, K) {
  let buy = 0;
  let sell = K; // Start at K to ensure K-day gap
  let maxProfit = 0;
  let bestBuy = 0;
  let bestSell = K;

  while (sell < prices.length) {
    if (sell - buy >= K) {
      if (prices[sell] > prices[buy]) {
        const profit = prices[sell] - prices[buy];
        if (profit > maxProfit) {
          maxProfit = profit;
          bestBuy = buy;
          bestSell = sell;
        }
      } else {
        // Found a lower price — better to consider buying later
        buy = sell - K + 1;  // Ensure that buy stays K days before sell
      }
    } else {
      // Not enough gap yet; don't compute profit
      // Keep advancing sell until the gap is valid
    }

    sell++;
  }

  return maxProfit > 0 ? prices.slice(bestBuy, bestSell + 1) : [];
}



 // LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

function longestSubstringWithoutRepeatingCharacters(string = "") {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  const uniqueSubString = new Set();

  while (end < string.length) {
    if (!uniqueSubString.has(string[end])) {
      uniqueSubString.add(string[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueSubString.size);
    } else {
      uniqueSubString.delete(string[start]);
      start++;
    }
  }

  return maxLength;
}



// 1. LINEAR SEARCHING IN ARRAY

function linearSearch(array = [], elem) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === elem) return true;
  }
  return false;
}

// 2. BINARY SEARCHING IN ARRAY (SORTED ARRAY)

function binarySearch(array = [], target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 16, 100], 6);

// 3. BINARAY SEARCH IN THE ROTATED ARRAY

function binarySearchInRotatedArray(
  array = [7, 8, 9, 1, 2, 3, 4, 5, 6],
  target = 1
) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === target) return true;

    // Left half is sorted
    if (array[start] <= array[middle]) {
      if (array[start] <= target && target < array[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    // Right half is sorted
    else {
      if (array[middle] < target && target <= array[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }

  return false; // If not found
}

// 4 - SEARCH INSERTION POSITION (LEETCODE -35)

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums = [], target) {
  let left = 0;
  let right = nums.length - 1;

  if (target > nums[right]) return nums.length;
  if (target < nums[left]) return 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // target found
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // If not found, left is the correct insertion point
  return left;
}

// 5. SEARCH IN  ROTATED SORTED ARRAY II (LEETCODE - 81) array may contain duplicates

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

function searchInSortedRotatedTwo(array = [2, 5, 6, 0, 0, 1, 2], target = 0) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;

    // Case when left, mid, and right are the same: duplicates
    if (array[left] === array[mid] && array[mid] === array[right]) {
      left++;
      right--;
    }
    // Left half is sorted
    else if (array[left] <= array[mid]) {
      if (array[left] <= target && target < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (array[mid] < target && target <= array[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Example usage
console.log(searchInSortedRotatedTwo([2, 5, 6, 0, 0, 1, 2], 0)); // might return 3 or 4
console.log(searchInSortedRotatedTwo([2, 5, 6, 0, 0, 1, 2], 3)); // -1




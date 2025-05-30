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

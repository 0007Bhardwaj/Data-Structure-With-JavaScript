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


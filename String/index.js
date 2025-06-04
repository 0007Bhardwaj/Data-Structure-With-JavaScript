//  1 - FIRST NON REPEATING CHARACTER IN STRING

firstUniqChar("leetcode"); // Output: 0
firstUniqChar("loveleetcode"); // Output: 2
firstUniqChar("aabb"); // Output: -1

var firstUniqChar = function (s) {
  const count = {};

  // Count the frequency of each character
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

// 2 - REVERSE STRING IN PLACE

function reverseString(s="") {
    let string = s.split('')
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    [string[start], string[end]] = [string[end], string[start]];
    start++;
    end--;
  }
  return string.join('')
}


// 3 - REVESE WORDS OF STRING 

function reverseWordsOfString(s="  Hello Amity   Univesity    ") {
    let string = s.trim().split(' ')
    

    
}
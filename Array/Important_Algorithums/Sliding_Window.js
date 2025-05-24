// 1 - LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

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




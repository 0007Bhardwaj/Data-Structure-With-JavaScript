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
    }else if (array[middle] < target) {
        start = middle + 1;
    }else{
        end = middle - 1;

    }
  }
  return -1
}


const res = binarySearch([1,2,3,4,5,6,7,8,9,11,12,14,16, 100], 6)
console.log(res)

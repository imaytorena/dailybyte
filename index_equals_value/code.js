function solution2(array) {
  let index = 0;
  while (index < array.length) {
    if (array[index] === index) {
      return index;
    }
    index += 1;
  }
  return -1;
}

function solution1(array) {
  let index = 0;
  while (index < array.length) {
    if (array[index] === index) {
      return index;
    } else if (array[index] <= array.length - 1) {
      index = array[index];
    } else {
      return -1;
    }
  }
}

console.log(solution2([0, 4, 8]));
console.log(solution2([1, 5, 9, 10, 12]));
console.log(solution2([2, 4, 6, 8, 9]));
console.log(solution2([5, 5, 5, 5, 5, 5]));

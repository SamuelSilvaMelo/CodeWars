function countAdjacentPairs(searchString) {
  if (searchString.length === 0) {
    return 0
  }

  let arrayStrings = searchString.toLowerCase().split(' ').filter(curr => {
    if (curr !== ' ' && curr !== ',') {
      return curr
    }
  })

  let count = 0;
  let index = 1;

  while (index < arrayStrings.length) {
    if (arrayStrings[index] === arrayStrings[index - 1]) {
      count += 1;
      while(arrayStrings[index] === arrayStrings[index -1 ]) {
        index += 1;
      }
    } else {
      index += 1
    }
  }

  return count;
}

console.log(countAdjacentPairs('1 1 2 1 1 1 2 2 4 5 5 5 15 235 235 50 244  ,     ,  '))
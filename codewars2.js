function arrayDiff(a, b) {
  return a.filter(testA => {
    if (b.some(testB => testB === testA)) {
      return null
    }
    return testA
  })
}

console.log(arrayDiff([1,8,2], []))

// 1 1 null
// 1 2 1
// 2 1 2
// 2 2 null
// 3 1 3
// 3 2 3

// Reduce
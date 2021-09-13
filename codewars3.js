// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countBits(0), 0);
//     assert.strictEqual(countBits(4), 1);
//     assert.strictEqual(countBits(7), 3);
//     assert.strictEqual(countBits(9), 2);
//     assert.strictEqual(countBits(10), 2);
//     })
//   })

function countBits(n) {
  let binaryNumber = '';
  let divResult;

  if (!divResult) {
    if (n === 1) {
      binaryNumber += '1';
    } else if (n % 2 === 0) {
      divResult = n / 2;
      binaryNumber += '0';
    } else {
      divResult = Math.trunc(n / 2);
      binaryNumber += '1';
    }
  }

  for (let index = divResult; index >= 1; index = divResult) {
    if (index % 2 === 0) {
      divResult = Math.trunc(divResult / 2);
      binaryNumber += '0';
    } else {
      divResult = Math.trunc(divResult / 2);
      binaryNumber += '1';
    }
  }

  const finalResult = binaryNumber.split('').reduce(((acc, curr) => acc = parseInt(acc) + parseInt(curr)), 0);
  
  return finalResult;
}

console.log(countBits(1234))

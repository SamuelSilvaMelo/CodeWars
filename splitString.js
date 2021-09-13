// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function splitStrings(str) {
  let newString = str.split('')
  let result = [];

  if(str.length % 2 === 0) {
    newString.forEach((str, index, array) => {
      if(index % 2 === 0) {
        result.push(`${str}${array[index + 1]}`);
      }
    })
  }

  if(str.length % 2 === 1) {
    newString.forEach((str, index, array) => {
      if(array[index + 1]) {
        if(index % 2 === 0) {
          result.push(`${str}${array[index + 1]}`);
        }
      }
      if(newString.length - 1 === index) {
        result.push(`${str}_`)
      }
    })
  }

  return result;
}

console.log(splitStrings('abcdefg'))
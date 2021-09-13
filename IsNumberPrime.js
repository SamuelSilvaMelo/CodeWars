// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for (let index = 2; index <= Math.sqrt(num); index += 1) {
    if (num % index === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2147483648));

function tribonacci(signature,n){
  if (!signature) return 'Error';
  if (signature.length < 3) return 'Error';
  if (n === 0) return [];
  if (n === 1) return [signature[0]];

  let value = signature;

  for (let index = 3; index < n; index += 1) {
    value = [...value, (value[index - 3] + value[index - 2] + value[index - 1])]
  }

  return value
}

console.log(tribonacci([1, 1], 10))
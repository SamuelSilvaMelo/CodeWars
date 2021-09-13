function solve(s) {
  const checkString = s.split('').map(str => str === str.toUpperCase() ? true : false);

  const upperLength = checkString.filter(teste => teste === true).length
  const lowerLength = checkString.filter(teste => teste === false).length

  if (lowerLength > upperLength) {
    return s.toLowerCase();
  } else if (upperLength > lowerLength) {
    return s.toUpperCase();
  } 

  return s.toLowerCase();
} 

console.log(solve('xaBlau'));

// LowerCase.length > UpperCase.length -> Passar tudo para LowerCase
// UpperCase.length > LowerCase.length  -> Passar tudo para UpperCase
// UpperCase === LowerCase -> Passar tudo para LowerCase

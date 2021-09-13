function teste(string) {
  let strToLowerCase = string.toLowerCase();
  let index = 0;
  let index2 = 1;
  let result = '';
  let isMatch = true;

  while(index < string.length) {
    while(strToLowerCase[index2]) {
      if(strToLowerCase[0] === strToLowerCase[index2]) {
        result += ')';
        isMatch = false;
        strToLowerCase = strToLowerCase.replace(strToLowerCase[0], '');
      }
      index2 += 1;
    }
    if (isMatch) {
      result += '('
      strToLowerCase = strToLowerCase.replace(strToLowerCase[0], '');
    }
    index += 1;
    index2 = 1;
    isMatch = true;
  }

  return result;
}

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

console.log(teste('Recede'))


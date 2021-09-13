// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const newText = text.toLowerCase().split('');
  let result = [];

  for(let index = 0; index < newText.length; index += 1) {
    let alphabetIndex = 0;
    while(alphabetIndex < alphabet.length) {
      if(newText[index] === alphabet[alphabetIndex]) {
        result.push(alphabetIndex + 1)
      }
      alphabetIndex += 1
    }
  }

  return result.join(' ');
}

console.log(alphabetPosition('bjeifdakl'))

// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(peopleInLine){
  if (peopleInLine[0] > 25) {
    return 'NO';
  }  
  
  const money = {
    25: 1,
    50: 0,
    100: 0,
  };

  const ticketPrice = 25;

  for(let index = 1; index < peopleInLine.length; index += 1) {
    if(peopleInLine[index] === ticketPrice) {
      money[25] += 1;
    } 

    if(peopleInLine[index] === 50) {
      money[50] += 1;
      if(money[25] > 0) {
        money[25] -= 1;
      } else {
        return 'NO';
      }
    }

    if(peopleInLine[index] === 100) {
      money[100] += 1;
      if(money[25] > 0 && money[50] > 0) {
        money[25] -= 1;
        money[50] -= 1;
      } else if(money[25] >= 3) {
        money[25] -= 3;
      } else {
        return 'NO';
      }
    }
  }

  return 'YES';
}

console.log(tickets([25, 25, 25, 25, 50, 100, 50]));

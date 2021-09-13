// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

function uniqueInOrder(iterable) {
  if(iterable.length === 0) {
    return [];
  }

  filterByType = iterable;

  if(typeof(iterable) === 'string') {
    filterByType = iterable.toString().split('');
  }

  return (
    filterByType
      .reduce(((acc, curr) => {
        if(curr === acc[acc.length - 1]) {
          return acc
        } else {
          return acc = [...acc, curr]
        }
      }), [])
  );
}

console.log(uniqueInOrder([1,2,2,3]))
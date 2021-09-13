function list(names){
  if (names.length === 0) return '';

  let result = [];
  
  names.forEach(({ name }, index) => {
    if (index === names.length - 2) {
      result += `${name} & `
    } else if (index === names.length - 1) {
      result += name
    } else {
      result += `${name}, `
    }

  })

  return result;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
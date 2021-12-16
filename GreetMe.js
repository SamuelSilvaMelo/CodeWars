const greet = function(name) {
  const nameToLowerCase = name.toLowerCase();
  const firstLetterToUpperCase = (
    nameToLowerCase.replace(nameToLowerCase[0], nameToLowerCase[0].toUpperCase())
  );
  return `Hello ${firstLetterToUpperCase}!`;
};

console.log(greet('riley'))
var maxSequence = function(arr){
  let maxSequence = arr;

  let sumMaxSequence = 0;

  for (let index1 = 0; index1 < maxSequence.length; index1 ++) {
    let sumSequence = 0

    for (let index2 = index1; index2 < maxSequence.length; index2 ++) {
      sumSequence += maxSequence[index2]

      if (sumSequence > sumMaxSequence) {
        sumMaxSequence = sumSequence;
      }
    }

  }

  return sumMaxSequence;
}

//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strands1, strands2) => {
  let count = 0;
  if (strands1.length !== strands2.length) {
    throw new Error ('strands must be of equal length') 
  }

  if (strands1 === '') {
    return count = strands2.length;
  }
  if (strands2 === '') {
    return count = strands1.length;
  }

  for (let i = 0; i < strands1.length; i++) {
    if (strands1[i] !== strands2[i]) {
      count++
    }
  }
  return count
};

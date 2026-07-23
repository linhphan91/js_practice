//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
 
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i
    }
  }

  if (sum < number || sum === 1) {
    return "deficient"
  }
  if (sum > number) {
    return "abundant"
  }
  if (sum === number) {
    return "perfect"
  }

  
};

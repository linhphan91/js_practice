//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  let arr = [];
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }

  let sum = 0;
  for (let j = 0; j < arr.length; j++){
    sum += arr[j];
  }

  if (sum < number || arr.length === 1) {
    return "deficient"
  }
  if (sum > number) {
    return "abundant"
  }
  if (sum === number) {
    return "perfect"
  }

  
};

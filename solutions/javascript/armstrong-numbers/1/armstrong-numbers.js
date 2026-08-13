//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const digits = String(num);
  const len = digits.length;
  let sum = 0n;

  for (let i = 0; i < len; i++) {
    const digit = BigInt(digits[i]);
    sum += digit ** BigInt(len);
  }

  return sum === BigInt(num);
};

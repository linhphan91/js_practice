//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const letters = new Set();
  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      letters.add(char);
    }
  }
  
  return letters.size === 26;
            
};

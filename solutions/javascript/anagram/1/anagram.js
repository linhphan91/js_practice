//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function normalize(word) {
  return word.toLowerCase().split("").sort().join("")
} 
  
export const findAnagrams = (word, candidate) => {
  const word1 = normalize(word);

  let result = [];
for (const item of candidate) {
  let word2 = normalize(item)

  if (word.toLowerCase() !== item.toLowerCase()) {
     if (word1 === word2) {
      result.push(item)
    }
  }   
  }

  return result
};

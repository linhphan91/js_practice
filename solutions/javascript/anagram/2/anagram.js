//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function normalize(word) {
  return word.toLowerCase().split("").sort().join("")
} 
  
export const findAnagrams = (word, candidate) => {
  const word1 = normalize(word);

return candidate.filter(item => 
   word.toLowerCase() !== item.toLowerCase()
   && word1 === normalize(item) 
) 
};

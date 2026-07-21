//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
  let newWord = "";
  if (word !== '' || word !== " ") {
    for (const char in word) {
    newWord += word.charAt(word.length - 1)
    word = word.slice(0, -1)
  }
  return newWord
  }
  
};

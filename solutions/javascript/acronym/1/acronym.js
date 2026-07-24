//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let result = [];
  const newPhrase = phrase.split(/[\s_-]+/)
  for (const ph of newPhrase) {
    let a = ph.charAt(0).toUpperCase();
     result.push(a)
  }
  return result.join("")
};

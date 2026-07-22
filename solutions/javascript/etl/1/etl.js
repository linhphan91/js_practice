//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  // const map = {
  //   1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  //   2: ["D", "G"],
  //   3: ["B", "C", "M", "P"],
  //   4: ["F", "H", "V", "W", "Y"],
  //   5: ["K"],
  //   8: ["J", "X"],
  //   10: ["Q", "Z"]
  // }
 const result = {};
for (const score in old) {
  for (const letter of old[score]) {
   result[letter.toLowerCase()] = Number(score);
  }
}
  return result
 
};

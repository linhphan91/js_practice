//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const map = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  }
let rna = "";
  for (let i = 0; i < dna.length; i++) {
    rna += map[dna[i]];
  }
  return rna
};

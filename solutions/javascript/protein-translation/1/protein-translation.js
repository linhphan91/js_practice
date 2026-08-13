//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = "") => {
let result = [];
for (let i = 0; i < rna.length; i+=3) {
  const text = rna.slice(i, i+3)
  
 if (text === "UAA" || text === "UAG" || text === "UGA") {
    break;
  }
  
switch (text) {
  case ("AUG"): result.push("Methionine");
    break;
  case ("UUU"):
  case ("UUC"): result.push("Phenylalanine");
    break;
  case ("UUA"):
  case ("UUG"): result.push("Leucine");
    break;
  case ("UCU"):
  case ("UCC"):
  case ("UCA"):
  case ("UCG"): result.push("Serine");
    break;
  case ("UAU"):
  case ("UAC"): result.push("Tyrosine");
    break;
  case ("UGU"):
  case ("UGC"): result.push("Cysteine");
    break;
  case ("UGG"): result.push("Tryptophan");
    break;
 default:
  throw new Error("Invalid codon");
}
 
}
  return result;
}

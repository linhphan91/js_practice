//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export const decodedValue = ([color1, color2]) => {
   let num1 = COLORS.indexOf(color1);
  let num2 = COLORS.indexOf(color2);

  return num1*10 + num2
};

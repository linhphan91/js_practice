//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let year1 = year.toString();
   if (year1.endsWith("00")) {
     if (year % 400 == 0) {
      return true
     }
       return false
    }
  if (year % 4 == 0) {
      return true   
   }
  return false

};

//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  /*convert to timestamp (ms))
  1Gs = 1B * 1000
  */
  ;
  const futureDate = new Date(date.getTime() + (1000000000 * 1000))
  return futureDate
  
};

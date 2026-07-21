//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    if (message.trim() === "") {
    return "Fine. Be that way!"
  } 
   if (message.endsWith("?") && message.match(/^[^a-z]*[A-Z][^a-z]*$/)) {
    return "Calm down, I know what I'm doing!"
  } 
  if (message.trim().endsWith("?")) {
    return "Sure."
  }
  if(message.match(/^[^a-z]*[A-Z][^a-z]*$/)){
    return "Whoa, chill out!"
  }
      
  return "Whatever."
  
};

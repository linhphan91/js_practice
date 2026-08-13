//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  let result = "";
  let count = 1;
    for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i+1]) {
      count++
    }
    else {
      if (count !== 1) {
        result += count + string[i]
      }
        else {
          result += string[i]
        }
      count = 1; 
    } 
   
  }     
  return result   
};

export const decode = (string) => {
  let result = "";
  let count = "";
  for (let i = 0; i < string.length; i++) {
    if (/\d/.test(string[i])) {
      count += string[i]
    }
    else {
      let repeat = count === "" ? 1 : Number(count)
      result += string[i].repeat(repeat);
      count = ""
    }
  }
  return result
  
};

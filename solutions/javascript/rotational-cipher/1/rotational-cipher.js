//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, num) => {
  let result = ''
  let charNum = 0;
  for (const char of text) {
    if (char.match(/[a-z]/)){
      charNum = char.charCodeAt(0);
      const a = ((charNum - 97 + num) % 26 + 97)
     result += String.fromCharCode(a)
    }
    else if (char.match(/[A-Z]/)){
      charNum = char.charCodeAt(0)
      const b = ((charNum - 65 + num) % 26 + 65)
     result += String.fromCharCode(b)
    }
    else {
      result +=char
    }   
  }
  return result
  
};

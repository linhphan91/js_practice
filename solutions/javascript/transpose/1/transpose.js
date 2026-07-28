//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (lines) => {
  if (lines.length === 0) {
    return [];
  }

  const maxLength = Math.max(...lines.map(line => line.length));
  const result = [];

  for (let col = 0; col < maxLength; col++) {
    let newLine = "";

    for (let row = 0; row < lines.length; row++) {
      if (col < lines[row].length) {
        newLine += lines[row][col];
      } else {
        const hasCharacterBelow = lines
          .slice(row + 1)
          .some(line => col < line.length);

        if (hasCharacterBelow) {
          newLine += " ";
        }
      }
    }

    result.push(newLine);
  }

  return result;
};
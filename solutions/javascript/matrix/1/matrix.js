//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
      .split("\n")
      .map(row => row.split(" ").map(Number))
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    const columns = [];

    for (let col = 0; col < this.matrix[0].length; col++) {
      columns.push([]);

      for (let row = 0; row < this.matrix.length; row++) {
        columns[col].push(this.matrix[row][col])
      }
    }
    return columns;
  }
}

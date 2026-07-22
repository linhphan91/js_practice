//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  isValid() {
    const [a, b, c] = this.sides
    return (
      a > 0 && b > 0 && c > 0
    && a + b >= c && a + c >= b && b + c >= a
    )
    }


  get isEquilateral() {
    const [a, b, c] = this.sides
    return this.isValid() && (a === b && b === c)
  }

  get isIsosceles() {
    const [a, b, c] = this.sides
    return this.isValid() && (a === b || a === c || b === c)
  }

  get isScalene() {
    const [a, b, c] = this.sides
    return this.isValid() && (a !== b && b !== c && a !== c)
  }
}

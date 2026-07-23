//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance;
  #isOpen;
  constructor() {
    this.#isOpen = false;
    this.#balance = 0;
  }

  open() {
  if (this.#isOpen) {
    throw new ValueError()
  }
    this.#isOpen = true;
    this.#balance = 0;
  }

  close() {
    if (this.#isOpen) {
      this.#isOpen = false;
      this.#balance = 0;
    }
    else throw new ValueError()
  }

  deposit(amount) {
    if (!this.#isOpen) {
      throw new ValueError()
    }
    if (amount <= 0) {
      throw new ValueError()
    }
    return this.#balance += amount;
  }

  withdraw(amount) {
    if (!this.#isOpen) {
      throw new ValueError()
    }
    if (amount <= 0 || amount > this.#balance) {
      throw new ValueError()
    }
    return this.#balance -= amount;
  }
  

  get balance() {
    if (!this.#isOpen) {
    throw new ValueError()
  }
    return this.#balance
}
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

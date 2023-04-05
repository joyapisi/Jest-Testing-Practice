class Calculator {
  static add(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  static divide(number, divisor) {
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
    return number / divisor;
  }

  static subtract(...numbers) {
    return numbers.reduce((acc, cur) => acc - cur);
  }

  static multiply(...numbers) {
    return numbers.reduce((acc, cur) => acc * cur, 1);
  }
}

return Calculator.add();
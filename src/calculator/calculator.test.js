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

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });

    it('should add more than two numbers', () => {
      expect(Calculator.add(2, 3, 4)).toBe(9);
    });

    it('should return 0 for no arguments', () => {
      expect(Calculator.add()).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(Calculator.divide(10, 2)).toBe(5);
    });

    it('should throw an error if dividing by zero', () => {
      expect(() => Calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(Calculator.subtract(10, 5)).toBe(5);
    });

    it('should subtract more than two numbers', () => {
      expect(Calculator.subtract(10, 5, 2)).toBe(3);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(Calculator.multiply(2, 3)).toBe(6);
    });

    it('should multiply more than two numbers', () => {
      expect(Calculator.multiply(2, 3, 4)).toBe(24);
    });

    it('should return 1 for no arguments', () => {
      expect(Calculator.multiply()).toBe(1);
    });
  });
});

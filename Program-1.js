class Calculator {
  constructor(a, b, operator) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operator = operator.toLowerCase();
  }

  calculate() {
    if (this.operator === 'add') {
      return `Result for addition is ${this.a + this.b}`;
    } else if (this.operator === 'subtract') {
      return `Result for subtraction is ${this.a - this.b}`;
    } else if (this.operator === 'multiply') {
      return `Result for multiplication is ${this.a * this.b}`;
    } else if (this.operator === 'divide') {
      return this.b !== 0
        ? `Result for division is ${this.a / this.b}`
        : 'Error: Cannot divide by zero';
    } else {
      return 'Invalid operator';
    }
  }
}

const result1 = new Calculator(25, 8, 'add');
console.log(result1.calculate());

const result2 = new Calculator(20, 6, 'subtract');
console.log(result2.calculate());

const result3 = new Calculator(15, 3, 'multiply');
console.log(result3.calculate());

const result4 = new Calculator(28, 7, 'divide');
console.log(result4.calculate());

const result5 = new Calculator(13, 0, 'divide');
console.log(result5.calculate());

const result6 = new Calculator(28, 5, ',');
console.log(result6.calculate());

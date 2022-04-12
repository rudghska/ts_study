type CalculName = 'add' | 'sub' | 'multi' | 'div' | 'rem';

function calculate(calculName: CalculName, num1: number, num2: number): number {
  switch (calculName) {
    case 'add':
      return num1 + num2;
    case 'sub':
      return num1 - num2;
    case 'multi':
      return num1 * num2;
    case 'div':
      return num1 / num2;
    case 'rem':
      return num1 % num2;
    default:
      throw new Error(`${calculName} 잘못 입력`);
  }
}

console.log(calculate('add', 1, 2));
console.log(calculate('sub', 2, 1));
console.log(calculate('multi', 2, 2));
console.log(calculate('div', 10, 2));
console.log(calculate('rem', 5, 2));

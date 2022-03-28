{
  //Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //Typescript
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  //Javascript
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      return resolve(100);
    });
  }

  //Typescript
  // Promise 사용하려면 tsconfig.json lib -> es2015 이상으로
  function tsFetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      return resolve(100);
    });
  }

  //Optional parameter

  function printName(fName: string, lName?: string) {
    console.log(fName);
    console.log(lName);
  }

  printName('n', 'kh');
  printName('n');

  //Default parameter
  function printMsg(msg: string = 'Default Message') {
    console.log(msg);
  }

  printMsg();

  //Rest parameter
  function addNums(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
  }

  addNums(1, 2, 3, 4, 5);
}

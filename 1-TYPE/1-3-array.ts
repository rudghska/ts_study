{
  //Array

  const arr1: string[] = ['a', 'b', 'c'];
  const arr2: number[] = [1, 2, 3, 4];
  const arr3: Array<number> = [1, 2, 3, 4];

  function printArray1(arr: string[]) {
    console.log(arr);
  }

  function printArray2(arr: readonly string[]) {
    console.log(arr);
  }

  //function printArray3(arr : readonly Array<string>) <- 이건 안됨

  // Tuple -> interface, type alias, class

  // 이런식으로 사용하는것은 권장 하지 않는다
  // 동적으로 리턴하는데 유용하다
  let user: [string, number]; //ex) React -> useState()
  user = ['abcd', 1234];
  user[0];
  user[1];
}

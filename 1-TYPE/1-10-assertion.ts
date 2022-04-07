{
  //Type Assertions 정말 장담하는 경우가 아니라면 쓰지 말자

  function jsStrFunc(): any {
    return 'hi';
  }

  const result = jsStrFunc();

  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)) 앱이 죽는다 이 경우는

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // const numbers = findNumbers()!;

  numbers!.push(2); // 진짜진짜 장담 할때 ㅋㅋ

  // const button = document.querySelector('button')! ; Dom 요소를 조작 할때 정말 있을때
}

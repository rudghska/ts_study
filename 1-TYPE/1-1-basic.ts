{
  // Javascript
  // Primitive : number, string, boolean, symbol, undefined, null, bingint
  // Object : function , array

  //Typescript

  //number

  const num: number = 123;

  //string
  const str: string = 'typescript';

  //boolean

  const bool: boolean = true;

  //undefined (값이 결정되지 않은 상태)
  let n1: undefined; // 이런식으로 잘 사용 하지 않는다
  let n2: number | undefined;
  //null ( 값이 비어있다)
  //   undefined 와 같은 방식으로 사용 한다 (OR 연산자)

  //unknown 쓰지 않는것이 좋다
  // 아직 어떤 타입이 될지 모를 때
  let notSure: unknown = 0;
  notSure = 'abcd';
  notSure = true;

  //any
  // unknown 과 비슷하다, 사용하지 않는것이 좋다
  // 어떤것이든 다 담을수 있다

  //void
  // 함수의 반환 타입에 사용, 변수에는 거의 사용하지않는다

  //never
  // 리턴 할수 없다
  // 에러를 던지거나 while 문

  //object
  let obj: object; // 사용하지 않는것이 좋다 (객체, 배열..)
}

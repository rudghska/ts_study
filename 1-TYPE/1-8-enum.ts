{
  // Enum

  // javascript 에는 다른 Enum 형식처럼 쓸수없다
  // 비슷하게 할 수 있는 방식으로 Object.freez 오브젝트 값들을 상수처럼 만든다

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //Typescript
  // 값을 지정하지 않으면 0 부터 시작한다
  // 문자열도 지정 할수 있다
  //ex) Monday = 'Mon'

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday = 'fri',
    Saturday = 'sat',
    Sunday = 'sun',
  }

  // 사용 하지 않는것이 좋다
  // type이 Days 타입인데 다른 숫자들을 할당 할수있다
  let days: Days = Days.Friday;
  days = 10;
}

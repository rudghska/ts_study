{
  // Type inference
  // 타입 추론

  // 이렇게 default parameter로 타입 추론으로 하게 되면 할당된 타입으로 지정 된다
  function print(message = 'hi') {
    console.log(message);
  }

  // 나도 개인적으로는 타입추론이 좋지 않고 좋아하지도 않는다.
  // 타입을 정확하게 명시 해주는 것이 좋다고 생각된다
}

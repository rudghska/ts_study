{
  // Union type : OR

  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }

  move('down');

  type Size = 2 | 4 | 8;

  const size: Size = 8;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in~',
      },
    };
  }
}

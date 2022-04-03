{
  //공통된 프로퍼티를 가지고 있음으로서 좀 더 구분하기 쉽게 할수있다
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in~',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}

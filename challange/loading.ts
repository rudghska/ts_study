type Loadingstate = {
  state: 'loading';
};

type SuccessState = {
  state: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  state: 'fail';
  reason: string;
};

type ResourceLoadState = Loadingstate | SuccessState | FailState;

function printLoginState(loginState: ResourceLoadState) {
  switch (loginState.state) {
    case 'loading':
      return 'loading...';
    case 'success':
      return loginState.response.body;
    case 'fail':
      return loginState.reason;
  }
}

console.log(printLoginState({ state: 'loading' }));
console.log(printLoginState({ state: 'success', response: { body: 'loaded' } }));
console.log(printLoginState({ state: 'fail', reason: 'no network' }));

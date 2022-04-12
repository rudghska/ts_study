{
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }

  const number: number = checkNotNull(123);
  const boal: boolean = checkNotNull(false);
}

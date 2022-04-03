{
  // Type Aliases

  type Text = string;
  type Num = number;

  type User = {
    name: Text;
    id: Num;
  };

  const user: User = {
    name: 'movi',
    id: 123,
  };

  // String Literal Types

  type Name = 'name';

  let myName: Name = 'name';

  type JSON = 'json';

  const json: JSON = 'json';
}

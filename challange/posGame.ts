const position = {
  x: 0,
  y: 0,
};

type Move = 'up' | 'down' | 'right' | 'left';

function move(pos: Move) {
  switch (pos) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    default:
      throw new Error('pos name Error');
  }
}

console.log(position);
move('up');

console.log(position);
move('left');

console.log(position);
move('right');

console.log(position);
move('down');

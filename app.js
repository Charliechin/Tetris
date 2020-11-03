// const lTetromino = 'firstShape';
// const zTetromino = 'secondShape';
// const oTetromino = 'ThirdShape';
// const iTetromino = 'fourthShape';
// const tTetromino = 'fifthShape';

// const tetrominoes = [lTetromino, zTetromino, oTetromino, iTetromino, tTetromino];


document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const width = 10;
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#start-button')
  console.log(squares);

  let currentPosition = 4;


  // The tetrominoes. Each contains four arrays with its rotations
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];


  const tetrominoes = [lTetromino];
  let current = tetrominoes[0][0];

  console.log(tetrominoes);

  draw = () => {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
      console.log(squares[currentPosition + index]);
    })
  }

  draw();


  // Other shapes from Ania's repo
  // const zTetromino = [
  //   [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
  //   [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
  //   [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
  //   [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
  // ];

  // const tTetromino = [
  //   [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
  //   [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
  //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
  //   [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
  // ];

  // const oTetromino = [
  //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
  //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
  //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
  //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
  // ];

  // const iTetromino = [
  //   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
  //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
  //   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
  //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
  // ];
  // Other shapes from Ania's repo


})


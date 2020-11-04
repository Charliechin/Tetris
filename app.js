// const lTetromino = 'firstShape';
// const zTetromino = 'secondShape';
// const oTetromino = 'ThirdShape';
// const iTetromino = 'fourthShape';
// const tTetromino = 'fifthShape';

// const tetrominoes = [lTetromino, zTetromino, oTetromino, iTetromino, tTetromino];


document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#start-button')
  console.log(squares);

  let currentPosition = 4;
  let currentRotation = 0;

  const width = 10;
  // The tetrominoes. Each contains four arrays with its rotations

  const lTetromino = [
    [1, 2, width + 1, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2, width * 2 + 1],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];

  // const lTetromino = [
  //   [1, width + 1, width + 2, width * 2 + 1],
  //   [width, width + 1, width + 2, width * 2 + 1],
  //   [1, width, width + 1, width * 2 + 1],
  //   [width, width + 1, width * 1 + 2, width * 2 + 1],
  // ];


  const tetrominoes = [lTetromino];
  let random = Math.floor(Math.random() * tetrominoes.length);
  let current = tetrominoes[random][currentRotation];


  draw = () => {
    // Draw 1st rotation
    current.forEach(index => {
      squares[index + currentPosition].classList.add('tetromino');
      // squares[index + currentPosition].innerHTML = index;
      // console.log(squares[currentPosition + index]);
      console.log(currentPosition);
    })
  }

  undraw = () => {
    current.forEach(index => {
      squares[index + currentPosition].classList.remove('tetromino');
      // console.log("Undrawing");
    })

  }

  freeze = () => {
    const tetrominoesInDeadZone = current.some(
      index =>
        squares[currentPosition + index + width]
          .classList
          .contains('taken')
    );

    if (tetrominoesInDeadZone) {
      current.forEach(index =>
        squares[currentPosition + index].classList.add('taken')
      );
      rnd = Math.floor(Math.random() * tetrominoes.length);
      current = tetrominoes[rnd][currentRotation];
      currentPosition = 4;
      draw();
    }
  }


  // Moves tetromino down every t 
  moveDown = () => {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  };


  function control(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
        break;

      case 39:
        moveRight();
        break;

      default:
        break;
    }
  }

  document.addEventListener('keyup', control);
  // 1000 default
  timerId = setInterval(moveDown, 400);
  moveDown();

  moveLeft = () => {
    undraw();
    const isAtLeftEdge = current.some(
      index => (currentPosition + index) % width === 0
    )

    // if(!isAtLeftEdge) currentPosition -= 1;
    isAtLeftEdge ? '' : currentPosition -= 1;

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1;
    }
    draw();
  };
  moveRight = () => {
    undraw();
    const isAtRightEdge = current.some(
      index => (currentPosition + index) % width === width - 1
    )

    console.log(isAtRightEdge);

    // if(!isAtLeftEdge) currentPosition -= 1;
    isAtRightEdge ? '' : currentPosition += 1;

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1;
    }
    draw();
  };


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


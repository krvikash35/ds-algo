const decision = [];

function traverse(board, row, col) {
  //if reached goal, print the decesions that helped to reach this goal
  if (row === board.length - 1 && col === board[0].length - 1) {
    return console.log(decision);
  }

  //use first choice by going right
  if (col < board[0].length - 1) {
    decision.push("right"); // make a new decesion
    traverse(board, row, col + 1);
    decision.pop(); // remove old decision
  }
  //use second choice by going down
  if (row < board.length) {
    decision.push("down");
    traverse(board, row + 1, col);
    decision.pop();
  }
}

function uniquePath(board) {
  const results = [];
  traverse(board, 0, 0, results);
}

//4*3 board
let board = Array.from(Array(3)).map(_ => Array.from(Array(3)));
uniquePath(board);

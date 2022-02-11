const {
  isEven,
  isOdd,
  divisibleBy,
  eqArrays,
  append,
  head,
  tail,
  last,
  init,
  isEmpty,
  take,
  drop,
  flatten,
  intersperse,
  sum,
  product,
  maximum,
  minimum,
  buildArray,
  range,
} = require("./batteries.js");

const rotate = require("2d-array-rotation").rotate;
const rotate90 = require("2d-array-rotation").rotate90;
const prompts = require("prompts");

const symbol = {
  x: "X",
  o: "O",
  empty: " ",
};

const quad1 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const quad2 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const quad3 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];
const quad4 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const gameboard = [quad1, quad2, quad3, quad4];
const displayRow = (quadA, quadB, row) => {
  console.log(`|${quadA[row]}|${quadB[row]}|`);
};

const displayBoard = (gameboard) => {
  console.log("+---+---+---+");
  displayRow(gameboard[0], gameboard[1], [0]);
  displayRow(gameboard[0], gameboard[1], [1]);
  displayRow(gameboard[0], gameboard[1], [2]);
  console.log("+---+---+---+");
  displayRow(gameboard[2], gameboard[3], [0]);
  displayRow(gameboard[2], gameboard[3], [1]);
  displayRow(gameboard[2], gameboard[3], [2]);
  console.log("+---+---+---+");
};

//if board is full return true, if board is not full return false
fullBoard = (board, marker) =>
  board.every((quad) =>
    quad.every((row) => row.every((marker) => marker !== symbol.empty))
  );

//mergeBoard function

const mergeBoard = (board) => flatten(board);

// console.log(mergeBoard(gameboard));

const checkWinner = (board, marker) => {
  const verticalWin = [
    //Top to Bottom
    [board[0][0], board[1][0], board[2][0], board[6][0], board[7][0]],
    [board[0][1], board[1][1], board[2][1], board[6][1], board[7][1]],
    [board[0][2], board[1][2], board[2][2], board[6][2], board[7][2]],
    [board[3][0], board[4][0], board[5][0], board[9][0], board[10][0]],
    [board[3][1], board[4][1], board[5][1], board[9][1], board[10][1]],
    [board[3][2], board[4][2], board[5][2], board[9][2], board[10][2]],
    //Bottom to Top
    [board[1][0], board[2][0], board[6][0], board[7][0], board[8][0]],
    [board[1][1], board[2][1], board[6][1], board[7][1], board[8][1]],
    [board[1][2], board[2][2], board[6][2], board[7][2], board[8][2]],
    [board[4][0], board[5][0], board[9][0], board[10][0], board[11][0]],
    [board[4][1], board[5][1], board[9][1], board[10][1], board[11][1]],
    [board[4][2], board[5][2], board[9][2], board[10][2], board[11][2]],
  ];

  const horizontalWin = [
    //Left to Right
    [board[0][0], board[0][1], board[0][2], board[3][0], board[3][1]],
    [board[1][0], board[1][1], board[1][2], board[4][0], board[4][1]],
    [board[2][0], board[2][1], board[2][2], board[5][0], board[5][1]],
    [board[6][0], board[6][1], board[6][2], board[9][0], board[9][1]],
    [board[7][0], board[7][1], board[7][2], board[10][0], board[10][1]],
    [board[8][0], board[8][1], board[8][2], board[11][0], board[11][1]],
    //Right to Left
    [board[0][1], board[0][2], board[3][0], board[3][1], board[3][2]],
    [board[1][1], board[1][2], board[4][0], board[4][1], board[4][2]],
    [board[2][1], board[2][2], board[5][0], board[5][1], board[5][2]],
    [board[6][1], board[6][2], board[9][0], board[9][1], board[9][2]],
    [board[7][1], board[7][2], board[10][0], board[10][1], board[10][2]],
    [board[8][1], board[8][2], board[11][0], board[11][1], board[11][2]],
  ];

  const diagonalWin = [
    [board[1][0], board[2][1], board[6][2], board[10][0], board[11][1]],
    [board[0][1], board[1][2], board[5][0], board[9][1], board[10][2]],
    [board[0][0], board[1][1], board[2][2], board[9][0], board[10][1]],
    [board[8][1], board[7][2], board[9][0], board[5][1], board[4][2]],
    [board[7][0], board[6][1], board[2][2], board[4][0], board[3][1]],
    [board[7][1], board[6][2], board[5][0], board[4][1], board[3][2]],
    [board[8][0], board[7][1], board[6][2], board[5][0], board[4][1]],
    [board[7][0], board[6][1], board[2][2], board[4][0], board[3][1]],
    [board[8][1], board[7][2], board[9][0], board[5][1], board[4][2]],
    [board[1][1], board[2][2], board[9][0], board[10][1], board[11][2]],
    [board[0][1], board[1][2], board[5][0], board[9][1], board[10][2]],
    [board[1][0], board[2][1], board[6][2], board[10][0], board[11][1]],
  ];

  if (verticalWin.some((col) => col.join("") === marker.repeat(5))) {
    return true;
  } else if (horizontalWin.some((row) => row.join("") === marker.repeat(5))) {
    return true;
  } else if (diagonalWin.some((diag) => diag.join("") === marker.repeat(5))) {
    return true;
  } else {
    return false;
  }
};

const markPosition = (row, column, marker, quad, board, index) => {
  // if (quadSelected[row - 1][column - 1] === symbol.empty) {
  quad[row - 1][column - 1] = marker;
  board[index] = quad;
  return board;
  // } else if (quadSelected[row - 1][column - 1] !== symbol.empty) {
  //   console.log("Opps! This spot is already taken");
  //   return quadSelected;
  // }
};

const quadIndex = (quadObject) => {
  if (quadObject === "quad1") {
    return 0;
  } else if (quadObject === "quad2") {
    return 1;
  } else if (quadObject === "quad3") {
    return 2;
  } else if (quadObject === "quad4") {
    return 3;
  } else {
    return false;
  }
};
const quadConverter = (quadObject, board) => {
  if (quadObject === "quad1") {
    return board[0];
  } else if (quadObject === "quad2") {
    return board[1];
  } else if (quadObject === "quad3") {
    return board[2];
  } else if (quadObject === "quad4") {
    return board[3];
  } else {
    return false;
  }
};

const shiftQuad = (quad, direction, board) => {
  const tileQuadSelected = quadConverter(quad, board);
  if (direction === "R") {
    console.log(`The tile you selected has shifted right -->`);
    return rotate90(tileQuadSelected);
  } else if (direction === "L") {
    console.log(`The tile you selected has shifted left <--`);
    return rotate(tileQuadSelected, -90);
  }
};

// Prompt Object for Placing the Marker
const marker = [
  {
    type: "text",
    name: "quad",
    message:
      "Which Quad did you want to place your marker (quad1,quad2,quad3,quad4)?",
    validate: (quad) =>
      quad === "quad1" ||
      quad === "quad2" ||
      quad === "quad3" ||
      quad === "quad4"
        ? true
        : `Please type either quad1 or quad 2 or quad3 or quad4`,
  },
  {
    type: "number",
    name: "row",
    message: "What row do you want to place your marker?",
    validate: (row) =>
      row >= 1 && row <= 3
        ? true
        : `Please select row 1 or 2 or 3. It is based on the 3 x 3 quad you selected`,
  },
  {
    type: "number",
    name: "column",
    message:
      "What column (corresponding to the row previously selected) do you want to place your marker?",
    validate: (column) =>
      column >= 1 && column <= 3
        ? true
        : `Please select column 1 or 2 or 3. It is based on the 3 x 3 quad you selected`,
  },
];

// function to playGame and selecter Marker
const playGame = async (board, currentSym) => {
  displayBoard(board);
  console.log(`Player (${currentSym}'s) turn`);
  if (checkWinner(mergeBoard(board), symbol.x)) {
    console.log(`${symbol.x} WINS!`);
    return;
  } else if (checkWinner(mergeBoard(board), symbol.o)) {
    console.log(`${symbol.o} WINS`);
    return;
  } else if (fullBoard(board)) {
    console.log("Tie game.");
    return;
  }

  const response = await prompts(marker);
  const newMarkedBoard = markPosition(
    response.row,
    response.column,
    currentSym,
    quadConverter(response.quad, board),
    board,
    quadIndex(response.quad)
  );

  displayBoard(newMarkedBoard);
  shiftTile(newMarkedBoard, currentSym);
};

// Prompt Object for Shifting the Quad
const quadShift = [
  {
    type: "text",
    name: "quad",
    message: "Which Quad did you want to shift (quad1,quad2,quad3,quad4)?",
    validate: (quad) =>
      quad === "quad1" ||
      quad === "quad2" ||
      quad === "quad3" ||
      quad === "quad4"
        ? true
        : `Please type either quad1 or quad2 or quad3 or quad4`,
  },
  {
    type: "text",
    name: "direction",
    message:
      "What direction did you want to shift the Quad (Left= L and Right= R)?",
    validate: (direction) =>
      direction === "L" || direction === "R"
        ? true
        : `Please type either (Left= L and Right= R)`,
  },
];

//function to shiftTile and then return
const shiftTile = async (newMarkedBoard, currentSym) => {
  if (checkWinner(mergeBoard(newMarkedBoard), symbol.x)) {
    console.log(`${symbol.x} WINS!`);
    return;
  } else if (checkWinner(mergeBoard(newMarkedBoard), symbol.o)) {
    console.log(`${symbol.o} WINS!`);
    return;
  } else if (fullBoard(newMarkedBoard)) {
    console.log("Tie game.");
    return;
  }
  const tileResponse = await prompts(quadShift);

  const newShiftedBoard = (newMarkedBoard) => {
    const newShiftedQuad = shiftQuad(
      tileResponse.quad,
      tileResponse.direction,
      newMarkedBoard
    );

    if (
      eqArrays(
        newMarkedBoard[0],
        quadConverter(tileResponse.quad, newMarkedBoard)
      ) === true
    ) {
      newMarkedBoard[0] = newShiftedQuad;
      const revisedBoardShifted = newMarkedBoard;
      return revisedBoardShifted;
    } else if (
      eqArrays(
        newMarkedBoard[1],
        quadConverter(tileResponse.quad, newMarkedBoard)
      ) === true
    ) {
      newMarkedBoard[1] = newShiftedQuad;
      const revisedBoardShifted = newMarkedBoard;
      return revisedBoardShifted;
    } else if (
      eqArrays(
        newMarkedBoard[2],
        quadConverter(tileResponse.quad, newMarkedBoard)
      ) === true
    ) {
      newMarkedBoard[2] = newShiftedQuad;
      const revisedBoardShifted = newMarkedBoard;
      return revisedBoardShifted;
    } else if (
      eqArrays(
        newMarkedBoard[3],
        quadConverter(tileResponse.quad, newMarkedBoard)
      ) === true
    ) {
      newMarkedBoard[3] = newShiftedQuad;
      const revisedBoardShifted = newMarkedBoard;
      return revisedBoardShifted;
    } else {
      return false;
    }
  };

  // displayBoard(newShiftedBoard(newMarkedBoard));
  const nextSym = currentSym === symbol.x ? symbol.o : symbol.x;
  playGame(newShiftedBoard(newMarkedBoard), nextSym);
};

// playGame(gameboard, symbol.x);

module.exports = {
  symbol,
  gameboard,
  displayRow,
  displayBoard,
  fullBoard,
  mergeBoard,
  checkWinner,
  markPosition,
  quadIndex,
  quadConverter,
  shiftQuad,
};

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
const symbol = {
  x: "X",
  o: "O",
  empty: " ",
};
const prompts = require("prompts");
const rotate = require("2d-array-rotation").rotate;
const rotate90 = require("2d-array-rotation").rotate90;

//BOARDS
//FULL BOARD & "x" Winning in ROw 1

const testingquad1 = [
  [symbol.x, symbol.x, symbol.x],
  [symbol.o, symbol.o, symbol.o],
  [symbol.o, symbol.o, symbol.o],
];

const testingquad2 = [
  [symbol.x, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.x, symbol.x],
];

const testingquad3 = [
  [symbol.x, symbol.x, symbol.x],
  [symbol.x, symbol.x, symbol.o],
  [symbol.o, symbol.x, symbol.o],
];
const testingquad4 = [
  [symbol.o, symbol.x, symbol.x],
  [symbol.o, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.x],
];

const fullBoardTesting = [
  testingquad1,
  testingquad2,
  testingquad3,
  testingquad4,
];

//ALMOST FULL BOARD & "o" Winning in column 1

const testingquad5 = [
  [symbol.o, symbol.x, symbol.x],
  [symbol.o, symbol.o, symbol.o],
  [symbol.o, symbol.o, symbol.o],
];

const testingquad6 = [
  [symbol.x, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.x, symbol.x],
];

const testingquad7 = [
  [symbol.o, symbol.empty, symbol.x],
  [symbol.o, symbol.x, symbol.o],
  [symbol.x, symbol.x, symbol.o],
];
const testingquad8 = [
  [symbol.o, symbol.empty, symbol.x],
  [symbol.o, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.x],
];
const notFullBoard = [testingquad5, testingquad6, testingquad7, testingquad8];
const quad9 = [
  [symbol.x, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const quad10 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.x],
];

const quad11 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.o, symbol.empty, symbol.empty],
];
const quad12 = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.o, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const sampleBoard = [quad9, quad10, quad11, quad12];

fullboard = (board, marker) =>
  board.every((quad) =>
    quad.every((row) => row.every((marker) => marker !== symbol.empty))
  );

// console.log(fullboard(fullBoardTesting, symbol.x));
// console.log(fullboard(notFullBoard, symbol.o));

const mergeBoard = (board) => flatten(board);

// console.log(mergeBoard(fullBoardTesting));
// console.log(mergeBoard(notFullBoard));

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
    console.log(`true vertical ${marker}`);
    return true;
  } else if (horizontalWin.some((row) => row.join("") === marker.repeat(5))) {
    console.log(`true horizontal ${marker}`);
    return true;
  } else if (diagonalWin.some((diag) => diag.join("") === marker.repeat(5))) {
    console.log(`true diagonal ${marker}`);
    return true;
  } else {
    // console.log("false");
    return false;
  }
};

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

// TESTING CHECK WINNER AND DISPLAYS RESULTS
// checkWinner(mergeBoard(fullBoardTesting), symbol.x);
// displayBoard(fullBoardTesting);
// checkWinner(mergeBoard(notFullBoard), symbol.o);
// displayBoard(notFullBoard);

//revised markPosition
const markPosition = (row, column, marker, quad, board) => {
  const quadSelected = quadConverter(quad, board);
  if (quadSelected[row - 1][column - 1] === symbol.empty) {
    quadSelected[row - 1][column - 1] = marker;
    const revisedQuad = quadSelected;
    return revisedQuad;
  } else {
    return playGame(board, marker);
  }
};

//REVISED CONVERTER
const quadConverter = (quadObject, board) => {
  if (quadObject === "quad9") {
    return board[0];
  } else if (quadObject === "quad10") {
    return board[1];
  } else if (quadObject === "quad11") {
    return board[2];
  } else if (quadObject === "quad12") {
    return board[3];
  } else {
    return false;
  }
};

const marker = [
  {
    type: "text",
    name: "quad",
    message:
      "Which Quad did you want to place your marker(quad9,quad10,quad11,quad12)?",
    validate: (quad) =>
      quad === "quad9" ||
      quad === "quad10" ||
      quad === "quad11" ||
      quad === "quad12"
        ? true
        : `Please type either quad9 or quad 10 or quad11 or quad12`,
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
        : `Please select row 1 or 2 or 3. It is based on the 3 x 3 quad you selected`,
  },
];

const playGame = async (board, currentSym) => {
  displayBoard(board);
  if (checkWinner(mergeBoard(board), symbol.x)) {
    console.log(`${symbol.x} wins!`);
    return;
  } else if (checkWinner(mergeBoard(board), symbol.o)) {
    console.log(`${symbol.o} wins!`);
    return;
  } else if (fullboard(board)) {
    console.log("Tie game.");
    return;
  }

  const response = await prompts(marker);
  const newMarkedBoard = (board) => {
    const newQuad = markPosition(
      response.row,
      response.column,
      currentSym,
      response.quad,
      board
    );
    if (eqArrays(board[0], quadConverter(response.quad, board)) === true) {
      board[0] = newQuad;
      const revisedBoard = board;
      return revisedBoard;
    } else if (
      eqArrays(board[1], quadConverter(response.quad, board)) === true
    ) {
      board[1] = newQuad;
      const revisedBoard = board;
      return revisedBoard;
    } else if (
      eqArrays(board[2], quadConverter(response.quad, board)) === true
    ) {
      board[2] = newQuad;
      const revisedBoard = board;
      return revisedBoard;
    } else if (
      eqArrays(board[3], quadConverter(response.quad, board)) === true
    ) {
      board[3] = newQuad;
      const revisedBoard = board;
      return revisedBoard;
    } else {
      return false;
    }
  };
  displayBoard(newMarkedBoard(board));
  shiftTile(newMarkedBoard(board), currentSym);
};

const shiftTile = async (newMarkedBoard, currentSym) => {
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

  displayBoard(newShiftedBoard(newMarkedBoard));
  const nextSym = currentSym === symbol.x ? symbol.o : symbol.x;
  playGame(newShiftedBoard(newMarkedBoard), nextSym);
};

// Prompt Object for Shifting the Quad
const quadShift = [
  {
    type: "text",
    name: "quad",
    message: "Which Quad did you want to shift (quad9,quad10,quad11,quad12)?",
    validate: (quad) =>
      quad === "quad9" ||
      quad === "quad10" ||
      quad === "quad11" ||
      quad === "quad12"
        ? true
        : `Please type either quad9 or quad 10 or quad11 or quad12`,
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

const shiftQuad = (quad, direction, board) => {
  const tileQuadSelected = quadConverter(quad, board);
  if (direction === "R") {
    console.log(`The tile you selected has shifted left <--`);
    return rotate90(tileQuadSelected);
  } else if (direction === "L") {
    console.log(`The tile you selected has shifted right -->`);
    return rotate(tileQuadSelected, -90);
  }
};
//function to shiftTile and then return
playGame(sampleBoard, symbol.x);

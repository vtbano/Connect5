const {
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
} = require("./gameIndex.js");

const { eqArrays, flatten } = require("./batteries.js");

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

const testingquad1R = [
  [symbol.o, symbol.o, symbol.x],
  [symbol.o, symbol.o, symbol.x],
  [symbol.o, symbol.o, symbol.x],
];

const testingquad1L = [
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.o, symbol.o],
];

const board1 = [testingquad1, testingquad2, testingquad3, testingquad4];
const board1Merged = [
  [symbol.x, symbol.x, symbol.x],
  [symbol.o, symbol.o, symbol.o],
  [symbol.o, symbol.o, symbol.o],
  [symbol.x, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.x, symbol.x],
  [symbol.x, symbol.x, symbol.x],
  [symbol.x, symbol.x, symbol.o],
  [symbol.o, symbol.x, symbol.o],
  [symbol.o, symbol.x, symbol.x],
  [symbol.o, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.x],
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
const board2 = [testingquad5, testingquad6, testingquad7, testingquad8];
const board2Merged = [
  [symbol.o, symbol.x, symbol.x],
  [symbol.o, symbol.o, symbol.o],
  [symbol.o, symbol.o, symbol.o],
  [symbol.x, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.x, symbol.x],
  [symbol.o, symbol.empty, symbol.x],
  [symbol.o, symbol.x, symbol.o],
  [symbol.x, symbol.x, symbol.o],
  [symbol.o, symbol.empty, symbol.x],
  [symbol.o, symbol.x, symbol.o],
  [symbol.x, symbol.o, symbol.x],
];

const testingquad5R = [
  [symbol.o, symbol.o, symbol.o],
  [symbol.o, symbol.o, symbol.x],
  [symbol.o, symbol.o, symbol.x],
];

const testingquad5L = [
  [symbol.x, symbol.o, symbol.o],
  [symbol.x, symbol.o, symbol.o],
  [symbol.o, symbol.o, symbol.o],
];
//SAMPLE BOARD WITH A FEW MARKERS
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

const board3 = [quad9, quad10, quad11, quad12];
const board3Merged = [
  [symbol.x, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.x],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.o, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.o, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const gameboard1 = [
  [
    [symbol.x, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
  [
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
  [
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
  [
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
];

const gameQuad1L = [
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.x, symbol.empty, symbol.empty],
];
const gameQuad1R = [
  [symbol.empty, symbol.empty, symbol.x],
  [symbol.empty, symbol.empty, symbol.empty],
  [symbol.empty, symbol.empty, symbol.empty],
];

const gameboard2 = [
  [
    [symbol.x, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
  [
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.o, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
  [
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
  [
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
    [symbol.empty, symbol.empty, symbol.empty],
  ],
];

console.log("-- fullBoard tests--Should all equal true");
console.log(fullBoard(board1, symbol.x) === true);
console.log(fullBoard(board2, symbol.x) === false);
console.log(fullBoard(board3, symbol.x) === false);
console.log(fullBoard(board1, symbol.o) === true);
console.log(fullBoard(board2, symbol.o) === false);
console.log(fullBoard(board3, symbol.o) === false);

console.log("-- mergeBoard tests--Should all equal true");

console.log(eqArrays(mergeBoard(board1), board1Merged));
console.log(eqArrays(mergeBoard(board2), board2Merged));
console.log(eqArrays(mergeBoard(board3), board3Merged));
console.log(eqArrays(mergeBoard(board1), gameboard) === false);

console.log("-- checkWinner tests--Should all equal true");
console.log(checkWinner(board1Merged, symbol.x) === true);
console.log(checkWinner(board2Merged, symbol.x) === false);
console.log(checkWinner(board3Merged, symbol.x) === false);
console.log(checkWinner(board1Merged, symbol.o) === false);
console.log(checkWinner(board2Merged, symbol.o) === true);
console.log(checkWinner(board3Merged, symbol.o) === false);

console.log("-- markPosition tests--Should all equal true");
console.log(
  eqArrays(markPosition(1, 1, symbol.x, gameboard[0], gameboard, 0), gameboard1)
);
console.log(
  eqArrays(markPosition(2, 2, symbol.o, gameboard[1], gameboard, 1), gameboard2)
);
console.log(
  eqArrays(
    markPosition(2, 2, symbol.x, gameboard[1], gameboard, 0),
    gameboard2
  ) === false
);

console.log(
  eqArrays(markPosition(1, 1, symbol.o, board1[0], board1, 0), board1)
); //This is testing the fullboard and so the symbol "o" overwrites "x" which was originally on board1

console.log("-- quadIndex tests--Should all equal true");
console.log(quadIndex("quad1") === 0);
console.log(quadIndex("quad2") === 1);
console.log(quadIndex("quad3") === 2);
console.log(quadIndex("quad4") === 3);
//testing if Index 0 of otherboards will work, but it won't since this function needs to be adjusted to reflect the name of the indexes (quads) within the board
console.log(quadIndex("quad9") !== 0);
console.log(quadIndex("testingquad1") !== 0);
console.log(quadIndex("testingquad5") !== 0);

console.log("-- quadConverter tests--Should all equal true");
console.log(quadConverter("quad1", gameboard) === gameboard[0]);
console.log(quadConverter("quad2", gameboard) === gameboard[0]);
console.log(quadConverter("quad3", board1) === board1[2]); //although this is a different board it continues to work becuase the quadObject aligns with one of the options in the function
console.log(quadConverter("quad4", board2) === board2[3]); //although this is a different board it continues to work becuase the quadObject aligns with one of the options in the function
//testing if Index 0 of otherboards will work, but it won't since this function needs to be adjusted to reflect the name of the indexes (quads) within the board.
console.log(quadConverter("quad9", board3) !== board3[0]);
console.log(quadConverter("testingquad1", board1) !== board3[0]);
console.log(quadConverter("testingquad5", board2) !== board2[0]);

console.log("-- shiftQuad tests--Should all equal true");
console.log(eqArrays(shiftQuad("quad1", "R", board2), testingquad5R));
console.log(eqArrays(shiftQuad("quad1", "L", board2), testingquad5L));
console.log(eqArrays(shiftQuad("quad1", "R", board1), testingquad1R) === false); //board1 has already transformed from its original board, that's why the change to the right of the original quad which is board1[0] does not equal the same. Refer to last test under markPosition.
console.log(eqArrays(shiftQuad("quad1", "L", board1), testingquad1L) === false); //board1 has already transformed from its original board, that's why the change to the left of the original quad which is board1[0] does not equal the same. Refer to last test under markPosition.
console.log(eqArrays(shiftQuad("quad1", "L", board2), testingquad5R) === false);
console.log(eqArrays(shiftQuad("quad1", "R", board2), testingquad5L) === false);
console.log(eqArrays(shiftQuad("quad1", "L", gameboard1), gameQuad1L));
console.log(eqArrays(shiftQuad("quad1", "R", gameboard1), gameQuad1R));
console.log(
  eqArrays(shiftQuad("quad1", "R", gameboard1), gameQuad1L) === false
);

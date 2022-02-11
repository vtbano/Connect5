// const quad1row1 = [".", ".", "."];
// const quad1row2 = [".", ".", "."];
// const quad1row3 = [".", ".", "."];
// const quad1 = [quad1row1, quad1row2, quad1row3];

// const quad2row1 = [".", ".", "."];
// const quad2row2 = [".", ".", "."];
// const quad2row3 = [".", ".", "."];
// const quad2 = [quad2row1, quad2row2, quad2row3];

// const quad3row1 = [".", ".", "."];
// const quad3row2 = [".", ".", "."];
// const quad3row3 = [".", ".", "."];
// const quad3 = [quad3row1, quad3row2, quad3row3];

// const quad4row1 = [".", ".", "."];
// const quad4row2 = [".", ".", "."];
// const quad4row3 = [".", ".", "."];
// const quad4 = [quad4row1, quad4row2, quad4row3];

// // console.log(quad1);

// const displayBoard = (quad1, quad2, quad3, quad4) => {
//   console.log("+---+---+---+");
//   displayRow(quad1, quad2, [0]);
//   displayRow(quad1, quad2, [1]);
//   displayRow(quad1, quad2, [2]);
//   console.log("+---+---+---+");
//   displayRow(quad3, quad4, [0]);
//   displayRow(quad3, quad4, [1]);
//   displayRow(quad3, quad4, [2]);
//   console.log("+---+---+---+");

//   return [quad1, quad2, quad3, quad4];
// };

// const alphabet = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
// ];

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const transfer = (array1, array2) =>
//   array1.map((x) => {
//     if (x === array1[0]) {
//       return (x = array2[0]);
//     } else if (x === array1[1]) {
//       return (x = array2[1]);
//     } else {
//       return (x = array2[2]);
//     }
//   });

// console.log(transfer(alphabet, numbers));

// const quadConverter = (quadObject) => {
//   if (quadObject === "quad9") {
//     return quad9;
//   } else if (quadObject === "quad10") {
//     return quad10;
//   } else if (quadObject === "quad11") {
//     return quad11;
//   } else if (quadObject === "quad12") {
//     return quad12;
//   } else {
//     return false;
//   }
// };

// const markPosition = (row, column, marker, quad) => {
//   const quadSelected = quadConverter(quad);
//   if (quadSelected[row - 1][column - 1] === symbol.empty) {
//     quadSelected[row - 1][column - 1] = marker;
//     const revisedQuad = quadSelected;
//     return revisedQuad;
//   } else {
//     console.log("Opps! This spot is already taken");
//     return quadSelected;
//   }
// };

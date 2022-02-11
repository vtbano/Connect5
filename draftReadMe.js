// # Connect 5 demo

```

```//the current player must select a quad to shift left or right. // For each turn, a single number marker must be placed in a quad. The player must indicate the row (ROW), column (COL) and quad. After the marker has been placed,

//Game Objective: Each player tries to get connect 5 markers in a row horizontally, vertically, or diaganolly.
//If all 36 spaces on the board are occupied without a row of 5 being formed then the game is a tie.
```
QUAD 1|QUAD 2
+---+---+---+
|, , ,|, , ,|
|, , ,|, , ,|
|, , ,|, , ,|
+---+---+---+
|, , ,|, , ,|
|, , ,|, , ,|
|, , ,|, , ,|
+---+---+---+
QUAD 3|QUAD 4
``````
 C C C|C C C
 O O O|O O O
 L L L|L L L
 1 2 3|1 2 3 
+---+---+---+
|, , ,|, , ,| ROW 1
|, , ,|, , ,| ROW 2
|, , ,|, , ,| ROW 3
+---+---+---+
|, , ,|, , ,| ROW 1
|, , ,|, , ,| ROW 2
|, , ,|, , ,| ROW 3
+---+---+---+
 
``````
Shift Quad Example
 
Below is an example with where QUAD 1,QUAD 2 and QUAD 4 have markers in them.
We will choose to shift QUAD 1.

QUAD 1|QUAD 2
+---+---+---+
|x,o,o|, , ,| 
|, , ,|x,o, | 
|, , ,|, , ,| 
+---+---+---+
|, , ,|, , ,| 
|, , ,|, x ,| 
|, , ,|, , ,| 
+---+---+---+
QUAD 3|QUAD 4
 
QUAD 1 shifted to the right -->
+---+---+---+
| , ,x|, , ,| 
|, , o|x,o, | 
|, , o|, , ,| 
+---+---+---+
|, , ,|, , ,| 
|, , ,|, x ,| 
|, , ,|, , ,| 
+---+---+---+

QUAD 1 shifted to the left <--
+---+---+---+
|o, , |, , ,| 
|o , ,|x,o, | 
|x , ,|, , ,| 
+---+---+---+
|, , ,|, , ,| 
|, , ,|, x ,| 
|, , ,|, , ,| 
+---+---+---+
```;

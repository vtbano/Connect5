###### Connect 5

#### Install

To install the game in your terminal, follow the steps below:

```
1.git clone https://github.com/vtbano/Connect5.git
2.cd Connect5
3.npm i
4.node gameIndex.js
```


#### Game Objective


Each player tries to be the first to connect **5 markers** *horizontally, vertically, or diaganolly*.
If all 36 spaces on the board are occupied without 5 markers connected horizontally,vertically, or diaganolly then the game is a *tie*.

For each turn:
 1. A single marker must be placed in a quad. The player must indicate the row (1,2,3), column (1,2,3) and quad(quad1,quad2,quad3,quad4). *Refer to the **Sample Board** in the section below*
 2. After the marker has been placed, the current player must select a quad to shift left or right.*Refer to the **Shift Quad Example** in the section below*

### Sample Board
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
```
### Shift Quad Example
```

 
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
```

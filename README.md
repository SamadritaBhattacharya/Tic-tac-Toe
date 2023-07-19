**TIC-TAC-TOE**

This will create an interactive tic-tac-toe game .
The main motive is to learn react while doing projects. 

It uses the concept of state, component and props .

Here, initially all the squares in the box are taken null where each box has its own state completely indepenndent of each other. 


State of a box changes only when the square/box is clicked showing 'X' or 'O' depending on the turn. 
The state changes on clicking the button where by calling this set function from an onClick handler, that Square is re-rendered whenever its <button> is clicked.

The square state variable declared under the parent component initially creates an array of 9 elements and sets each value to 'null'.  The useState() call around it declares a squares state variable that’s initially set to that array. Each entry in the array corresponds to the value of a square. 

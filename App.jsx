import { useState } from 'react'
 import './App.css'

function Square({value, onSquareClick }){ 
  // sending value as prop for updation
  // making it interactive
  //const [value, setValue ] =  useState(null); // setting null (or empty) to each grid in the begining 

  return (
     <button className='square' onClick={onSquareClick}>{value}</button>
     );
 
}

// calclating the winner 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  // creating the board 
  const [xIsNext , setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){ // taking i as an argument
    if(squares[i] || calculateWinner(squares)){
      return;
    } 
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i]= "X";
    }
    else{
      nextSquares[i]= "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  } // creates a copy of the squares array 
  //re-rendering of the components of the board state as well as the child state 
  
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner : " + winner;    
  }
  else{
    status = "Next Player: "+( xIsNext? "X":"O");
  }

  return ( 
    // passing as arrow functions 
    <> 
      <div className='status'>{status}</div>
      <div className='board-row'> 
        <Square  value = {squares[0]} onSquareClick={() => handleClick(0)} /> 
        <Square  value = {squares[1]} onSquareClick={() => handleClick(1)} />
        <Square  value = {squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square  value = {squares[3]} onSquareClick={() => handleClick(3)} />
        <Square  value = {squares[4]} onSquareClick={() => handleClick(4)} />
        <Square  value = {squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square   value= {squares[6]} onSquareClick={() => handleClick(6)} />
        <Square   value= {squares[7]} onSquareClick={() => handleClick(7)} />
        <Square   value= {squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      
    </>
    
  );
}

export default App

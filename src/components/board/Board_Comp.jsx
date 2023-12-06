import { useState } from "react";
import SquareComp from "../square/Square_Comp";
import "./Board_Comp.css";
import { calculateWinner } from "../../utilities/helpers";

export default function BoardComp() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Current player is: " + (xIsNext ? "X" : "O");
  }

  function handleSquareClick(i) {
    if (winner || squares[i]) {
      return;
    }
    const updatedSquares = squares.slice();
    if (xIsNext) {
      updatedSquares[i] = "X";
    } else {
      updatedSquares[i] = "O";
    }

    setSquares(updatedSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <h2>{status}</h2>
      <div className="square-row">
        <SquareComp
          value={squares[0]}
          onSquareClick={() => handleSquareClick(0)}
        />
        <SquareComp
          value={squares[1]}
          onSquareClick={() => handleSquareClick(1)}
        />
        <SquareComp
          value={squares[2]}
          onSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="square-row">
        <SquareComp
          value={squares[3]}
          onSquareClick={() => handleSquareClick(3)}
        />
        <SquareComp
          value={squares[4]}
          onSquareClick={() => handleSquareClick(4)}
        />
        <SquareComp
          value={squares[5]}
          onSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="square-row">
        <SquareComp
          value={squares[6]}
          onSquareClick={() => handleSquareClick(6)}
        />
        <SquareComp
          value={squares[7]}
          onSquareClick={() => handleSquareClick(7)}
        />
        <SquareComp
          value={squares[8]}
          onSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </>
  );
}

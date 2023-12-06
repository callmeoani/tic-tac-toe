import "./Square_Comp.css";

export default function SquareComp({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square_comp">
      {value}
    </button>
  );
}

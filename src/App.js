import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState("x");
  const [cell1, setCell1] = useState("");
  const [cell2, setCell2] = useState("");
  const [cell3, setCell3] = useState("");
  const [cell4, setCell4] = useState("");
  const [cell5, setCell5] = useState("");
  const [cell6, setCell6] = useState("");
  const [cell7, setCell7] = useState("");
  const [cell8, setCell8] = useState("");
  const [cell9, setCell9] = useState("");
  const [style, setStyle] = useState({ display: "none" });
  const [msg, setMsg] = useState("");

  const winningCombo = [
    [
      [cell2, cell3],
      [cell4, cell7],
      [cell5, cell9],
    ],
    [
      [cell1, cell3],
      [cell5, cell8],
    ],
    [
      [cell1, cell2],
      [cell6, cell9],
      [cell5, cell7],
    ],
    [
      [cell5, cell6],
      [cell1, cell7],
    ],
    [
      [cell4, cell6],
      [cell2, cell8],
      [cell1, cell9],
      [cell3, cell7],
    ],
    [
      [cell3, cell9],
      [cell4, cell5],
    ],
    [
      [cell1, cell4],
      [cell8, cell9],
      [cell5, cell3],
    ],
    [
      [cell7, cell9],
      [cell2, cell5],
    ],
    [
      [cell1, cell5],
      [cell3, cell6],
      [cell7, cell8],
    ],
  ];

  const checkWin = (num) => {
    if (
      winningCombo[num].some((combo) =>
        combo.every((cell) => cell.includes(turn))
      )
    ) {
      setMsg(turn + " wins!");
      setStyle({
        display: "flex",
      });
    }
  };

  const handleClick = () => {
    if (turn === "o") {
      setTurn("x");
    } else {
      setTurn("o");
    }
  };

  return (
    <div>
      <div className={"grid " + turn}>
        <div
          className={"cell " + cell1}
          onClick={() => {
            if (!cell1) {
              setCell1(turn);
              checkWin(0);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell2}
          onClick={() => {
            if (!cell2) {
              setCell2(turn);
              checkWin(1);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell3}
          onClick={() => {
            if (!cell3) {
              setCell3(turn);
              checkWin(2);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell4}
          onClick={() => {
            if (!cell4) {
              setCell4(turn);
              checkWin(3);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell5}
          onClick={() => {
            if (!cell5) {
              setCell5(turn);
              checkWin(4);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell6}
          onClick={() => {
            if (!cell6) {
              setCell6(turn);
              checkWin(5);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell7}
          onClick={() => {
            if (!cell7) {
              setCell7(turn);
              checkWin(6);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell8}
          onClick={() => {
            if (!cell8) {
              setCell8(turn);
              checkWin(7);
              handleClick();
            }
          }}
        ></div>
        <div
          className={"cell " + cell9}
          onClick={() => {
            if (!cell9) {
              setCell9(turn);
              checkWin(8);
              handleClick();
            }
          }}
        ></div>
      </div>
      <div className="winning-msg" style={style}>
        <div> {msg} </div>
        <button className="restart">Restart</button>
      </div>
    </div>
  );
}

export default App;

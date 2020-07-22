import React, { useState, useEffect } from "react";

function Pvp() {
  const [turn, setTurn] = useState("x");
  const [grid, setGrid] = useState({
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
    cell9: "",
  });
  const [style, setStyle] = useState({ display: "none" });
  const [msg, setMsg] = useState("");

  const winningCombo = [
    [grid.cell1, grid.cell2, grid.cell3],
    [grid.cell4, grid.cell5, grid.cell6],
    [grid.cell7, grid.cell8, grid.cell9],
    [grid.cell1, grid.cell4, grid.cell7],
    [grid.cell2, grid.cell5, grid.cell8],
    [grid.cell3, grid.cell6, grid.cell9],
    [grid.cell1, grid.cell5, grid.cell9],
    [grid.cell3, grid.cell5, grid.cell7],
  ];

  const handleClick = (cell) => {
    if (!grid[cell]) {
      setGrid({ ...grid, [cell]: turn });

      if (turn === "o") {
        setTurn("x");
      } else {
        setTurn("o");
      }
    }
  };

  useEffect(() => {
    let a;
    switch (turn) {
      case "x":
        a = "o";
        break;
      case "o":
        a = "x";
    }
    if (winningCombo.some((combo) => combo.every((cell) => cell.includes(a)))) {
      setMsg(a + " wins!");

      setStyle({
        display: "flex",
      });
    } else if (
      Object.values(grid).every((value) => value === "x" || value === "o")
    ) {
      setMsg("It's a draw!");
      setStyle({
        display: "flex",
      });
    }
  }, [grid]);

  const restart = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <div className={"grid " + turn}>
        <div
          className={"cell " + grid.cell1}
          onClick={() => {
            handleClick("cell1");
          }}
        ></div>
        <div
          className={"cell " + grid.cell2}
          onClick={() => {
            handleClick("cell2");
          }}
        ></div>
        <div
          className={"cell " + grid.cell3}
          onClick={() => {
            handleClick("cell3");
          }}
        ></div>
        <div
          className={"cell " + grid.cell4}
          onClick={() => {
            handleClick("cell4");
          }}
        ></div>
        <div
          className={"cell " + grid.cell5}
          onClick={() => {
            handleClick("cell5");
          }}
        ></div>
        <div
          className={"cell " + grid.cell6}
          onClick={() => {
            handleClick("cell6");
          }}
        ></div>
        <div
          className={"cell " + grid.cell7}
          onClick={() => {
            handleClick("cell7");
          }}
        ></div>
        <div
          className={"cell " + grid.cell8}
          onClick={() => {
            handleClick("cell8");
          }}
        ></div>
        <div
          className={"cell " + grid.cell9}
          onClick={() => {
            handleClick("cell9");
          }}
        ></div>
      </div>
      <div className="winning-msg" style={style}>
        <div> {msg} </div>
        <button className="restart" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default Pvp;

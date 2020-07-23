import React, { useState, useEffect } from "react";

export default function Solo() {
  const [play1st, setPlay1st] = useState(true);
  const [playerMark, setPlayerMark] = useState("x");
  const [appMark, setAppMark] = useState("o");
  const [style, setStyle] = useState({ display: "none" });
  const [msg, setMsg] = useState("");
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

  const winningCombo = [
    ["cell1", "cell2", "cell3"],
    ["cell4", "cell5", "cell6"],
    ["cell7", "cell8", "cell9"],
    ["cell1", "cell4", "cell7"],
    ["cell2", "cell5", "cell8"],
    ["cell3", "cell6", "cell9"],
    ["cell1", "cell5", "cell9"],
    ["cell3", "cell5", "cell7"],
  ];

  useEffect(() => {
    if (play1st) {
      setPlayerMark("x");
      setAppMark("o");
    } else {
      setPlayerMark("o");
      setAppMark("x");
    }
  }, [play1st]);

  const handleClick = (cell) => {
    if (!grid[cell]) {
      setGrid({ ...grid, [cell]: playerMark });
    }
  };

  let nextCell;
  let nextCell2;
  let potentialWin;
  let totalPlayerMarks = 0;
  let totalAppMarks = 0;
  let steps;
  let appTurn;

  useEffect(() => {
    totalAppMarks = Object.values(grid).filter((mark) => mark === appMark)
      .length;
    totalPlayerMarks = Object.values(grid).filter((mark) => mark === playerMark)
      .length;
    switch (play1st) {
      case true:
        appTurn = totalPlayerMarks > totalAppMarks;
        break;
      case false:
        appTurn = totalPlayerMarks === totalAppMarks;
    }
    let winner = winningCombo.find((combo) =>
      ["xxx", "ooo"].includes(grid[combo[0]] + grid[combo[1]] + grid[combo[2]])
    );
    if (winner) {
      switch (grid[winner[0]]) {
        case playerMark:
          setMsg("you win!");

          setStyle({
            display: "flex",
          });
          break;
        case appMark:
          setMsg("you lose!");

          setStyle({
            display: "flex",
          });
      }
    } else if (
      Object.values(grid).every((value) => value === "x" || value === "o")
    ) {
      setMsg("It's a draw!");
      setStyle({
        display: "flex",
      });
    } else if (appTurn) {
      potentialWin = winningCombo.find((combo) =>
        [appMark + appMark, playerMark + playerMark].includes(
          grid[combo[0]] + grid[combo[1]] + grid[combo[2]]
        )
      );
      if (potentialWin) {
        nextCell = potentialWin.find((c) => !grid[c]);
      }
      steps = [
        "cell1",
        "cell3",
        "cell9",
        "cell7",
        "cell5",
        "cell2",
        "cell6",
        "cell8",
        "cell4",
      ];
      if (totalAppMarks === 0 && totalPlayerMarks === 1) {
        steps.unshift("cell5");
      }
      nextCell2 = steps.find((c) => !grid[c]);

      if (nextCell) {
        setGrid({ ...grid, [nextCell]: appMark });
      } else if (nextCell2) {
        setGrid({ ...grid, [nextCell2]: appMark });
      }
    }
  }, [grid, appMark]);

  const restart = () => {
    window.location.reload(false);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <input
            type="radio"
            name="play-turn"
            checked={play1st}
            onChange={(e) => {
              setPlay1st(e.target.checked);
            }}
          />
          <label>1st to play</label>
        </div>
        <div>
          <input
            type="radio"
            name="play-turn"
            checked={!play1st}
            onChange={(e) => {
              setPlay1st(!e.target.checked);
            }}
          />
          <label>2nd to play</label>
        </div>
      </div>
      <div className={play1st ? "grid x" : "grid o"}>
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

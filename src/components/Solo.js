import React, { useState, useEffect } from "react";

export default function Solo() {
  const [play1st, setPlay1st] = useState(true);
  const [playerMark, setPlayerMark] = useState("x");
  const [AppMark, setAppMark] = useState("o");
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


  useEffect(() => {
    if (play1st) {
      setPlayerMark("x");
      setAppMark("o");
    } else {
      setPlayerMark("o");
      setAppMark("x");
    }
  }, []);

  const handleClick = () => {
    //   if(!cell){
    //     setGrid({...grid})

    //   }
    
    
  };
//   useEffect(() => {
//     console.log(obj);
//   }, [obj]);

  const [style, setStyle] = useState({ display: "none" });
  const [msg, setMsg] = useState("");

  const restart = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <div onClick={handleClick}>click here</div>
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
      {/* <div className={play1st ? "grid x" : "grid o"}>
        <div
          className={"cell " + grid.cell1}
          onClick={() => {
            handleClick(grid.cell1);
          }}
        ></div>
        <div
          className={"cell " + grid.cell2}
          onClick={() => {
            if (!grid.cell2) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell3}
          onClick={() => {
            if (!grid.cell3) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell4}
          onClick={() => {
            if (!grid.cell4) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell5}
          onClick={() => {
            if (!grid.cell5) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell6}
          onClick={() => {
            if (!grid.cell6) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell7}
          onClick={() => {
            if (!grid.cell7) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell8}
          onClick={() => {
            if (!grid.cell8) {
            }
          }}
        ></div>
        <div
          className={"cell " + grid.cell9}
          onClick={() => {
            if (!grid.cell9) {
            }
          }}
        ></div>
      </div> */}
      <div className="winning-msg" style={style}>
        <div> {msg} </div>
        <button className="restart" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
}

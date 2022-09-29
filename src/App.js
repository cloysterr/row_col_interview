import { useState } from "react";
import "./styles.css";

export default function App() {
  const getBox = (row) => {
    let b = [];
    for (var i = 1; i <= row; i++) {
      b.push(<br />);
      for (var j = 1; j <= col; j++) {
        b.push(
          <div
            style={{
              display: "inline-block",
              height: 20,
              width: 20,
              border: "solid 1px"
            }}
          ></div>
        );
      }
    }
    return b;
  };
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  return (
    <div className="App">
      <h1>Enter rows and columns</h1>
      <input
        placeholder="rows"
        type="text"
        value={row}
        onChange={(e) => setRow(+e.target.value)}
      ></input>
      <input
        placeholder="columns"
        type="text"
        value={col}
        onChange={(e) => setCol(+e.target.value)}
      ></input>
      {getBox(row)}
    </div>
  );
}

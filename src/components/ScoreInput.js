import React from "react";
import "./ScoreInput.css";

export const ScoreInput = ({ submitScore, score }) => {
  return (
    <div id="input_container">
      <div>
        <label>
          Them
          <br />
          <input
            value={score.them}
            placeholder={0}
            type="number"
            onChange={(e) => score.setThem(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Us
          <br />
          <input
            value={score.us}
            placeholder={0}
            type="number"
            onChange={(e) => score.setUs(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <button onClick={submitScore}>Add Round</button>
      </div>
    </div>
  );
};

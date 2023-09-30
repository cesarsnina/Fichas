import React from "react";

export const ScoreInput = ({ submitScore, score }) => {
  return (
    <div className="input_wrapper">
      <label>
        Them
        <input
          value={score.them}
          type="number"
          onChange={(e) => score.setThem(e.target.value)}
        />
      </label>

      <label>
        Us
        <input
          value={score.us}
          type="number"
          onChange={(e) => score.setUs(e.target.value)}
        />
      </label>

      <button onClick={submitScore}>Add Round</button>
    </div>
  );
};

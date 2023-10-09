import React from "react";

export const ScoreInput = ({ submitScore, score }) => {
  return (
    <div className="input_wrapper">
      <label>
        Them
        <input
          value={score.them}
          placeholder={0}
          type="number"
          onChange={(e) => score.setThem(Number(e.target.value))}
        />
      </label>

      <label>
        Us
        <input
          value={score.us}
          placeholder={0}
          type="number"
          onChange={(e) => score.setUs(Number(e.target.value))}
        />
      </label>

      <button onClick={submitScore}>Add Round</button>
    </div>
  );
};

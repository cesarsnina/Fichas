import React, { useState } from "react";

export const ScoreInput = () => {
  return (
    <div className="input_wrapper">
      <label>
        Them
        <input name="them" type="number" />
      </label>

      <label>
        Us
        <input name="Us" type="number" />
      </label>

      <button>Add Round</button>
    </div>
  );
};

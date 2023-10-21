import React from "react";
import "./ScoreList.css";

export const ScoreList = ({ roundScore, round, deleteRound }) => {
  return (
    <>
      <p>R{round + 1}</p>
      <p>{roundScore[0] || 0}</p>
      <p>{roundScore[1] || 0}</p>
      <p onClick={(e) => deleteRound(round)}>Delete</p>
    </>
  );
};

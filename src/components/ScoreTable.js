import React from "react";
import { ScoreList } from "./";
import "./ScoreTable.css";

export const ScoreTable = ({ roundScores }) => {
  return (
    <div className="total_container">
      <p>Total</p>
      <p>{roundScores.themTotal}</p>
      <p>{roundScores.usTotal}</p>
      <p></p>

      {roundScores.scores.map((score, index) => {
        return (
          <ScoreList
            key={index}
            roundScore={score}
            round={index}
            deleteRound={roundScores.deleteRound}
          />
        );
      })}
    </div>
  );
};

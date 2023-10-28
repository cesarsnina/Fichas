import React from "react";
import { ScoreList } from "./";
import "./ScoreTable.css";

export const ScoreTable = ({ roundScores }) => {
  return (
    <div id="total_container">
      <p className="total-header">Total</p>
      <p className="total-header">{roundScores.themTotal}</p>
      <p className="total-header">{roundScores.usTotal}</p>
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

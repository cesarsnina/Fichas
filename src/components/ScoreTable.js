import React from "react";
import { ScoreList } from "./";

export const ScoreTable = ({ roundScores }) => {
  return (
    <div className="total_wrapper">
      <table>
        <thead>
          <tr>
            <th>Total</th>
            <td>{roundScores.themTotal}</td>
            <td>{roundScores.usTotal}</td>
          </tr>
        </thead>

        <tbody>
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
        </tbody>

        <tfoot></tfoot>
      </table>
    </div>
  );
};

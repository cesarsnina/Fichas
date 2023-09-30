import React, { useState } from "react";
import { ScoreList } from "./ScoreList";

export const ScoreTable = ({ roundScores }) => {
  return (
    <div className="total_wrapper">
      <table>
        <thead>
          <tr>
            <th>Total</th>
            <td>{themTotal}</td>
            <td>{usTotal}</td>
          </tr>
        </thead>

        <tbody>
          {roundScores.map((score, index) => {
            <ScoreList roundScore={score} round={index} />;
          })}
        </tbody>

        <tfoot></tfoot>
      </table>
    </div>
  );
};

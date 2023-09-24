import React from "react";

export const ScoreList = ({ Round, score }) => {
  return (
    <tr>
      <th>R{(Round = 1)}</th>
      <td>{score.them}</td>
      <td>{score.us}</td>
    </tr>
  );
};

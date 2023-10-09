import React from "react";

export const ScoreList = ({ roundScore, round }) => {
  return (
    <tr>
      <th>R{round + 1}</th>
      <td>{roundScore[0] || 0}</td>
      <td>{roundScore[1] || 0}</td>
    </tr>
  );
};

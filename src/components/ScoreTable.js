import React, { useState } from "react";
import { ScoreList } from "./ScoreList";

export const ScoreTable = ({ them, us }) => {
  const [usTotal, setUsTotal] = useState(0);
  const [themTotal, setThemTotal] = useState(0);

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
          <ScoreList score={{ them, us }} />
        </tbody>

        <tfoot></tfoot>
      </table>
    </div>
  );
};

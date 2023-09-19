import React from "react";

export const ScoreList = ({ Round, them, us }) => {
  return (
    <div className="list_wrapper">
      <p>{Round}</p>
      <p>{them}</p>
      <p>{us}</p>
      <button>Delete</button>
    </div>
  );
};

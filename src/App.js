import React, { useState } from "react";
import { Header, ScoreInput, ScoreTable } from "./components";
import "./App.css";

const App = () => {
  const [them, setThem] = useState("");
  const [us, setUs] = useState("");
  const [scores, setScores] = useState([]);
  const [themTotal, setThemTotal] = useState(0);
  const [usTotal, setUsTotal] = useState(0);

  const submitScore = () => {
    setScores([...scores, [them, us]]);
    setThemTotal(themTotal + Number(them));
    setUsTotal(usTotal + Number(us));
    setThem("");
    setUs("");
  };

  const deleteRound = (index) => {
    const score = scores.splice(index, 1)[0];
    setThemTotal(themTotal - Number(score[0]));
    setUsTotal(usTotal - Number(score[1]));
    setScores(scores);
  };

  return (
    <div className="app-wrapper">
      <Header />
      {themTotal >= 200 ? (
        "Them is the Winner"
      ) : usTotal >= 200 ? (
        "Us is the Winner"
      ) : (
        <ScoreInput
          submitScore={submitScore}
          score={{ them, us, setThem, setUs }}
        />
      )}
      <ScoreTable roundScores={{ scores, themTotal, usTotal, deleteRound }} />
    </div>
  );
};

export default App;

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

  const deleteRound = (round) => {
    const copyScores = [...scores];
    const roundScore = copyScores.splice(round, 2)[0];
    setThemTotal(themTotal - Number(roundScore[0]));
    setUsTotal(usTotal - Number(roundScore[1]));
    setScores(copyScores);
  };

  const newGame = () => {
    setThem("");
    setUs("");
    setScores([]);
    setThemTotal(0);
    setUsTotal(0);
  };

  return (
    <div id="app-container">
      <Header newGame={newGame} />
      {themTotal >= 200 ? (
        "Them is the Winner!"
      ) : usTotal >= 200 ? (
        "Us is the Winner!"
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

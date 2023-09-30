import React, { useState } from "react";
import { Header, ScoreInput, ScoreTable } from "./components";
import "./App.css";

const App = () => {
  const [them, setThem] = useState(0);
  const [us, setUs] = useState(0);
  const [scores, setScores] = useState([[0, 0]]);

  const submitScore = () => {
    setScores([them, us]);
    setThem(0);
    setUs(0);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <ScoreInput
        submitScore={submitScore}
        score={{ them, us, setThem, setUs }}
      />
      <ScoreTable roundScores={scores} />
    </div>
  );
};

export default App;

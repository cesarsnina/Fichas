import React, { useState } from "react";
import "./App.css";
import { ScoreInput } from "./ScoreInput.js";
import { ScoreList } from "./ScoreList";

const App = () => {
  const [Round, setRound] = useState(1);
  const [us, setUs] = useState(0);
  const [them, setThem] = useState(0);
  const [score, setScore] = useState([]);

  return (
    <>
      <ScoreInput />
      <ScoreList />
    </>
  );
};

export default App;

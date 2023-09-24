import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header.js";
import { ScoreInput } from "./ScoreInput.js";
import { ScoreTotal } from "./ScoreTotal";
import { ScoreList } from "./ScoreList.js";

const App = () => {
  const [Round, setRound] = useState(1);
  const [us, setUs] = useState(0);
  const [them, setThem] = useState(0);
  const [score, setScore] = useState([]);

  return (
    <div className="app-wrapper">
      <Header />
      <ScoreInput />
      <ScoreTotal />
      <ScoreList />
    <div />
  );
};

export default App;

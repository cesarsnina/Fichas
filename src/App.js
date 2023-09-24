import React, { useState } from "react";
import { Header, ScoreInput, ScoreTable } from "./components";
import "./App.css";

const App = () => {
  const [us, setUs] = useState(0);
  const [them, setThem] = useState(0);

  return (
    <div className="app-wrapper">
      <Header />
      <ScoreInput />
      <ScoreTable score={{ them, us }} />
    </div>
  );
};

export default App;

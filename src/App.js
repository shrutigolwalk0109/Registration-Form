import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./component/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;

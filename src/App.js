import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import RegistrationForm from "./registrationForm";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationForm />}></Route>
    </Routes>
  );
}

export default App;

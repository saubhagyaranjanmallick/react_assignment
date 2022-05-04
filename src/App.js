import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photovalidation from "./Photovalidation";
import Passwordchange from "./Passwordchange";
import Dashboard  from "./Dashboard"



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/photovalidation" element={<Photovalidation />}></Route>
        <Route path="/password" element={<Passwordchange />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
};

export default App;

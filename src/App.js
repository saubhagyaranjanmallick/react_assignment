import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photovalidation from "./Photovalidation";
import Passwordchange from "./Passwordchange";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        
        <Route path="/photovalidation" element={<Photovalidation/>}></Route>
        <Route path="/password" element={<Passwordchange/>}></Route>
      </Routes>
    </>
  );
};

export default App;

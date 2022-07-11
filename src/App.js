import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photovalidation from "./Photovalidation";
import Passwordchange from "./Passwordchange";
import Dashboard  from "./Dashboard";
import Examdetails from "./Examdetails";
import SystemCheck from "./SystemCheck";
import Test from "./Test";
import ExamConduction from "./ExamConduction";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/photovalidation" element={<Photovalidation />}></Route>
        <Route path="/password" element={<Passwordchange />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/exam" element={<Examdetails />}></Route>
        <Route path="/check" element={<SystemCheck />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/examconduct" element={<ExamConduction />}></Route>
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "@/App.css";
import Main from "@/pages/Main";
import Login from "@/pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="/beluga/member/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

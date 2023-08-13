import React from "react";
import { Route, Routes } from "react-router-dom";
import "@/App.css";
import MainPage from "@/pages/Main";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/beluga/member/login" element={<LoginPage />} />
        <Route path="/beluga/member/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

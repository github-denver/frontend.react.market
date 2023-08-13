import React from "react";
import { Route, Routes } from "react-router-dom";
import "@/App.css";
import MainPage from "@/pages/main";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/member/login" element={<LoginPage />} />
        <Route path="/member/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

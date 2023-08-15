import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "@/App.css";
import MainPage from "@/pages/main";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import ArticleListPage from "@/pages/article";
import ArticleReadPage from "@/pages/article/read";
import Error404Page from "@/pages/error/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/member/login" element={<LoginPage />} />
        <Route path="/member/register" element={<RegisterPage />} />
        <Route
          path="/article/:category/list/:number"
          element={<ArticleListPage />}
        />
        <Route
          path="/article/:category/read/:number"
          element={<ArticleReadPage />}
        />
        <Route path="*" element={<Error404Page />}></Route>
      </Routes>
    </div>
  );
}

export default App;

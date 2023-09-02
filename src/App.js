import React from "react";
import { Route, Routes } from "react-router-dom";
import "@/App.css";
import MainPage from "@/pages/main";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import ProfilePage from "@/pages/profile";
import ArticleListPage from "@/pages/article";
import ArticleReadPage from "@/pages/article/read";
import ArticleWritePage from "@/pages/article/write";
import Error404Page from "@/pages/error/404";
import OauthPage from "@/pages/oauth";
import FindPasswordPage from "@/pages/findPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/member/login" element={<LoginPage />} />
        <Route path="/member/register" element={<RegisterPage />} />
        <Route path="/member/profile" element={<ProfilePage />} />
        <Route path="/member/findPassword" element={<FindPasswordPage />} />
        <Route path="/oauth/:token" element={<OauthPage />} />
        <Route
          path="/board/:category/list/:number"
          element={<ArticleListPage />}
        />
        <Route
          path="/board/:category/read/:number"
          element={<ArticleReadPage />}
        />
        <Route path="/board/:category/write" element={<ArticleWritePage />} />
        <Route path="*" element={<Error404Page />}></Route>
      </Routes>
    </div>
  );
}

export default App;

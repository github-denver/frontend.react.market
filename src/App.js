import React from "react";
import { Route, Routes } from "react-router-dom";
import "@/App.css";
import Main from "@/pages/main";
import Register from "@/pages/register";
import Login from "@/pages/login";
import FindPassword from "@/pages/findPassword";
import Profile from "@/pages/profile";
import BoardList from "@/pages/article";
import BoardView from "@/pages/article/read";
import BoardWrite from "@/pages/article/write";
import BoardModify from "@/pages/article/modify";
import Oauth from "@/pages/oauth";
import Error from "@/pages/error";

function App() {
  const routes = [
    { path: "/", element: <Main /> },
    { path: "/member/register", element: <Register /> },
    { path: "/member/login", element: <Login /> },
    { path: "/member/findPassword", element: <FindPassword /> },
    { path: "/member/profile", element: <Profile /> },
    { path: "/board/:category/list/:number", element: <BoardList /> },
    { path: "/board/:category/read/:number", element: <BoardView /> },
    { path: "/board/:category/write", element: <BoardWrite /> },
    { path: "/board/:category/modify/:number", element: <BoardModify /> },
    { path: "/oauth/:token", element: <Oauth /> },
    { path: "*", element: <Error /> },
  ];

  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

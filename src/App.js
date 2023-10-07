import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@/App.css';
import Main from '@/pages/main';
import Register from '@/pages/register';
import Login from '@/pages/login';
import PasswordFind from '@/pages/passwordFind';
import PasswordModify from '@/pages/passwordModify';
import Profile from '@/pages/profile';
import Follow from '@/pages/follow';
import BoardList from '@/pages/board/list';
import BoardWrite from '@/pages/board/write';
import BoardView from '@/pages/board/view';
import Error from '@/pages/error';

function App() {
  const routes = [
    { path: '/', element: <Main /> },
    { path: '/member/register', element: <Register /> },
    { path: '/member/login', element: <Login /> },
    { path: '/member/passwordFind', element: <PasswordFind /> },
    { path: '/oauth/:token', element: <PasswordModify /> },
    { path: '/member/profile', element: <Profile /> },
    { path: '/member/follow', element: <Follow /> },
    { path: '/board/:category/list/:number', element: <BoardList /> },
    { path: '/board/:category/write', element: <BoardWrite /> },
    { path: '/board/:category/read/:number', element: <BoardView /> },
    { path: '/board/:category/modify/:number', element: <BoardWrite /> },
    { path: '*', element: <Error /> }
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

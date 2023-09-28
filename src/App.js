import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@/App.css';
import Main from '@/pages/main';
import Register from '@/pages/register';
import Login from '@/pages/login';
import FindPassword from '@/pages/findPassword';
import ModifyPassword from '@/pages/modifyPassword';
import Profile from '@/pages/profile';
import Follow from '@/pages/follow';
import BoardList from '@/pages/board/list';
import BoardWrite from '@/pages/board/write';
import BoardRead from '@/pages/board/read';
import Error from '@/pages/error';

function App() {
  const routes = [
    { path: '/', element: <Main /> },
    { path: '/member/register', element: <Register /> },
    { path: '/member/login', element: <Login /> },
    { path: '/member/findPassword', element: <FindPassword /> },
    { path: '/oauth/:token', element: <ModifyPassword /> },
    { path: '/member/profile', element: <Profile /> },
    { path: '/member/follow', element: <Follow /> },
    { path: '/board/:category/list/:number', element: <BoardList /> },
    { path: '/board/:category/write', element: <BoardWrite /> },
    { path: '/board/:category/read/:number', element: <BoardRead /> },
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

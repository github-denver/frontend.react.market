import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@/App.css';
import Main from '@/pages/main';
import Error from '@/pages/error';

function App() {
  const routes = [
    { path: '/', element: <Main /> },
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

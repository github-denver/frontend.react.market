import React from 'react';
import { createRoot } from 'react-dom/client';
import Cookies from 'js-cookie';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import reportWebVitals from '@/reportWebVitals';
import '@/index.css';
import { setAccessToken, setUser } from '@/modules/user';

const container = document.getElementById('root');
const root = createRoot(container);

(function () {
  try {
    const user = localStorage.getItem('user');
    const accessToken = Cookies.get('accessToken');

    if (typeof accessToken === 'undefined') return;

    store.dispatch(setAccessToken(accessToken));
    store.dispatch(setUser(user));
  } catch (error) {
    console.error(error);
  }
})();

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

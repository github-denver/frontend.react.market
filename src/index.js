import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { temporaryUser1, userCheck } from "./modules/user";

const container = document.getElementById("root");
const root = createRoot(container);

function user() {
  console.group("function user() { .. }");

  try {
    const user = localStorage.getItem("user");
    console.log("user: ", user);

    const accessToken = Cookies.get("accessToken");
    console.log("accessToken: ", accessToken);
    console.groupEnd();

    if (typeof accessToken === "undefined") return;

    store.dispatch(temporaryUser1(user));
    store.dispatch(userCheck(accessToken));
  } catch (error) {
    console.error(error);
  }
}

user();

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

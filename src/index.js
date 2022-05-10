import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/mongo-frontend"}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Layout />}>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<HomePage />} />
          <Route
            path={`${process.env.PUBLIC_URL}/users`}
            element={<UserList />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/users/new`}
            element={<UserForm />}
          />
          <Route
            path="/users/edit/:id"
            element={<UserForm editMode={true} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

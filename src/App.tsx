import React from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Registration />} path="/sign-up" />
        <Route element={<Login />} path="/sign-in" />
      </Routes>
    </>
  );
}

export { App };

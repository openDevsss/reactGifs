import React from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Registration />} path="/sign-up" />
        <Route element={<Login />} path="/sign-in" />
      </Routes>
    </>
  );
}

export { App };

import React from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="page">
        <Routes>
          <Route element={<Registration />} path="/sign-up" />
          <Route element={<Login />} path="/sign-in" />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export { App };

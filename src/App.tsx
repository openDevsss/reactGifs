import React from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import MyProfilePage from "./pages/MyProfilePage";
function App() {
  const location = useLocation();
  const hideComponents =
    location.pathname !== "/sign-in" && location.pathname !== "/sign-up";
  return (
    <>
      <div className="page">
        {hideComponents && <Header />}
        <main>
          <Routes>
            <Route element={<Registration />} path="/sign-up" />
            <Route element={<Login />} path="/sign-in" />
            <Route element={<MyProfilePage />} path="/my-profile" />
          </Routes>
        </main>
        {hideComponents && <Footer />}
      </div>
    </>
  );
}

export { App };

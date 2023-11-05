import React, { useEffect } from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "./redux-toolkit";
import { checkAuth } from "./features/users/users-slice";
import { selectCurrentUser } from "./features/users/users-selectors";
import MyProfilePage from "./pages/MyProfilePage";
export function App() {
  const location = useLocation();
  const hideComponents =
    location.pathname !== "/sign-in" && location.pathname !== "/sign-up";
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);
  console.log(currentUser);
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

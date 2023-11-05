import React, { useEffect } from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "./redux-toolkit";
import { checkAuth } from "./features/users/users-slice";
import { selectCurrentUser } from "./features/users/users-selectors";
function App() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);
  console.log(currentUser);
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

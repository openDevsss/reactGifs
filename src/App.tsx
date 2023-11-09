import React, { useEffect, useState } from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux-toolkit";
import { checkAuth } from "./features/users/users-slice";
import { selectCurrentUser } from "./features/users/users-selectors";
import MyProfilePage from "./pages/MyProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PageLayout } from "./components/PageLayout/PageLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import { Box, CircularProgress } from "@mui/material";

export function App() {
  const [loading, setLoading] = useState(true);
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
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route
              element={
                <ProtectedRoute>
                  <MyProfilePage />
                </ProtectedRoute>
              }
              path="/my-profile"
            />
          </Route>
          <Route element={<Registration />} path="/sign-up" />
          <Route element={<Login />} path="/sign-in" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
        {loading && (
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
            }}
          >
            <CircularProgress color="success" />
          </Box>
        )}
      </div>
    </>
  );
}

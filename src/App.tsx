import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./components/Auth/Login/Login";
import { Registration } from "./components/Auth/Registration/Registration";
import { PageLayout } from "./components/PageLayout/PageLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { SettingsGif } from "./components/SettingsGif/SettingsGif";
import { checkAuth } from "./features/users/users-slice";
import HomePage from "./pages/HomePage";
import MyProfilePage from "./pages/MyProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useAppDispatch } from "./redux-toolkit";

export function App() {
  const dispatch = useAppDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);

  return (
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
          <Route
            element={
              <ProtectedRoute>
                <SettingsGif />
              </ProtectedRoute>
            }
            path="/settings"
          />
        </Route>
        <Route element={<Registration />} path="/sign-up" />
        <Route element={<Login />} path="/sign-in" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </div>
  );
}

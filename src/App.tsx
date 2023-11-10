import { useEffect } from "react";
import { Registration } from "./components/Auth/Registration/Registration";
import { Login } from "./components/Auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./redux-toolkit";
import { checkAuth } from "./features/users/users-slice";
import { MyProfilePage } from "./pages/MyProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PageLayout } from "./components/PageLayout/PageLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { RecommendationsPage } from "./pages/RecommendationsPage";
import { AddGif } from "./components/AddGif/AddGif";

export function App() {
  const dispatch = useAppDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);

  return (
    <>
      <div className="page">
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<RecommendationsPage />} path="/recommendations" />
            <Route
              element={
                <ProtectedRoute>
                  <MyProfilePage />
                </ProtectedRoute>
              }
              path="/my-profile"
            />
            <Route element={<AddGif />} path="gif-add" />
          </Route>
          <Route element={<Registration />} path="/sign-up" />
          <Route element={<Login />} path="/sign-in" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </div>
    </>
  );
}

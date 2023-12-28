import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface ProtectRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectRouteProps) {
  const currentUser = useCurrentUser();

  if (!currentUser?.token) {
    return <Navigate to="/sign-in" />;
  }
  return <>{children}</>;
}

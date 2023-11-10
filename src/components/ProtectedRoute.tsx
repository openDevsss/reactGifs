import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectRouteProps) {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) {
    return <Navigate to="/sign-in" />;
  }
  return { children };
}

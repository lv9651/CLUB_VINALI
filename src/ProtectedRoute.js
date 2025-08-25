import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si no hay usuario logueado, redirige a login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
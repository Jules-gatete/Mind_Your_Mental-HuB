import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    // Check if user is authenticated
    // For now, let's assume they are
    return true;
  };

  if (!isAuthenticated()) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
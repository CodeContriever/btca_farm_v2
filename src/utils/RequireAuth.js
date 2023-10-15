import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

const RequireAuth = ({ children, requiredRoles }) => {
  const location = useLocation()
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }

  if (requiredRoles && requiredRoles.some((role) => auth.hasRole(role))) {
    return children;
  }

  return <Navigate to="/access-denied" />;
}



export default RequireAuth
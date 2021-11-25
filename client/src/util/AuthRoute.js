import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function AuthRoute({ element: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    user ? <Navigate to="/" /> : <Outlet />
  )
}

function PrivateRoute({ element: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    user ? <Outlet /> : <Navigate to="/welcome" />
  )
}

export { AuthRoute, PrivateRoute };
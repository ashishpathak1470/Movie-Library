import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  return localStorage.getItem('token') ? <Component /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

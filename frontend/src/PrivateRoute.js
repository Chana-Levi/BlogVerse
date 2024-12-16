import React from 'react';
import { Navigate } from 'react-router-dom';

// רכיב להגנה על מסלולים
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // בודק אם קיים טוקן ב-localStorage
  return token ? children : <Navigate to="/login" />; // ניתוב לדף ההתחברות אם אין טוקן
};

export default PrivateRoute;

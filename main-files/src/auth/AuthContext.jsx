// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the authentication
const AuthContext = createContext();

// Create a Provider component
export function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = () => {
    setIsAuthenticated(true);
    console.log(isAuthenticated);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

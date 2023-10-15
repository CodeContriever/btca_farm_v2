import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const hasRole = (role) => {
    return user && user.roles && user.roles.includes(role);
  };

  const value = {
    user,
    setUser,
    login,
    logout,
    hasRole, // Include the role check function
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

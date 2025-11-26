import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // true для теста
  const [user, setUser] = useState({ name: "Тестовый пользователь" });

  const login = () => {
    setIsAuthenticated(true);
    setUser({ name: "Тестовый пользователь" });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = () => {
    return { success: true };
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

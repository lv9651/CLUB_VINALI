import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Revisar si hay usuario guardado en localStorage
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (usuario) => {
    setUser(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuario');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
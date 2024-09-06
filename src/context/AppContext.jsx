import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);  // user authentication state
  const login = (user) => {
    setAuth(user);  // set user data
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

 
  return (
    <AppContext.Provider value={{ auth, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

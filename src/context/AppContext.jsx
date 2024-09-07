
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

// Define a static default user
const defaultUser = {
  email: 'boboypakhi@gmail.com',
  password: 'pochagalib',
};

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // On initial render, check if the user is already authenticated
  useEffect(() => {
    const storedUser = localStorage.getItem('auth');
    if (storedUser) {
      setAuth(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    // Check if the user credentials match the static default user
    if (user.email === defaultUser.email && user.password === defaultUser.password) {
      setAuth(user);
      localStorage.setItem('auth', JSON.stringify(user));
      return true;  // Indicate successful login
    } else {
      return false;  // Indicate failed login
    }
  };

  const signup = (user) => {
    // Save new user credentials to localStorage (or ideally a database)
    setAuth(user);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  return (
    <AppContext.Provider value={{ auth, login, signup, logout }}>
      {children}
    </AppContext.Provider>
  );
};

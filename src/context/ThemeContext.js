import React, { createContext, useContext, useCallback, useEffect } from 'react';
import { getItem, useLocalStorageValue } from '../utils/localStorage';
import PropTypes from 'prop-types';
const ThemeContext = createContext('');

export const ThemeContextProvider = ({ children }) => {
  const storedTheme = getItem('theme');
  const { value: theme, setValue: setTheme } = useLocalStorageValue(
    'theme',
    storedTheme || 'light'
  );

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme, setTheme]);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useSharedThemeState = () => {
  return useContext(ThemeContext);
};
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

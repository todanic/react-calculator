import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const TabContext = createContext('');

export const TabContextProvider = ({ children }) => {
  const [income, setIncome] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [calculationType, setCalculationType] = useState('net');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TabContext.Provider
      value={{
        income,
        setIncome,
        frequency,
        setFrequency,
        calculationType,
        setCalculationType,
        darkMode,
        setDarkMode
      }}>
      {children}
    </TabContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(TabContext);
};
TabContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

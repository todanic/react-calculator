import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext('');

// eslint-disable-next-line react/prop-types
export const TabContextProvider = ({ children }) => {
  const [income, setIncome] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [calculationType, setCalculationType] = useState('net');

  return (
    <TabContext.Provider
      value={{ income, setIncome, frequency, setFrequency, calculationType, setCalculationType }}>
      {children}
    </TabContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(TabContext);
};
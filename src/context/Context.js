import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const Context = createContext('');

export const ContextProvider = ({ children }) => {
  const [income, setIncome] = useState(0);
  const [frequency, setFrequency] = useState('monthly');
  const [calculationType, setCalculationType] = useState('net');

  return (
    <Context.Provider
      value={{
        income,
        setIncome,
        frequency,
        setFrequency,
        calculationType,
        setCalculationType
      }}>
      {children}
    </Context.Provider>
  );
};

export const useSharedState = () => {
  return useContext(Context);
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

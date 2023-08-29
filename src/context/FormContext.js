import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const FormContext = createContext('');

export const FormContextProvider = ({ children }) => {
  const [income, setIncome] = useState(0);
  const [frequency, setFrequency] = useState('monthly');
  const [calculationType, setCalculationType] = useState('net');

  return (
    <FormContext.Provider
      value={{
        income,
        setIncome,
        frequency,
        setFrequency,
        calculationType,
        setCalculationType
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormSharedState = () => {
  return useContext(FormContext);
};
FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

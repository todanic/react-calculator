import React from 'react';
import Navigation from './components/Navigation';
import { FormContextProvider } from './context/FormContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <FormContextProvider>
        <Navigation />
      </FormContextProvider>
    </HelmetProvider>
  );
}

export default App;

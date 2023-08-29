import React from 'react';
import Navigation from './components/Navigation';
import { FormContextProvider } from './context/FormContext';

function App() {
  return (
    <FormContextProvider>
      <Navigation />
    </FormContextProvider>
  );
}

export default App;

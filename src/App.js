import React from 'react';
import Navigation from './components/Navigation';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Navigation />
    </ThemeContextProvider>
  );
}

export default App;

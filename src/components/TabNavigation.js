import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import DataEntry from '../pages/DataEntry';
import Results from '../pages/Results';
import { TabContextProvider } from '../context/TabContext';

export default function TabNavigation() {
  return (
    <TabContextProvider>
      <BrowserRouter>
        <div className="links">
          <Link to="/">Income</Link>
          <Link to="/results">Results</Link>
        </div>
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </TabContextProvider>
  );
}

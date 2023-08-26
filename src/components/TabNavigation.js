import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import DataEntry from '../pages/DataEntry';
import Results from '../pages/Results';
import { TabContextProvider } from '../context/Context';

export default function TabNavigation() {
  return (
    <TabContextProvider>
      <Routes>
        <Route path="/" element={<DataEntry />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </TabContextProvider>
  );
}

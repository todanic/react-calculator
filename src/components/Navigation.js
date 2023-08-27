import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataEntry from '../pages/DataEntry';
import Results from '../pages/Results';
import { TabContextProvider } from '../context/Context';

export default function Navigation() {
  return (
    <TabContextProvider>
      <Switch>
        <Route exact path="/">
          <DataEntry />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </TabContextProvider>
  );
}

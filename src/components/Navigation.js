import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataEntry from '../pages/DataEntry';
import Results from '../pages/Results';
import { ContextProvider } from '../context/Context';

export default function Navigation() {
  return (
    <ContextProvider>
      <Switch>
        <Route exact path="/">
          <DataEntry />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

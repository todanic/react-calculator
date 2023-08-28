import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContextProvider } from '../context/Context';
import routes from '../routes/routes';

export default function Navigation() {
  return (
    <ContextProvider>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.component} />
        ))}
      </Switch>
    </ContextProvider>
  );
}

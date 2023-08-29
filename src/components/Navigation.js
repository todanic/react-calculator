import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormContextProvider } from '../context/FormContext';
import routes from '../routes/routes';

export default function Navigation() {
  return (
    <FormContextProvider>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.component} />
        ))}
      </Switch>
    </FormContextProvider>
  );
}

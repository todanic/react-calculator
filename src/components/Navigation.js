import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormContextProvider } from '../context/FormContext';
import { Helmet } from 'react-helmet-async';
import routes from '../routes/routes';

export default function Navigation() {
  return (
    <FormContextProvider>
      <Switch>
        {routes.map((route, index) => {
          const Component = route.component;
          const { path, exact, pageTitle } = route;
          const canonicalUrl = `${window.location.origin}${path}`;
          return (
            <Route key={index} path={path} exact={exact}>
              <Helmet>
                <title>{pageTitle}</title>
                <link rel="canonical" href={canonicalUrl} />
              </Helmet>
              <Component />
            </Route>
          );
        })}
      </Switch>
    </FormContextProvider>
  );
}

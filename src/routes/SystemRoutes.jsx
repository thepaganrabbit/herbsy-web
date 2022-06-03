import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabinet from '../pages/Cabinet/Cabinet';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

/**
 * All routes of main for the applicaiton in one location.
 */

const routes = [
  {
    path: '/login',
    component: Login,
    props: null,
  },
  {
    path: '/',
    component: Home,
    props: null,
  },
  {
    path: '/cabinet',
    component: Cabinet,
    props: null,
  },
];

const SystemRoutes = () => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            exact
            element={
              <route.component
                {...(route.props !== null ? route.props : null)}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
};
export default SystemRoutes;

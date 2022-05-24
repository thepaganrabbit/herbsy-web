import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

/**
 * All routes of main for the applicaiton in one location.
 */

const routes = [
  {
    path: '/',
    component: Home,
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
            element={
              <route.component
                {...(route.props !== null ? route.props : null)}
              />
            }
          ></Route>
        ))}
      </Routes>
    </div>
  );
};
export default SystemRoutes;

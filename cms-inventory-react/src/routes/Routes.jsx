import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// config
import { PATH_NAME } from 'configs';

// guards
import AuthGuard from './AuthGuard';
import GuestGuard from './GuestGuard';

// layout
import MainLayout from 'layouts/MainLayout';

// pages
const Dashboard = lazy(() => import('pages/Dashboard'));
const Login = lazy(() => import('pages/Login'));

const routesConfig = [
  {
    path: PATH_NAME.ROOT,
    element: () => <Navigate to={PATH_NAME.DASHBOARD} />
  },
  {
    path: PATH_NAME.LOGIN,
    guard: GuestGuard,
    element: Login
  },
  {
    path: PATH_NAME.DASHBOARD,
    guard: AuthGuard,
    element: Dashboard,
    layout: MainLayout
  }
]

const renderRoutes = (routes) => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          {routes.map((route, routeIdx) => {
            const Guard = route.guard || React.Fragment;
            const Layout = route.layout || React.Fragment;
            const Component = route.element;

            return (
              <Route 
                key={`routes-${routeIdx}`}
                path={route.path}
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                }
              />
            )
          })}
        </Routes>
      </Suspense>
    </Router>
  )
}

function RoutesMain() {
  return renderRoutes(routesConfig)
}

export default RoutesMain;


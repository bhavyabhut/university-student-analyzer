import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Spinner from "./Components/Spinner";

const routes = [
  {
    path: "/allColleges",
    exact: true,
    Component: lazy(() => import("./Components/College")),
  },
  {
    path: "/addCollege",
    exact: true,
    Component: lazy(() => import("./Components/ComingSoon")),
  },
  {
    path: "/allStudents",
    exact: true,
    Component: lazy(() => import("./Components/Student")),
  },
  {
    path: "/addStudent",
    exact: true,
    Component: lazy(() => import("./Components/ComingSoon")),
  },
  {
    path: "/charts/state",
    exact: true,
    Component: lazy(() => import("./Components/Charts/State")),
  },
  {
    path: "/charts/course",
    exact: true,
    Component: lazy(() => import("./Components/Charts/Course")),
  },
];

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch render={({ children }) => ({ children })}>
              {routes.map(({ path, Component, exact }) => (
                <Route path={path} key={path} exact={exact}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default Routers;

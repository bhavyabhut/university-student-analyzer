import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Spinner from "./Components/Spinner";

const routes = [
  {
    path: "/allColleges",
    exact: true,
    Component: lazy(() => import("./Components/Home")),
  },
  {
    path: "/test",
    exact: true,
    Component: lazy(() => import("./Components/Test")),
  },
];

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch
              render={(props) => {
                const { children } = props;
                return { children };
              }}
            >
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

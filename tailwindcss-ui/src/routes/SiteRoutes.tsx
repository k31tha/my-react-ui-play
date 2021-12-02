import * as React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import About from "../components/pages/About";
import { Club } from "../components/pages/Club";
import Clubs from "../components/pages/Clubs";
import Home from "../components/pages/Home";
//<ClubDetailsContainer clubUrl={routerProps.match.params.url} />
export default function SiteRoutes() {
  return (
    <>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route
          exact={true}
          path="/club/:url"
          render={(routerProps) => (
            <Club clubUrl={routerProps!.match!.params.url} />
          )}
        />
        <Route exact={true} path="/clubs">
          <Clubs />
        </Route>
        <Route exact={true} path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

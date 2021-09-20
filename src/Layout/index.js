import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
        <Route path="/">
        <Home/>
        </Route>
        <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;

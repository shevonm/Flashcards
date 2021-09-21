import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDeck from './Decks/CreateDeck';
import EditDeck from "./Decks/EditDeck";
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path= "/decks/new">
          <CreateDeck/>
        </Route>
        <Router path= "">
          <EditDeck/>
        </Router>
        <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;

import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Movies from "./components/vidly";
import MovieForm from "./components/admin/movieForm";
import Customers from "./components/admin/customers";
import Rentals from "./components/admin/rentals";
import NotFound from "./components/admin/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/common/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

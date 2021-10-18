import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/


import HomeChat from "./Pages/Home-chat";
import NotFound from "./Pages/404";
import About from "./Pages/About";
import Process from "./Pages/Process";
import ScrollToTopRoute from "./ScrollToTopRoute";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={HomeChat} />
          <ScrollToTopRoute path="/About" component={About} />
          <ScrollToTopRoute path="/Process" component={Process} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/


import HomeChat from "./Pages/Home-chat";
import NotFound from "./Pages/404";
import About from "./Pages/About";
import ProcessWell from "./Pages/Process_Well";
import ProcessEngage from "./Pages/Process_Engage";
import ProcessInsights from "./Pages/Process_Insights";
import ScrollToTopRoute from "./ScrollToTopRoute";
import WhyUs from "./Pages/Why_Us";
import Team from "./Pages/Team";


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
          <ScrollToTopRoute path="/Team" component={Team} />
          <ScrollToTopRoute path="/Why_Us" component={WhyUs} />
          <ScrollToTopRoute path="/Process_Well" component={ProcessWell} />
          <ScrollToTopRoute path="/Process_Engage" component={ProcessEngage} />
          <ScrollToTopRoute path="/Process_Insights" component={ProcessInsights} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Aside from "./layouts/Aside";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>

          <Aside />
        </div>
      </Router>
    );
  }
}

export default App;

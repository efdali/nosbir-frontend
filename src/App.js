import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>

        <Navbar/>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Aside from "./layouts/Aside";
import Footer from "./layouts/Footer";
import RegisterModal from "./layouts/RegisterModal";
import LoginModal from "./layouts/LoginModal";
import PostDetail from "./pages/PostDetail";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container container2">
          <div className="left-container mt fd-column bg-white">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/baslik/:link" component={PostDetail} />
            </Switch>
          </div>
          <Aside />
        </div>
        <Footer />

        <RegisterModal />
        <LoginModal />
      </Router>
    );
  }
}

export default App;

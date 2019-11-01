import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Aside from "./layouts/Aside";
import Footer from "./layouts/Footer";
import RegisterModal from "./layouts/RegisterModal";
import LoginModal from "./layouts/LoginModal";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import NewPost from "./pages/NewPost";
import Search from "./pages/Search";
import requireAuth from "./utils/requireAuth";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container container2">
          <div className="left-container mt fd-column bg-white">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/grup/:groupName" component={Home} />
              <Route path="/baslik/:title" component={PostDetail} />
              <Route path="/profil/:username" component={Profile} />
              <Route
                path="/profil-duzenle"
                component={requireAuth(EditProfile)}
              />
              <Route path="/yeni-nos" component={requireAuth(NewPost)} />
              <Route path="/arama" component={Search} />
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

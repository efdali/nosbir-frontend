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
import Search from './pages/Search';
import Logout from './pages/Logout';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {
  
  render() {
    return (
      <Router>
        <ToastContainer autoClose={5000}/>
        <Header />
        <div className="container container2">
          <div className="left-container mt fd-column bg-white">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/baslik/:link" component={PostDetail} />
              <Route path="/profil/:username" component={Profile}/>
              <Route path="/profil-duzenle" component={EditProfile}/>
              <Route path="/yeni-nos" component={NewPost}/>
              <Route path="/arama/:query" component={Search}/>
              <Route path="/cikis" component={Logout}/>
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

import React from "react";
import PostList from "../layouts/PostList";
import { Link,Switch,Route } from "react-router-dom";
import CommentList from "../layouts/CommentList";
import Notifications from './Notifications';
export default function Profile() {
  return (
    <React.Fragment>
      <div className="profile-top-panel">
        <div className="profile-top-panel-left">
          <img
            src="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-84x84.jpg"
            alt="username"
            width="50"
            height="50"
            className="img-rounded f_left"
          />
          <h3>Martin Hope</h3>
        </div>
        <ul className="profile-top-panel-right">
          <li>
            <button className="default-btn">
              <i className="fas fa-fire"></i> 3 Nos
            </button>
          </li>
          <li>
            <Link to="/" className="default-btn profile-default-btn">
              Mesaj
            </Link>
          </li>
          <li>
            <Link
              to="/profil-duzenle"
              className="default-btn profile-default-btn profile-edit-btn"
            >
              <i className="fas fa-user-edit"></i> Profili Düzenle
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/profil/:username">
          <PostList isShowTopPanel={false}/>
        </Route>
        <Route path="/profil/:username/yorumlar" component={CommentList}/>
        <Route path="/profil/:username/begeniler" component={CommentList}/>
        <Route path="/profil/:username/bildirimler" component={Notifications}/>

      </Switch>
    </React.Fragment>
  );
}

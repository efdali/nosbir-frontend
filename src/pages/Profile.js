import React from "react";
import PostList from "../layouts/PostList";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import CommentList from "../layouts/CommentList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import {
  fetchUserPosts,
  fetchUserAnswers
} from "../store/actions/profileAction";
import Image from "../components/Image";
class Profile extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const { username } = this.props.match.params;
    const {
      location: { pathname }
    } = this.props;
    if (pathname.includes("/cevaplar")) {
      if (this.props.comments.length <= 0 || username !== this.props.post.nick)
        this.props.fetchUserAnswers(username);
    } else if (pathname.includes("/bildirimler")) {
      console.log("bildirimler");
    } else {
      if (this.props.post.length <= 0 || username !== this.props.post.nick)
        this.props.fetchUserPosts(username);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname }
    } = this.props;
    const { location } = prevProps;
    if (location.pathname !== pathname) {
      this.fetchData();
    }
  }

  numberButton = () => {
    const {
      location: { pathname }
    } = this.props;
    if (pathname.includes("/cevaplar")) {
      const { totalComment } = this.props;
      return (
        <button className="default-btn">
          <i className="fas fa-comments"></i> {totalComment} Cevap
        </button>
      );
    } else if (pathname.includes("/bildirimler")) {
      console.log("bildirimler");
    } else {
      const { total } = this.props;
      return (
        <button className="default-btn">
          <i className="fas fa-fire"></i> {total} Nos
        </button>
      );
    }
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user, post, loggedUserId, comments } = this.props;
    const { username } = this.props.match.params;
    const isAuthenticated = user.user_id === loggedUserId;
    return (
      <React.Fragment>
        <div className="profile-top-panel">
          <div className="profile-top-panel-left">
            <Image
              src={user.picture}
              alt={username}
              width="50"
              height="50"
              className="img-rounded f_left"
            />
            <h3>{username}</h3>
          </div>
          <ul className="profile-top-panel-right">
            <li>{this.numberButton()}</li>
            {!isAuthenticated && (
              <li>
                <Link
                  to="/"
                  className="default-btn profile-default-btn"
                  onClick={e => e.preventDefault()}
                >
                  Mesaj
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link
                  to="/profil-duzenle"
                  className="default-btn profile-default-btn profile-edit-btn"
                >
                  <i className="fas fa-user-edit"></i> Profili Düzenle
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="profile-route">
          <ul>
            <li>
              <NavLink exact to={`/profil/${username}`}>
                <i className="fas fa-fire-alt"></i> Noslar
              </NavLink>
            </li>
            <li>
              <NavLink to={`/profil/${username}/cevaplar`}>
                <i className="fas fa-fire-extinguisher"></i> Cevaplar
              </NavLink>
            </li>
            <li>
              <NavLink to={`/profil/${username}/begeniler`}>
                <i className="fas fa-dragon"></i> Beğeniler
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink to={`/profil/${username}/bildirimler`}>
                  <i className="fas fa-bell"></i> Bildirimler
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <Switch>
          <Route path={`/profil/${username}/cevaplar`}>
            <CommentList comments={comments} />
          </Route>
          <Route path={`/profil/${username}/begeniler`} component={PostList} />
          <Route
            path={`/profil/${username}/bildirimler`}
            component={Notifications}
          />
          <Route>
            <PostList posts={post} noPostError="Henüz paylaşılmış nos yok."/>
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.profileReducer.profile,
  post: state.profileReducer.post,
  total: state.profileReducer.total,
  loggedUserId: state.userReducer.user.id,
  comments: state.profileReducer.comments,
  totalComment: state.profileReducer.totalComment
});
export default connect(
  mapStateToProps,
  { fetchUserPosts, fetchUserAnswers }
)(Profile);

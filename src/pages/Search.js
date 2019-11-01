import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "../layouts/PostList";
import CommentList from "../layouts/CommentList";
import UserList from "../layouts/UserList";
import GroupList from "../layouts/GroupList";
import queryString from "query-string";
class Search extends React.Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search).q;
    console.log(query);
  }
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const query = queryString.parse(this.props.location.search).q;
    return (
      <React.Fragment>
        <div className="search-input-panel post-container">
          <div className="inputs">
            <input
              type="text"
              placeholder="aranacak kelimeler..."
              className="default-input"
            />
            <select className="post-group-select">
              <option>Kullanıcılar</option>
              <option>Gruplar</option>
              <option>Noslar</option>
              <option>Cevaplar</option>
            </select>
          </div>
          <button className="default-btn mt-2 default-btn2">Search</button>
        </div>

        <Switch>
          <Route path={`/arama/gruplar?q=${query}`} component={GroupList} />
          <Route path={`/arama/noslar?q=${query}`} component={PostList} />
          <Route path={`/arama/cevaplar?q=${query}`} component={CommentList} />
          <Route component={UserList} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Search;

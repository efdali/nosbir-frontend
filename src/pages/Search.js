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

    this.state = {
      q: "",
      group: 1
    };
  }

  render() {
    const query = queryString.parse(this.props.location.search).q;
    return (
      <React.Fragment>
        <div className="search-input-panel post-container">
          <form method="GET" action="/arama">
            <div className="inputs">
              <input
                type="text"
                placeholder="aranacak kelimeler..."
                className="default-input"
                name="q"
                value={this.state.q}
                onChange={e => this.setState({ q: e.target.value })}
              />
              <select
                className="post-group-select"
                value={this.state.group}
                onChange={e => this.setState({ group: e.target.value })}
              >
                <option>Kullanıcılar</option>
                <option>Gruplar</option>
                <option>Noslar</option>
                <option>Cevaplar</option>
              </select>
            </div>
            <button className="default-btn mt-2 default-btn2">Ara</button>
          </form>
        </div>

        <Switch>
          <Route path="/arama/gruplar" component={GroupList} />
          <Route path="/arama/noslar" component={PostList} />
          <Route path="/arama/cevaplar" component={CommentList} />
          <Route component={UserList} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Search;

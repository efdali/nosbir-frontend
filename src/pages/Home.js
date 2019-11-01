import React, { Component } from "react";
import PostList from "../layouts/PostList";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LoadMoreButton from "../components/LoadMoreButton";
import { fetchGroups, fetchPosts } from "../store/actions/postAction";
class Home extends Component {
  componentDidMount() {
    this.props.fetchGroups();
    this.fetchPosts();
  }
  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { groupName }
      }
    } = this.props;
    const params = prevProps.match.params;
    if (params.groupName !== groupName) {
      this.setState(
        {
          page: 0
        },
        () => {
          this.fetchPosts();
        }
      );
    }
  }
  fetchPosts() {
    const {
      match: {
        params: { groupName }
      }
    } = this.props;
    this.props.fetchPosts(groupName, this.state.page);
  }
  // mobile select routing
  changeHandler = e => {
    this.props.history.push(e.target.value);
  };
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      loading: false
    };
  }

  loadMoreHandler = () => {
      this.setState(
        state => ({
          page: ++state.page,
          loading: true
        }),
        () => {
          this.fetchPosts();
        }
      );
      this.setState({ loading: false });
  }
  render() {
    const { groups } = this.props;
    return (
      <React.Fragment>
        <div className="sort-list-container">
          <ul className="sort-list">
            <li className="sort-list-item">
              <NavLink to="/" className="sort-list-item-link">
                <i className="fas fa-home homepage-icon"></i>
              </NavLink>
            </li>
            {groups.map((g, i) => (
              <li className="sort-list-item" key={i}>
                <NavLink
                  to={`/grup/${g.group_seo}`}
                  className="sort-list-item-link"
                >
                  {g.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="mobile-sort-list">
            <li>
              <NavLink to="/" className="sort-list-item-link">
                <i className="fas fa-home homepage-icon"></i>
              </NavLink>
            </li>
            <li>
              <select
                className="mobile-group-select"
                onChange={this.changeHandler}
              >
                <option value="/">Gruplar</option>
                {groups.map((g, i) => (
                  <option key={i} value={`/grup/${g.group_seo}`}>
                    {g.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        <PostList posts={this.props.posts} />
        {this.props.total > this.state.page ? (
          <LoadMoreButton
            text="Daha Fazla NOS"
            onClick={this.loadMoreHandler}
            loading={this.state.loading}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.postReducer.groups,
  posts: state.postReducer.posts,
  total: state.postReducer.totalPost - 1
});
const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchPosts: (groupName, page) => dispatch(fetchPosts(groupName, page))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

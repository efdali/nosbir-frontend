import React from "react";
import Post from "./post";
import Loading from "./loading";
import Error from "./error";
import { connect } from "react-redux";
import {fetchPosts} from '../store/actions/postActions';
class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, isLoading, isRejected, msg } = this.props;

    if (isLoading) return <Loading />;
    else if (isRejected) return <Error msg={msg} />;
    else if (!posts.length) return <Error msg="Post Bulunamadı." />;

    return (
      <div className="post-list">
        {posts.map(p => (
          <Post post={p} key={p.post_id} />
        ))}
        <button>Daha Fazla Nos</button>
      </div>
    );
  }
}
const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
  isLoading: posts.post_loading,
  isRejected: posts.post_reject,
  msg: posts.post_error_msg
});
export default connect(mapStateToProps, {fetchPosts})(PostList);

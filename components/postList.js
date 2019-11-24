import React from "react";
import Post from "./post";
import Loading from "./loading";
import Error from "./error";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postsActions";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.group);
  }
  render() {
    const { posts, isLoading, isRejected, msg } = this.props;
    if (isLoading) return <Loading />;
    else if (isRejected) return <Error msg={msg} />;
    else if(!posts.length) return <Error msg="Post Bulunamadı."/>;
    return (
      <div className="post-list">
        {posts.map((p, i) => (
          <Post post={p} key={i} />
        ))}
        <button>Daha Fazla Nos</button>
      </div>
    );
  }
}
const mapStateToProps = ({posts}) => ({
  posts: posts.post_posts,
  isLoading: posts.post_loading,
  isRejected: posts.post_rejected,
  msg: posts.post_msg
});
export default connect(mapStateToProps, { fetchPosts })(PostList);

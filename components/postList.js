import React from "react";
import Post from "./post";
import Loading from "./loading";
import Error from "./error";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postActions";
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  onScrollHandle = e => {
    // inner görünen alan
    // scrollTop ne kadar aşağıda olduğu
    // offsetHeight sayfanın toplam yüksekliği
    const { total, group, fetchPosts } = this.props;
    if (this.state.page < total - 1) {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        this.setState(
          oldState => ({
            page: oldState.page + 1
          }),
          () => {
            fetchPosts(group, this.state.page);
          }
        );
      }
    } else window.removeEventListener("scroll", this.onScrollHandle);
  };
  componentDidMount() {
    this.props.fetchPosts(this.props.group, this.state.page);
    window.addEventListener("scroll", this.onScrollHandle);
  }
  componentWillUnmount() {
    window.removeEventListener(scroll, this.onScrollHandle);
  }

  render() {
    const { posts, isLoading, isRejected, msg, total } = this.props;

    if (isLoading) return <Loading />;
    else if (isRejected) return <Error msg={msg} />;
    else if (!posts.length) return <Error msg="Post Bulunamadı." />;

    return (
      <div className="post-list">
        {posts.map((p, i) => (
          <Post post={p} key={i} />
        ))}
        {this.state.page !== 0 && this.state.page >= total - 1 ? (
          <Error msg="Bütün postlar bu kadardı.Hepsini gördün." />
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
  isLoading: posts.post_loading,
  isRejected: posts.post_reject,
  msg: posts.post_error_msg,
  total: posts.total
});
export default connect(mapStateToProps, { fetchPosts })(PostList);

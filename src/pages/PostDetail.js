import React from "react";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import CommentList from "../layouts/CommentList";
import LoggedAs from "../components/LoggedAs";
import { connect } from "react-redux";
import { fetchPostById, shareComment } from "../store/actions/postAction";
import Error from "../components/Error";
class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      error: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.props.fetchPostById(params.title);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params)
      this.props.fetchPostById(this.props.match.params.title);
  }

  sendCommentHandler = e => {
    e.preventDefault();
    const comment = this.state.comment;
    if (!comment) {
      this.setState({
        error: "Yorum alanı boş bırakılamaz"
      });
      return false;
    }
    this.setState({ error: "" });
    const { post_id } = this.props.post;
    const { user } = this.props;
    this.props.shareComment(post_id, comment, user);
    this.setState({comment:''});
  };
  render() {
    const { isAuthenticated } = this.props;
    const { post, comments, totalComments } = this.props;
    const postUserId = post.user_id;
    const { id } = this.props.user;
    return (
      <React.Fragment>
        <div className="post-container post-detail-p">
          <Post post={post} showHtml={true} />
          <div className="post-actions">
            <div className="left-side">
              {postUserId === id ? (
                <div className="user-post-action">
                  <Link to="/">
                    <i className="fas fa-edit"></i>
                    Düzenle
                  </Link>
                  <Link to="/">
                    <i className="fas fa-trash"></i>
                    Sil
                  </Link>
                </div>
              ) : (
                ""
              )}
              <Link to="/" className="post-report">
                <i className="fas fa-exclamation-triangle"></i>
                Report
              </Link>
            </div>
            <div className="post-share">
              <ul>
                <li>
                  <i className="fas fa-share-alt"></i>
                  <span>Share</span>
                </li>
                <li className="facebook">
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="twitter">
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li className="instagram">
                  <Link to="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li className="whatsapp">
                  <Link to="/">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CommentList comments={comments} total={totalComments} />
        <div className="comment-form">
          <p>Cevap Yaz</p>
          <LoggedAs />
          <form onSubmit={this.sendCommentHandler}>
            <Error error={this.state.error} />
            <div className="textarea">
              <p>
                Cevabınız
                <span>
                  (Uygunsuz içerik sahipleri süresiz olarak banlanacaktır.)
                </span>
              </p>
              <textarea
                className="comment-text"
                disabled={!isAuthenticated}
                value={this.state.comment}
                onChange={e => this.setState({ comment: e.target.value })}
              ></textarea>
            </div>
            {!isAuthenticated ? (
              <button className="default-btn comment-submit-btn" disabled>
                Yorum yazmak için giriş yapmalısın.
              </button>
            ) : (
              <button
                className="default-btn comment-submit-btn"
                onClick={this.sendCommentHandler}
              >
                Gönder
              </button>
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user,
  post: state.postReducer.post,
  comments: state.postReducer.comments,
  totalComments: state.postReducer.totalComments
});
export default connect(
  mapStateToProps,
  { fetchPostById, shareComment }
)(PostDetails);

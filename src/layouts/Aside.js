import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPopularPosts } from "../store/actions/popularAction";
import Loading from '../components/Loading';
import Image from "../components/Image";
class Aside extends React.Component {
  componentDidMount() {
    this.props.fetchPopularPosts();
  }

  SuccessComponent = () => {
    const { popular } = this.props;
    if (popular.length <= 0) {
      return (
        <ul className="content-list">Şuan Popular post bulunmamaktadır.</ul>
      );
    }
    return (
      <ul className="content-list">
        {popular.map((p, i) => (
          <li key={i}>
            <Link to={`/profil/${p.nick}`} className="content-user-img">
              <Image
                src={p.picture}
                alt={p.nick}
                width="20"
                height="20"
              />
            </Link>
            <div className="content-meta">
              <h3>
                <Link to={`/baslik/${p.seo}`}>{p.title}</Link>
              </h3>
              <div>
                <Link to={`/baslik/${p.seo}`}>
                  <span>
                    <i className="fas fa-comment-alt"></i>{" "}
                    <span className="answer-span"> {p.ys} Answers</span>
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  BaseComponent = () => {
    const { loading, failMessage } = this.props;
    if (loading) {
      return <Loading/>;
    } else if (failMessage) {
      return (
        <ul className="errors">
          <li>{failMessage}</li>
        </ul>
      );
    } else {
      return <this.SuccessComponent />;
    }
  };
  render() {
    return (
      <div
        className="right-container mt fd-column bg-white"
        style={{ height: "550px" }}
      >
        <div className="ask-btn-container">
          <Link to="/yeni-nos" className="default-btn ask-btn">
            Hadi Nos'la
          </Link>
        </div>
        <div className="aside-tabs">
          <div className="tabs">
            <Link to="/">Popülerler</Link>
          </div>
          <div className="tab-content">
            <this.BaseComponent />
          </div>
        </div>
      </div>
    );
  }
}
Aside.defaultProps = {
  posts: []
};
const mapStateToProps = state => ({
  popular: state.popularReducer.popular,
  loading: state.popularReducer.loading,
  failMessage: state.popularReducer.failMessage
});
export default connect(
  mapStateToProps,
  { fetchPopularPosts }
)(Aside);

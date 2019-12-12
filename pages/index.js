import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import GroupSidebar from "../components/groupSidebar";
import PostList from "../components/postList";
import PopularSidebar from "../components/popularSidebar";
import { withAuth } from "../utils/auth";
import { LOGIN_MODAL, setModalVisibility } from "../store/actions/modalActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { fetchPosts } from "../store/actions/postActions";
class Home extends React.Component {
  static async getInitialProps(ctx) {
    const { query } = ctx;
    const group = query.slug ? query.slug : "";
    await ctx.store.dispatch(fetchPosts(group));
    return {
      group
    };
  }

  sharePostHandler = e => {
    e.preventDefault();
    if (this.props.isAuthenticated) {
      this.props.router.push("/yeni-post");
    } else {
      toast.info("Önce Giriş Yapmalısın.");
      this.props.setModalVisibility(LOGIN_MODAL, true);
    }
  };
  render() {
    const { group } = this.props;
    return (
      <>
        <Head>
          <title>Nosbir | Sosyal Paylaşım Diyarı</title>
        </Head>
        <GroupSidebar />
        <div className="content">
          <div className="home-new-post" onClick={this.sharePostHandler}>
            <input
              type="text"
              placeholder="ne düşünüyorsun"
            />
            <button
              href="#"
              className="default-btn"
            >
              Paylaş
            </button>
          </div>
          <PostList group={group} />
        </div>
        <PopularSidebar />
      </>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setModalVisibility })(
  withRouter(withAuth(Home))
);

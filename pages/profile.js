import React from "react";
import Head from "next/head";
import { withAuth } from "../utils/auth";
import GroupSidebar from "../components/groupSidebar";
import UserContainer from "../components/userContainer";
import http from "../utils/http";
class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <>
        <Head>
          <title>profil/{this.props.post.nick}</title>
          <meta name="description" content={`${this.props.post.user.nick}'in Profili`} />
        </Head>
        <GroupSidebar />
        <div className="content">{this.props.post.user.nick}</div>
        <aside className="right-sidebar user-sidebar">
          <UserContainer
            nick={this.props.post.user.nick}
            picture={this.props.post.user.picture}
          />
        </aside>
      </>
    );
  }
}

Profile.getInitialProps = async ({ query }) => {
  const nick = query.slug.split("@")[1];
  const post = await http
    .get("profil_goster.php", {
      params: {
        kadi: nick
      }
    })
    .then(res => res.data)
    .then(res => {
      return { user: res.uye, posts: res.post, total: res.toplamPost };
    });

  return {
    post
  };
};
export default withAuth(Profile);

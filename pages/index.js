import React from "react";
import Head from "next/head";
import GroupSidebar from "../components/groupSidebar";
import NewPostForm from "../components/newPostForm";
import PostList from "../components/postList";
import PopularSidebar from "../components/popularSidebar";
import {fetchPosts} from '../store/actions/postActions';
import {fetchPopulars} from '../store/actions/popularActions';
import {fetchGroups} from '../store/actions/groupActions';

class Home extends React.Component {
  static async getInitialProps({ store, query }) {
    const group = query.slug ? query.slug : "";
    return {
      group
    };
  }

  render() {
    const { group } = this.props;
    return (
      <>
        <Head>
          <title>Nosbir | Sosyal Paylaşım Diyarı</title>
        </Head>
        <GroupSidebar />
        <div className="content">
          <NewPostForm />
          <PostList group={group} />
        </div>
        <PopularSidebar />
      </>
    );
  }
}
export default Home;

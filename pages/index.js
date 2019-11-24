import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/sidebar';
import NewPostForm from '../components/newPostForm';
import { fetchPosts } from '../store/actions/postsActions';
import PostList from '../components/postList';
class Home extends React.Component {
  render() {
    const { group } = this.props;
    return (
      <>
        <Head>
          <title>Nosbir | Sosyal Paylaşım Diyarı</title>
        </Head>
        <Sidebar />
        <div className="page-content">
          <NewPostForm />
          <PostList group={group} />
        </div>
      </>
    );
  }
}

Home.getInitialProps = async ({ store, query }) => {
  const group = query.slug ? query.slug : '';
  return {
    group,
  };
};
export default Home;

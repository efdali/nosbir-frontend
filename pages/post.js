import Head from "next/head";
import GroupSidebar from "../components/groupSidebar";
import PostUserSidebar from "../components/postUserSidebar";
import { fetchPostDetails } from "../store/actions/commentActions";
import PostDetails from "../components/postDetails";
import { withAuth } from "../utils/auth";
import CommentList from "../components/commentList";
import Vote from "../components/vote";
import WriteComment from "../components/writeComment";
const Post = props => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="author" content={post.user} />
        <meta name="description" content={post.title}></meta>
      </Head>
      <GroupSidebar />
      <div className="content">
        <div className="post">
          <PostDetails post={post} />
        </div>
        <CommentList />

        <div className="mobile-write-comment">
          <Vote
            postId={post.post_id}
            seo={post.seo}
            likes={post.begeni}
            total={post.toplam}
            white
          />
          <WriteComment postId={post.post_id} />
        </div>
      </div>
      <PostUserSidebar
        userId={post.user_id}
        nick={post.nick}
        picture={post.picture}
        likes={post.begeni}
        total={post.toplam}
        group_seo={post.group_seo}
        name={post.name}
        postId={post.post_id}
        seo={post.seo}
      />
    </>
  );
};
Post.getInitialProps = async ({ store, query }) => {
  const post = await store.dispatch(fetchPostDetails(query.slug));
  return {
    post
  };
};

export default withAuth(Post);

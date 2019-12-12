import React from "react";
import Link from "next/link";
import Vote from "./vote";
import PostHeader from "./postHeader";
import PostSocial from "./postSocial";
import ReactHtmlParser from "react-html-parser";
const Post = props => {
  const { post } = props;
  return (
    <div className="post">
      <PostHeader
        nick={post.nick}
        picture={post.picture}
        createdAt={post.created_at}
        seo={post.group_seo}
        name={post.name}
      />
      <div className="post-content">
        <h1>
          <Link href={`/nos/${post.seo}`}>
            <a>{post.title}</a>
          </Link>
        </h1>
        <div className="text">{ReactHtmlParser(post.content)}</div>
      </div>
      <div className="post-footer">
        <Vote
          postId={post.post_id}
          seo={post.seo}
          likes={post.begeni}
          total={post.toplam}
        />
        <PostSocial seo={post.seo} />
      </div>
    </div>
  );
};

export default Post;

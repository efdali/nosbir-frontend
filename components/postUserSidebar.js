import React from "react";
import Link from "next/link";
import Image from "./image";
import WriteComment from "./writeComment";
import Vote from "./vote";
import PostSocial from "./postSocial";
import UserContainer from "./userContainer";
export default function PostUserSidebar(props) {
  const {
    userId,
    nick,
    picture,
    likes,
    total,
    group_seo,
    name,
    postId,
    seo
  } = props;
  return (
    <aside className="right-sidebar user-sidebar">
      <UserContainer nick={nick} picture={picture} userId={userId} />
      <Vote postId={postId} seo={seo} likes={likes} total={total} white />
      <PostSocial white seo={seo}>
        <li>
          <Link href={`/n/${group_seo}`}>
            <a className="default-btn group-btn">{name}</a>
          </Link>
        </li>
      </PostSocial>
      <WriteComment postId={postId} />
    </aside>
  );
}

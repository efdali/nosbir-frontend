import React from "react";
import Link from "next/link";
import Image from "./image";
import WriteComment from "./writeComment";
import Vote from "./vote";
import PostSocial from "./postSocial";
export default function PostUserSidebar(props) {
  const { nick, picture, likes, total, group_seo, name, postId, seo } = props;
  return (
    <aside className="right-sidebar user-sidebar">
      <div className="user-container">
        <div className="container-top"></div>
        <div className="container-bottom">
          <Image src={picture} alt={nick} />
          <ul>
            <li>
              <h2>
                <Link href={`/@${nick}`}>
                  <a>{nick}</a>
                </Link>
              </h2>
            </li>
            <li className="message-icon-container">
              <Link href="/">
                <a>
                  <img src="/message-icon.png" alt="mesaj at" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Vote postId={postId} seo={seo} likes={likes} total={total} white />
      <PostSocial white>
        <li>
          <Link href={`/${group_seo}`}>
            <a className="default-btn group-btn">{name}</a>
          </Link>
        </li>
      </PostSocial>
      <WriteComment postId={postId} />
    </aside>
  );
}

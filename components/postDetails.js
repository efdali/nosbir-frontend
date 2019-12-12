import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Error from "./error";
import { timeAgo } from "../utils/helper";
import PostHeader from "./postHeader";
import PostSocial from "./postSocial";
import ReactHtmlParser from "react-html-parser";

export default function PostDetails(props) {
  const router = useRouter();
  const { post } = props;

  useEffect(() => {
    if (!post)
      setTimeout(() => {
        router.back();
      }, 1000);
  }, [post]);

  if (!post) {
    return <Error msg="Aradığınız post bulunamadı." />;
  }
  return (
    <>
      <div className="post-content-top">
        <a
          onClick={e => {
            e.preventDefault();
            router.back();
          }}
        >
          <img src="/go-back-icon.png" alt="geri git" />
        </a>
        <h1>{post.title}</h1>
        <span>{timeAgo(post.created_at)}</span>
      </div>
      <PostHeader
        seo={post.group_seo}
        nick={post.nick}
        picture={post.picture}
        name={post.name}
        createdAt={post.created_at}
        class="post-detail"
      >
        <PostSocial seo={post.seo} />
      </PostHeader>
      <div className="post-content-body">{ReactHtmlParser(post.content)}</div>
    </>
  );
}

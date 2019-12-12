import React from "react";
import Link from "next/link";
import { timeAgo } from "../utils/helper";
export default function Comment(props) {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-vote">
        <button className="default-btn">
          <img src="/vote-up-icon.png" alt="yorum oyla" />
        </button>
        <span>&infin;</span>
        <button className="default-btn">
          <img src="/vote-down-icon.png" alt="yorum oyla" />
        </button>
      </div>
      <div className="comment-left">
        {
          props.link && <Link href={`/nos/${props.link}`}>
            <a className="goto-post-btn">
              Nos'a Git &#8594;
            </a>
          </Link>
        }
        <p>{comment.text}</p>
        <div className="comment-meta">
          <h3>
            <Link href={`/@${comment.nick}`}>
              <a>{comment.nick}</a>
            </Link>
          </h3>
          <span> /{timeAgo(comment.created_at)}</span>
        </div>
      </div>
    </div>
  );
}

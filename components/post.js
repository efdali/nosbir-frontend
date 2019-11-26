import React from "react";
import Link from "next/link";

const Post = props => {
  const { post } = props;
  return (
    <div className="post">
      <ul className="post-header">
        <li>
          <img src={post.picture} alt={post.nick} />
          <div>
            <h3>{post.nick}</h3>
            <span>{post.created_at}</span>
          </div>
        </li>
        <li>
          <Link href={`/${post.group_seo}`}>
            <a className="default-btn group-btn">{post.name}</a>
          </Link>
        </li>
      </ul>
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <div className="post-footer">
        <ul className="post-actions">
          <li className="vote">
            <button>
              <img className="icon" src="vote-up-icon.png" alt="vote up" />
            </button>
            <span className="number">{post.begeni ? post.begeni : 0}</span>
            <button>
              <img className="icon" src="vote-down-icon.png" alt="vote down" />
            </button>
          </li>
          <li className="comment-meta">
            <img className="icon" src="comment-icon.png" alt="comments" />
            <Link href="/">
              <a>
                <span className="number">{post.toplam ? post.toplam : 0}</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="post-share">
          <li className="whatsapp">
            <button>
              <img
                className="icon"
                src="/whatsapp-share-icon.png"
                alt="share with whatsapp"
              />
            </button>
          </li>
          <li className="twitter">
            <button>
              <img
                className="icon"
                src="/twitter-share-icon.png"
                alt="share with twitter"
              />
            </button>
          </li>
          <li className="facebook">
            <button>
              <img
                className="icon"
                src="/facebook-share-icon.png"
                alt="share with facebook"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;

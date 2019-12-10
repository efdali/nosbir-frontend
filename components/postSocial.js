import React from "react";

export default function PostSocial(props) {
  const Icon = ({ type }) => (
    <img
      className="icon"
      alt="post share"
      src={`/${type}-share-${props.white ? "white-" : ""}icon.png`}
    />
  );
  const defaultClass = props.white ? "default-btn" : "";
  return (
    <ul className="post-share">
      <li className="whatsapp">
        <a
          href={`https://wa.me/?text=şu nosa bir bak... http://nosbir.com/nos/${props.seo}`}
          target="_blank"
          className={defaultClass}
        >
          <Icon type="whatsapp" />
        </a>
      </li>
      <li className="twitter">
        <a className={defaultClass} target="_blank" href={`https://twitter.com/share?url=http://nosbir.com/nos/${props.seo}`}>
          <Icon type="twitter" />
        </a>
      </li>
      <li className="facebook">
        <a
          className={defaultClass}
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=http://nosbir.com/nos/${props.seo}`}
        >
          <Icon type="facebook" />
        </a>
      </li>
      {props.children}
    </ul>
  );
}

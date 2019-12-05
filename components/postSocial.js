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
        <button className={defaultClass}>
          <Icon type="whatsapp" />
        </button>
      </li>
      <li className="twitter">
        <button className={defaultClass}>
          <Icon type="twitter" />
        </button>
      </li>
      <li className="facebook">
        <button className={defaultClass}>
          <Icon type="facebook" />
        </button>
      </li>
      {props.children}
    </ul>
  );
}

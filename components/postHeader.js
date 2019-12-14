import React from "react";
import Link from "next/link";
import Image from "./image";
import { timeAgo } from "../utils/helper";
export default function PostHeader(props) {
  return (
    <ul className={`post-header ${props.class}`}>
      <li>
        <Image src={props.picture} alt={props.nick} />
        <div>
          <h3>
            <Link href={`/u/@${props.nick}`}>
              <a>@{props.nick}</a>
            </Link>
          </h3>
          <span>{timeAgo(props.createdAt)}</span>
        </div>
      </li>
      <li>
        <Link href={`/n/${props.seo}`}>
          <a
            className="default-btn group-btn"
            style={
              props.name === "neverfab"
                ? {
                    color: "var(--main-green-color)",
                    background: "var(--main-bg-color)"
                  }
                : {}
            }
          >
            {props.name}
          </a>
        </Link>
      </li>
      {props.children}
    </ul>
  );
}

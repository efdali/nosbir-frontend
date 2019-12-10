import React from "react";
import Link from "next/link";
import Image from "./image";
import { useSelector } from "react-redux";
export default function UserContainer(props) {
  const authUserId = useSelector(state => state.auth.user.id);
  return (
    <div className="user-container">
      <div className="container-top"></div>
      <div className="container-bottom">
        <Image src={props.picture} alt={props.nick} />
        <ul>
          <li>
            <h2>
              <Link href={`/u/@${props.nick}`}>
                <a>@{props.nick}</a>
              </Link>
            </h2>
          </li>
          {props.userId !== authUserId && (
            <li className="message-icon-container">
              <Link href="/">
                <a>
                  <img src="/message-icon.png" alt="mesaj at" />
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import Link from 'next/link';
import Image from './image';
export default function UserContainer(props) {
  return (
    <div className="user-container">
      <div className="container-top"></div>
      <div className="container-bottom">
        <Image src={props.picture} alt={props.nick} />
        <ul>
          <li>
            <h2>
              <Link href={`/@${props.nick}`}>
                <a>{props.nick}</a>
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
  );
}

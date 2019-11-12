import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <ul className="nav-container">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/post">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/post">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;

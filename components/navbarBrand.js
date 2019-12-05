import React from "react";
import Link from 'next/link';

export default function NavbarBrand() {
  return (
    <div className="navbar-brand">
      <Link href="/anasayfa">
        <a>
          <img src="/header-logo.png" className="navbar-logo" alt="Nosbir" />
        </a>
      </Link>
      <h1>
        <Link href="/anasayfa">
          <a>nosbir</a>
        </Link>
      </h1>
    </div>
  );
}

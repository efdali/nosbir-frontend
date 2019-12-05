import React from "react";
import { useRouter } from "next/router";
export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div className="header-search">
      <img src="/search-icon.png" className="search-icon" alt="nosbir-search" />
      <form method="GET" action="/arama">
        <input
          value={q}
          type="text"
          name="q"
          className="search-input"
          placeholder="ne arıyorsun?"
        />
      </form>
      <style jsx>{`
        div.header-search {
          width: 850px;
          position: relative;
          left: 238px;
          margin-top: 15px;
          margin-bottom: 15px;
          border-bottom: 2px solid var(--main-gray-color);
          display: flex;
          align-items: center;
          padding-bottom: 4px;
        }
        div.header-search img.search-icon {
          width: 26px;
          height: 26px;
        }
        div.header-search form {
          flex: 1;
          margin-left: 8px;
          align-self: end;
        }
        div.header-search form input.search-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: var(--small-font-size);
          font-family: tekton-pro, sans-serif;
          font-weight: bold;
          color: #fff;
          background-color: inherit;
        }
      `}</style>
    </div>
  );
}

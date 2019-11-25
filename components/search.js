import React from "react";

export default function Search() {
  return (
    <div className="header-search">
      <img
        src="/search-icon.png"
        className="search-icon"
        alt="nosbir-search"
        width="44"
        height="44"
      />
      <form method="GET" action="/arama">
        <input
          type="text"
          name="q"
          className="search-input"
          placeholder="ne arıyorsun?"
        />
      </form>
    </div>
  );
}

import React from "react";
import User from "../components/User";
import LoadMoreButton from "../components/LoadMoreButton";
export default function UserList() {
  return (
    <div className="post-container">
      <div className="users-container">
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <LoadMoreButton text="Daha Fazla Noscu" />
    </div>
  );
}

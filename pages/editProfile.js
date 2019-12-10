import React from "react";
import Head from "next/head";
import { withAuth } from "../utils/auth";
import UserContainer from "../components/userContainer";
function EditProfile() {
  return (
    <>
      <Head>
        <title>Profil Düzenle</title>
      </Head>
      <div className="content">
         <div className="passwd-container">
             <h1>Şifre Değiştir</h1>
             <input placeholder="eski şifre"/><br/>
             <input placeholder="yeni şifre"/>
             <input placeholder="yeni şifre tekrar"/>
         </div>
      </div>
      <aside className="right-sidebar user-sidebar">
          <UserContainer nick="efdali" picture="default_user.png" userId="2"/>
          <h1>Right side</h1>
      </aside>
    </>
  );
}

export default withAuth(EditProfile);
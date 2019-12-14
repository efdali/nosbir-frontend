import React from "react";
import Head from "next/head";
import { withAuth } from "../utils/auth";
import UserContainer from "../components/userContainer";
import Image from "../components/image";
import { useSelector } from "react-redux";
function EditProfile() {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <Head>
        <title>Profil Düzenle</title>
      </Head>
      <div className="content">
        <div className="header">
          <h4>profil düzenle</h4>
        </div>
        <div className="form-wrapper">
          <div className="picture-form form-box">
            <form>
              <Image src={user.resim} alt={user.kadi} />
              <label className="picture-label">
                yeni resim seç
                <input type="file" className="picture-btn" />
              </label>
              <button type="submit" className="form-save-btn">
                kaydet
              </button>
            </form>
          </div>
          <div className="nick-form form-box">
            <form>
              <input
                className="default-input"
                type="text"
                placeholder="yeni kullanıcı adı"
                readOnly
              />
              <button
                type="submit"
                className="form-save-btn disabled"
                disabled
                title="kullanıcı adı değiştirilemez."
              >
                kaydet
              </button>
            </form>
          </div>
          <div className="mail-form form-box">
            <form>
              <input
                type="mail"
                className="default-input"
                placeholder="yeni mail gir"
                readOnly
              />
              <button
                type="submit"
                className="form-save-btn disabled"
                disabled
                title="mail adresi değiştirme hakkınız yok"
              >
                kaydet
              </button>
            </form>
          </div>
          <div className="passwd-form form-box">
            <form>
              <input
                type="password"
                className="default-input"
                placeholder="yeni şifre"
              />
              <input
                type="password"
                className="default-input"
                placeholder="yeni şifre tekrar"
              />
              <input
                type="password"
                className="default-input old-passwd"
                placeholder="mevcut şifre"
              />
              <button className="form-save-btn">kaydet</button>
            </form>
          </div>
        </div>
      </div>
      <aside className="right-sidebar user-sidebar">
        <UserContainer nick={user.kadi} picture={user.resim} userId={user.id} />
        <h1>Right side</h1>
      </aside>
      <style jsx>
        {`
          .content {
            flex: 1;
            background-color: var(--main-dark-gray-color);
            color: #fff;
          }
          .header {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid var(--main-gray-color);
          }
          .header h4 {
            font-size: var(--big-font-size);
            height: 40px;
            line-height: 39px;
            margin-left: 15px;
            font-family: Tekton-pro, sans-serif;
            font-weight: bold;
          }
          .form-wrapper {
            margin-top: 50px;
          }
          .form-box {
            width: 80%;
            margin: 0 auto;
            margin-top: 45px;
            background: var(--main-gray-color);
            height: 60px;
            position: relative;
          }
          .form-box form {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
          }
          :global(.form-box img) {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            position: relative;
            left: -30px;
          }
          .picture-btn {
            display: none;
          }
          .picture-label {
            border: 1px solid #000;
            padding: 4px 12px;
            background-color: #000;
            cursor: pointer;
          }
          .form-box input {
            margin: 0 0 0 15px;
            width: 40%;
            padding: 4px;
          }
          .old-passwd {
            margin-right: 15px !important;
          }
          button.form-save-btn {
            margin-left: auto;
            background-color: var(--main-red-color);
            border: none;
            outline: none;
            padding: 8px 22px;
            font-size: var(--small-font-size);
            color: #fff;
            margin-right: 10px;
            cursor: pointer;
          }
          button.form-save-btn.disabled {
            cursor: no-drop;
            background-color: #000;
          }
        `}
      </style>
    </>
  );
}
export default withAuth(EditProfile, true);

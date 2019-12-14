import React, { useState } from "react";
import Head from "next/head";
import { withAuth } from "../utils/auth";
import http from "../utils/http";
import UserContainer from "../components/userContainer";
import Image from "../components/image";
import { useDispatch, useSelector } from "react-redux";
import { changeImage, logout } from "../store/actions/authActions";
import { toast } from "react-toastify";
import Loading from "../components/loading";
import Router from 'next/Router';
function EditProfile() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [without, setWithout] = useState(false);
  const [picture, setPicture] = useState(user.resim);
  const [isLoading, setLoading] = useState(false);
  const [oldPasswd, setOldPasswd] = useState("");
  const [newPasswd, setNewPasswd] = useState("");
  const [newPasswdAgain, setNewPasswdAgain] = useState("");
  const changeImageHandler = e => {
    e.preventDefault();
    setLoading(true);
    if (!image) return false;
    const result = dispatch(changeImage(image));
    result.then(res => {
      if (res) {
        toast.success("resim başarıyla değişti");
      } else {
        toast.error("Opps bir hata oluştu");
      }
      setLoading(false);
    });
  };
  const onImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      let reader = new FileReader();
      reader.onload = event => {
        setPicture(event.target.result);
        setWithout(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const passwdChangeHandler = e => {
    e.preventDefault();

    if (!oldPasswd || !newPasswd || !newPasswdAgain) {
      return false;
    }

    if (newPasswd !== newPasswdAgain) {
      toast.error("şifreler eşleşmiyor");
      return false;
    }

    if(newPasswd.length<=6){
      toast.warn("şifre 6 karakterden az olamaz");
      return false;
    }

    http
      .post("profil_dsifre.php", {
        eskiSifre: oldPasswd,
        yeniSifre: newPasswd
      })
      .then(res => res.data)
      .then(res => {
        console.log(res);
        if (res.durum) {
          toast.success("şifre değiştirme başarılı. tekrar giriş yapın");
          setInterval(() => {
            dispatch(logout());
            Router.replace("/");
          }, 1000);
        } else {
          toast.error(res.mesaj);
        }
      });
  };
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
            <form onSubmit={changeImageHandler}>
              <Image
                src={picture}
                alt={user.kadi}
                withoutUrl={without}
                className="user-img"
              />
              <label className="picture-label">
                yeni resim seç
                <input
                  type="file"
                  className="picture-btn"
                  onChange={onImageChange}
                />
              </label>
              {!isLoading ? (
                <button
                  type="submit"
                  className="form-save-btn"
                  onClick={changeImageHandler}
                  disabled={isLoading ? true : false}
                >
                  kaydet
                </button>
              ) : (
                <Loading />
              )}
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
            <form onSubmit={passwdChangeHandler}>
              <input
                type="password"
                className="default-input"
                placeholder="yeni şifre"
                value={newPasswd}
                onChange={e => setNewPasswd(e.target.value)}
              />
              <input
                type="password"
                className="default-input"
                placeholder="yeni şifre tekrar"
                value={newPasswdAgain}
                onChange={e => setNewPasswdAgain(e.target.value)}
              />
              <input
                type="password"
                className="default-input old-passwd"
                placeholder="mevcut şifre"
                value={oldPasswd}
                onChange={e => setOldPasswd(e.target.value)}
              />
              {isLoading ? (
                <Loading />
              ) : (
                <button
                  className="form-save-btn"
                  onClick={passwdChangeHandler}
                  disabled={isLoading ? true : false}
                >
                  kaydet
                </button>
              )}
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
            padding-bottom: 50px;
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
          :global(.form-box .user-img) {
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
          :global(.loading-container) {
            margin-left: auto;
            margin-right: 25px;
          }
          :global(.loading-container img) {
            margin-top: 0 !important;
          }
          @media (max-width: 1320px) {
            .passwd-form {
              height: 120px;
            }
            .passwd-form form {
              flex-wrap: wrap;
              height: 120px;
            }
            .passwd-form button {
              margin: 0;
            }
            .picture-label {
              margin-left: -15px;
            }
          }
        `}
      </style>
    </>
  );
}
export default withAuth(EditProfile, true);

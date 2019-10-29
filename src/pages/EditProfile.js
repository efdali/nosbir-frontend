import React from "react";
import FormInput from "../components/FormInput";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
export default function EditProfile() {
  const history=useHistory();
  const isAuthenticated=useSelector(state=>state.userReducer.isAuthenticated);
  if(!isAuthenticated){
    history.goBack();
    return false;
  }
  return (
    <div className="form-container form-container2">
      <div>
        <h1>
          <i className="fas fa-user-edit"></i> Temel Bilgiler
        </h1>
        <form>
          <FormInput name="Kullanıcı Adı" icon="user" />
          <img
            src="https://secure.gravatar.com/avatar/b948e8ff0c4594e227d11473adb0c752?s=96&d=mm&r=g"
            alt="user"
            className="img-rounded edit-profile-img"
            width="80"
            height="80"
          />
          <FormInput name="Profil Resmi" icon="file-image" type="file" />
          <button className="default-btn default-btn2">Kaydet</button>
        </form>
      </div>

      <div className="mt">
        <h1>
          <i className="fas fa-pen-square"></i> Şifre Değişikliği
        </h1>
        <form>
          <FormInput name="Mevcut Şifre" icon="unlock-alt" type="password" />
          <FormInput name="Yeni Şifre" icon="lock" type="password" />
          <FormInput name="Yeni Şifre Tekrar" icon="lock" type="password" />
          <button className="default-btn default-btn2">Şifreyi Değiştir</button>
        </form>
      </div>

      <div className="mt">
        <h1>
          <i className="fas fa-envelope-open-text"></i> Email Değişikliği
        </h1>
        <p>
          Email Değişikliği şuan pasif durumda en kısa sürede
          aktifleştirilecektir.
        </p>
      </div>
    </div>
  );
}

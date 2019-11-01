import React from "react";
import FormInput from "../components/FormInput";
import Errors from '../components/Errors';
import { connect } from "react-redux";
import { saveUserProfileInfo,changeUserPassword } from "../store/actions/userAction";
import Image from "../components/Image";

class EditProfile extends React.Component {
  handleChangeImage = e => {
    this.setState({ picture: e.target.files[0] });
  };
  saveUserHandler = e => {
    e.preventDefault();
    const { nick, picture } = this.state;
    this.props.saveUserProfileInfo(nick, picture);
  };

  passwdChangeHandler = e => {
    e.preventDefault();
    const errors = [];
    const { oldPasswd, newPasswd, newPasswdAgain } = this.state;
    if (!oldPasswd || !newPasswd || !newPasswdAgain) {
      errors.push("Bütün alanları doldurunuz");
    }
    if (newPasswd.length <= 6) {
      errors.push("Yeni şifreniz 7 karakterden kısa olamaz");
    }

    if(newPasswd !== newPasswdAgain){
      errors.push("Şifreler Eşleşmiyor");
    }

    if(errors.length>0){
      this.setState({passwdErrors:errors});
      return false;
    }
    this.setState({passwdErrors:[]})
    this.props.changeUserPassword(oldPasswd,newPasswd);
  };
  constructor(props) {
    super(props);
    this.state = {
      nick: props.user.kadi,
      oldPasswd: "",
      newPasswd: "",
      newPasswdAgain: "",
      picture: null,
      passwdErrors:[]
    };
  }
  render() {
    return (
      <div className="form-container form-container2">
        <div>
          <h1>
            <i className="fas fa-user-edit"></i> Temel Bilgiler
          </h1>
          <form encType="multipart/form-data" onSubmit={this.saveUserHandler}>
            <FormInput
              name="Kullanıcı Adı"
              icon="user"
              value={this.state.nick}
              onChange={e => this.setState({ nick: e.target.value })}
            />
            <Image
              src={this.props.user.resim}
              alt={this.props.user.nick}
              className="img-rounded edit-profile-img"
              width="80"
              height="80"
            />
            <FormInput name="Profil Resmi" icon="file-image">
              <input
                type="file"
                onChange={this.handleChangeImage}
                className="default-input"
              />
            </FormInput>
            <button
              className="default-btn default-btn2"
              onClick={this.saveUserHandler}
            >
              Kaydet
            </button>
          </form>
        </div>

        <div className="mt">
          <h1>
            <i className="fas fa-pen-square"></i> Şifre Değişikliği
          </h1>
          <Errors errors={this.state.passwdErrors}/>
          <form onSubmit={this.passwdChangeHandler}>
            <FormInput
              name="Mevcut Şifre"
              icon="unlock-alt"
              type="password"
              value={this.state.oldPasswd}
              onChange={e => this.setState({ oldPasswd: e.target.value })}
            />
            <FormInput
              name="Yeni Şifre"
              icon="lock"
              type="password"
              value={this.state.newPasswd}
              onChange={e => this.setState({ newPasswd: e.target.value })}
            />
            <FormInput
              name="Yeni Şifre Tekrar"
              icon="lock"
              type="password"
              value={this.state.newPasswdAgain}
              onChange={e => this.setState({ newPasswdAgain: e.target.value })}
            />
            <button
              className="default-btn default-btn2"
              onChange={this.passwdChangeHandler}
            >
              Şifreyi Değiştir
            </button>
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
}
const mapStateToProps = state => ({
  user: state.userReducer.user
});
export default connect(
  mapStateToProps,
  { saveUserProfileInfo,changeUserPassword }
)(EditProfile);

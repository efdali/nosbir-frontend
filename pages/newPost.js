import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { withAuth } from "../utils/auth";
import { fetchGroups, groupsSuccess } from "../store/actions/groupActions";
import Loading from "../components/loading";
import Error from "../components/error";
import http from "../utils/http";
import { shareTextPost,shareImagePost } from "../store/actions/shareActions";
import { toast } from "react-toastify";
class NewPost extends Component {
  static async getInitialProps() {
    const asyncGroups = await http
      .get("gruplar.php")
      .then(res => res.data)
      .then(res => {
        if (res.durum) {
          return res.gruplar;
        } else {
          return [];
        }
      })
      .catch(err => []);
    return {
      asyncGroups
    };
  }

  constructor(props) {
    super(props);

    if (props.asyncGroups.length <= 0) {
      props.fetchGroups();
    } else {
      props.groupsSuccess(props.asyncGroups);
    }
    this.state = {
      active: "state",
      title: "",
      text: "",
      groupValue: 0,
      image: "",
      picture: ""
    };
  }

  RenderGroups = () => {
    const { groups, isLoading, isRejected, errorMsg } = this.props.groups;
    if (isLoading) return <Loading />;
    else if (isRejected) return <Error msg={errorMsg} />;
    else if (groups.length <= 0)
      return (
        <Error msg="Paylaşım yapabileceğiniz grup bulunamadı.Lütfen sonra tekrar deneyin" />
      );
    else {
      return (
        <ul>
          <li>
            <a className={this.state.groupValue == 9 ? "active" : ""}
            onClick={e=>this.changeGroup(e,9)}>
              neverfab
            </a>
          </li>
          {groups.map((g, i) => (
            <li key={i}>
              <a
                className={this.state.groupValue === g.group_id ? "active" : ""}
                onClick={e => this.changeGroup(e, g.group_id)}
              >
                {g.name.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      );
    }
  };

  changeGroup = (e, id) => {
    e.preventDefault();
    this.setState({ groupValue: id });
    console.log(this.state.groupValue === id);
  };

  shareHandler = e => {
    e.preventDefault();

    const { active, title, text, groupValue, picture } = this.state;

    if (!this.props.isAuthenticated) return false;

    if (active === "state") {
      this.shareText();
    } else if (active === "picture") {
      this.shareImage();
    } else if (active === "link") {
    }
  };

  shareText = () => {
    const { title, text, groupValue } = this.state;
    if (!title || !text || groupValue === 0) return false;

    shareTextPost(title, text, groupValue).then(res => {
      if(res.durum){
        this.props.router.push("/nos/"+res.baslik);
      }else{
        toast.error(res.mesaj);
      }
    });
  };

  shareImage=()=>{
    const {title,image,groupValue}=this.state;
    
    if(!title || !image || !groupValue) return false;

    shareImagePost(title,image,groupValue)
    .then(res=>{
      if(res.durum){
        this.props.router.push("/nos/"+res.baslik);
      }else{
        toast.error(res.mesaj);
      }
    });
  }

  onImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
      let reader = new FileReader();
      reader.onload = event => {
        this.setState({ picture: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  render() {
    return (
      <>
        <Head>
          <title>Yeni Post</title>
        </Head>
        <div className="content new-post-content">
          <div>
            <a onClick={() => this.props.router.back()}>
              <img src="/go-back-icon.png" alt="geri git" />
            </a>
          </div>
          <form>
            <input
              type="text"
              placeholder="başlık"
              className="post-title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              required={true}
            />
            <div className="new-post-form">
              <div
                className={`tab state-tab ${
                  this.state.active !== "state" ? "hidden" : ""
                }`}
              >
                <textarea
                  className="post-content"
                  placeholder="ne düşünüyorsun?"
                  value={this.state.text}
                  onChange={e => this.setState({ text: e.target.value })}
                ></textarea>
              </div>
              <div
                className={`tab picture-tab ${
                  this.state.active !== "picture" ? "hidden" : ""
                }`}
              >
                {this.state.image ? (
                  <>
                    <img src={this.state.picture} alt="post resim" />
                    <div className="picture-tab-footer">
                      <button
                        onClick={e => {
                          e.preventDefault();
                          this.setState({ image: "", picture: "" });
                        }}
                      >
                        <img src="/delete-icon.png" alt="resmi sil" />
                      </button>
                    </div>
                  </>
                ) : (
                  <label className="custom-file-input">
                    <span>Gözat</span>Paylaşmak istediğin resmi seç
                    <input
                      type="file"
                      value={this.state.image}
                      onChange={this.onImageChange}
                      className="file-input"
                    />
                  </label>
                )}
              </div>
              <div
                className={`tab link-tab ${
                  this.state.active !== "link" ? "hidden" : ""
                }`}
              >
                link
              </div>
              <ul className="button-container">
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ active: "state" });
                    }}
                  >
                    durum
                  </button>
                  <img src="/status-icon.png" alt="post" />
                </li>
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ active: "picture" });
                    }}
                  >
                    görsel
                  </button>
                  <img src="/post-picture.png" alt="post" />
                </li>
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ active: "link" });
                    }}
                  >
                    link
                  </button>
                  <img src="/post-link.png" alt="post" />
                </li>
                <li>
                  <button
                    className="default-btn share-btn"
                    onClick={this.shareHandler}
                  >
                    paylaş
                  </button>
                </li>
              </ul>
            </div>
          </form>
          <div className="groups-input-container">
            <h4>topluluk seç</h4>
            <this.RenderGroups />
          </div>
        </div>
        <aside className="right-sidebar new-post-sidebar">
          <p>
            unutma her yazdığın yazıyı bundan yıllar sonra çocukların hatta
            torunların okuyabilir bunun için yazdıklarını senden yıllar sonraki
            torunlarına öğüt veriyormuşçasına yaz. Ne kendini utandır ne de
            torunlarını yazdıklarından dolayı utandır. Senin yazdıklarından
            etkilenip hayatında radikal kararlar alabilecek insanlar var onlara
            iyi örnek ol.
          </p>
        </aside>
      </>
    );
  }
}
const mapStateToProps = state => ({
  groups: state.groups,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { fetchGroups, groupsSuccess })(
  withRouter(withAuth(NewPost, true))
);

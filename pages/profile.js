import React from "react";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import { withAuth } from "../utils/auth";
import Post from "../components/post";
import Comment from "../components/comment";
import UserContainer from "../components/userContainer";
import Error from "../components/error";
import http from "../utils/http";
import { toast } from "react-toastify";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      page: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandle);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle);
  }

  scrollHandle = e => {
    if (this.state.page < this.props.total - 1) {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        this.setState(
          state => ({
            page: state.page + 1
          }),
          () => {
            http
              .get(
                this.props.page === "postlar"
                  ? "profil_goster.php"
                  : "profil_yorum.php",
                {
                  params: {
                    kadi: this.props.nick,
                    s: this.state.page
                  }
                }
              )
              .then(res => res.data)
              .then(res => {
                this.setState({ data: [...this.state.data, ...res.data] });
              });
          }
        );
      }
    } else {
      window.removeEventListener("scroll", this.scrollHandle);
    }
  };
  RenderComponent = () => {
    const { page } = this.props;
    const { data } = this.state;
    if (data.length === 0) {
      return (
        <>{data.length === 0 && <Error msg="Herhangi bir nos yok..." />}</>
      );
    }
    if (page === "postlar") {
      return (
        <>
          {data.map((p, i) => (
            <Post post={p} key={i} />
          ))}
        </>
      );
    } else if (page === "yorumlar") {
      return (
        <div>
          {data.map((c, i) => (
            <Comment comment={c} key={i} link={c.seo} />
          ))}
        </div>
      );
    } else if (page === "bildirimler") {
      return (
        <ul>
          {data.map((n, i) => (
            <li key={i}>{n.text}</li>
          ))}
        </ul>
      );
    }
  };

  render() {
    const { nick, page, authenticatedUserId } = this.props;
    const userId = this.props.user.user_id;
    return (
      <>
        <Head>
          <title>profil/{nick}</title>
          <meta name="description" content={`${nick}'in Profili`} />
        </Head>
        <div className="content">
          <this.RenderComponent />
        </div>
        <aside className="right-sidebar user-sidebar">
          <UserContainer
            nick={nick}
            picture={this.props.user.picture}
            userId={userId}
          />
          <div className="profile-links">
            <Link href={`/u/@${nick}/`}>
              <a
                className={`default-btn ${page === "postlar" ? "active" : ""}`}
              >
                Postlar
              </a>
            </Link>
            <Link href={`/u/@${nick}/yorumlar`}>
              <a
                className={`default-btn ${page === "yorumlar" ? "active" : ""}`}
              >
                Yorumlar
              </a>
            </Link>
            <br />
            {authenticatedUserId === userId && (
              <>
                <Link href={`/bildirimler`}>
                  <a
                    className={`default-btn ${
                      page === "bildirimler" ? "active" : ""
                    }`}
                  >
                    Bildirimler
                  </a>
                </Link>
                <Link href={`/mesajlar`}>
                  <a
                    className={`default-btn ${
                      page === "mesajlar" ? "active" : ""
                    }`}
                    onClick={e => {
                      e.preventDefault();
                      toast.info(
                        "Mesajlaşma aktif değildir. En kısa sürede aktifleştirilecektir..."
                      );
                    }}
                  >
                    Mesajlar
                  </a>
                </Link>
                <Link href={`/profil-duzenle`}>
                  <a className="default-btn">Düzenle</a>
                </Link>
              </>
            )}
          </div>
        </aside>
        <style jsx>{`
          :global(.comment:first-child) {
            margin-top: 0;
          }
          .profile-links {
            margin-top: 30px;
            background: var(--main-dark-gray-color);
            border: 1px solid var(--main-dark-gray-color);
            height: 60px;
            line-height: 59px;
            text-align: center;
            width: 100%;
          }
          .profile-links a {
            margin-left: 10px;
            background: var(--second-red-color);
          }
          .profile-links a.active,
          .profile-links a:hover {
            background: var(--main-red-color);
          }
          .profile-links a:first-child {
            margin-left: 0;
          }
          aside.user-sidebar {
            min-height: 0;
          }
          @media screen and (max-width: 620px) {
            :global(.page-content) {
              flex-direction: column;
            }
            .content {
              order: 2;
            }
            aside.user-sidebar {
              display: flex;
              order: 1;
            }
          }
        `}</style>
      </>
    );
  }
}

Profile.getInitialProps = async ({ query, store }) => {
  const nick = query.slug.split("@")[1];
  const page = query.page;
  let data = {};
  if (page === "postlar") {
    data = await http
      .get("profil_goster.php", {
        params: {
          kadi: nick
        }
      })
      .then(res => res.data)
      .then(res => {
        return { user: res.uye, data: res.data, total: res.toplamPost };
      });
  } else if (page === "yorumlar") {
    data = await http
      .get("profil_yorum.php", {
        params: {
          kadi: nick
        }
      })
      .then(res => res.data)
      .then(res => ({
        user: res.uye,
        data: res.data,
        total: res.toplamYorum
      }));
  } else if (page === "bildirimler") {
    //if (store.getState().auth.user.kadi === nick) {
    data = {
      total: 0,
      user: { user_id: "2", nick: "efdali", picture: "default_user.png" },
      data: [
        {
          text: "Bildirim 1"
        },
        {
          text: "Bildirim 2"
        },
        {
          text: "Bildirim 3"
        }
      ]
    };
    //}
  }
  return {
    nick,
    data: data.data,
    user: data.user,
    total: data.total,
    page
  };
};
const mapStateToProps = state => ({
  authenticatedUserId: state.auth.user.id
});
export default connect(mapStateToProps)(withAuth(Profile));

import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Loading from "./loading";
import Error from "./error";
import { fetchGroups } from "../store/actions/groupActions";
import { withRouter } from "next/router";
class GroupSidebar extends React.Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  renderComponent = () => {
    const {slug}=this.props.router.query;
    const { groups, isLoading, isRejected, msg } = this.props;
    if (isLoading) {
      return <Loading />;
    } else if (isRejected) {
      return <Error msg={msg} />;
    } else if (!groups.length) {
      return <Error msg="Grup Bulunamadı" />;
    } else {
      return (
        <ul>
          <li>
            <Link href="/">
              <a className={slug===undefined ? 'active' : ''}>anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="gundem">
              <a className={slug==="gundem" ? 'active' : ''}>gündem</a>
            </Link>
          </li>
          {groups.map(g => (
            <li key={g.group_id}>
              <Link href={g.group_seo}>
                <a  className={slug===g.group_seo ? 'active' :''}>{g.name.toLowerCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  render() {
    return <aside className="left-sidebar">{this.renderComponent()}</aside>;
  }
}

const mapStateToProps = ({ groups, posts }) => ({
  isLoading: groups.group_loading,
  isRejected: groups.group_reject,
  msg: groups.group_msg,
  groups: groups.groups
});
export default connect(mapStateToProps, { fetchGroups })(withRouter(GroupSidebar));

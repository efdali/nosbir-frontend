import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { fetchGroups } from "../store/actions/groupActions";
import Loading from "./loading";
import Error from "./error";
class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  renderComponent = () => {
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
          {groups.map((g, i) => (
            <li key={i}>
              <Link href={g.group_seo}>
                <a>{g.name.toLowerCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  render() {
    return (
      <aside className="left-sidebar">
        <h5>Kanallar</h5>
        {this.renderComponent()}
      </aside>
    );
  }
}

const mapStateToProps = ({ groups }) => ({
  isLoading: groups.group_loading,
  isRejected: groups.group_rejected,
  msg: groups.group_msg,
  groups: groups.group_groups
});
export default connect(mapStateToProps, { fetchGroups })(Sidebar);

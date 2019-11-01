import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/userAction";
import { toast } from "react-toastify";
class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.props.logout();
    this.props.history.goBack();
    toast.warning("Çıkış Yapıldı");
  }

  render() {
    return <div></div>;
  }
}

export default connect(
  null,
  { logout }
)(Logout);

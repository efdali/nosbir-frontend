import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        toast.error("Bu sayfaya girmek için giriş yapmalısınız.");
        this.props.history.goBack();
        return null;
      }
    }
    componentDidUpdate() {
      if (!this.props.isAuthenticated) {
        toast.error("Bu sayfaya girmek için giriş yapmalısınız.");
        this.props.history.goBack();
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.userReducer.isAuthenticated
  });
  return connect(mapStateToProps)(Authenticate);
}

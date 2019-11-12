import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { connect } from "react-redux";
class Profile extends React.Component{
  render(){
    return (
      <div>Profile - {this.props.id}</div>
    )
  }
}

Profile.getInitialProps=ctx=>{

  const auth=ctx.store.getState().auth.isAuthenticated;
  return {
    auth,
    id:ctx.query.slug
  }
} 
export default Profile;

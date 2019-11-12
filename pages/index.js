import React from "react";
import Head from "next/head";
class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>İndex Page</title>
        </Head>
        index - {this.props.id} okey
      </>
    );
  }
}

Home.getInitialProps = async ctx => {
  const id = ctx.query.slug ? ctx.query.slug : 0;
  // const auth=ctx.store.getState().auth.isAuthenticated;
  return {
    id
  };
};
export default Home;

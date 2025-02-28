import React from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}

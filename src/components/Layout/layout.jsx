import React from "react";
import Header from "./Header/header";
import Navigator from "./Navigator/navigator";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navigator />
    </>
  );
};

export default Layout;

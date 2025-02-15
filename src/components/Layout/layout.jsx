import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header/header";
import Navigator from "./Navigator/navigator";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>{children}</main>
      {location.pathname !== "/chat" && <Navigator />}
    </>
  );
};

export default Layout;

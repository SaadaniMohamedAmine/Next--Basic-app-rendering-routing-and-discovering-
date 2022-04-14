import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer.js/Footer" ;

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

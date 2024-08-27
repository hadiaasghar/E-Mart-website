import React from "react";
import Navbar from "./Navbar";

// import img from '/logo.png'
const Header = () => {
  return (
    <div>
      <Navbar isLoggedIn={true} name="Aqib" image="/logo-e.png" />
    </div>
  );
};

export default Header;

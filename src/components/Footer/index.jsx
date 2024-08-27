

import React from "react";
import FooterTop from "./FooterTop";
// import FooterContectUs from './FooterContectUs'
// import FooterCopyRight from './FooterCopyRight'

const Footer = () => {
  return (
    <div className="overflow-hidden relative ">
      <img
        src="https://foodieweb.siswebapp.com/img/footer-bg.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        alt="Footer background"
      />
      <div className="w-full h-full bg-black opacity-90 absolute top-0 left-0 z-10"></div>

      <div className="w-[80%] mx-auto z-20">
        <FooterTop />
      </div>
    </div>
  );
};

export default Footer;

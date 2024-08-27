import React from "react";
import { data } from "./Data";
// import Datacontainer from "./Datacontainer";

const FooterContectUs = () => {
  return ( 
    <div className="flex mdf:flex-col justify-between  items-center mt-4 ">
      {data.map(item => (
        <div key={item.id} className="w-72 text-center flex flex-col items-center justify-center">
          <div className="h-1/2">
            <span className="w-14 h-14 text-primary-900 rounded-full bg-white flex items-center justify-center">
              {item.icon}
            </span>
          </div>
          <div className="h-1/2">
          <h1 className="font-bold pt-3 text-lg lg:text-xl ">
            {item.message}
          </h1>
          <p className="pt-2">{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterContectUs;

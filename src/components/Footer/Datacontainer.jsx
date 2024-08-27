
import React from "react";

const Datacontainer = ({ id, img, message, info }) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center p-4 w-full  md:w-60 lg:w-80  ">
        <span className="w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full bg-white"
        >{img}</span>
        <h1 className="font-bold pt-3  text-lg lg:text-xl text-center">
          {message}
        </h1>
        <p className="text-center   pt-2">{info}</p>
      </div>
    </>
  );
};

export default Datacontainer;

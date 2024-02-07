import React from "react";

const Header = ({ title, title_desc }) => {
  return (
    <div>
      {" "}
      <div className=" flex flex-col items-center py-3">
        <h1 className=" text-5xl font-semibold text-sky-900">{title}</h1>

        <h1 className=" -mt-9 right-1 text-xl font-bold text-white">
          {title_desc}
        </h1>
      </div>
    </div>
  );
};

export default Header;

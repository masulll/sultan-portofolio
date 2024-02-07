import Link from "next/link";
import React from "react";

const Downloadbutton = () => {
  return (
    <>
      <Link
        href="https://drive.google.com/file/d/1HBdOm70nFwOFGkv2mRtcBIyK87xUNlkQ/view?usp=drive_link"
        target="blank"
        download
        className="bg-sky-600  px-8 rounded-md  flex items-center hover:bg-sky-400 transition-all"
      >
        Download CV
      </Link>
    </>
  );
};

export default Downloadbutton;

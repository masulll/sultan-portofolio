import Link from "next/link";
import React from "react";

const Downloadbutton = () => {
  return (
    <>
      <Link
        href="https://igrskdzqqnxqrnrgzktm.supabase.co/storage/v1/object/public/bukti_tf/Sultan%20Rayhan,%20S.Kom-%20Latest%20CV.pdf"
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

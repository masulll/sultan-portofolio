import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <div className="flex mx-auto mt-5 justify-center items-center">
        <Image
          className="  z-10"
          width={600}
          height={600}
          alt="..."
          src={"/Group1.png"}
        />
        <div className="absolute top-40 z-20 text-white text-center">
          <h1 className="uppercase text-8xl ">HELLO, I'M </h1>
          <h1 className=" uppercase text-8xl"> sultan rayhan </h1>
          <h1 className="text-md text-wrap mx-52">
            A person who is passionate as a developer, loves to explore new
            experiences, and thrives on the challenges of pushing boundaries and
            innovating in the ever-evolving world of technology.
          </h1>
        </div>
      </div>
      <div className="flex justify-center text-white ">
        <Link
          href={"/#about"}
          scroll={true}
          className=" absolute bottom-20 border-2 rounded-full p-2 hover:bg-white hover:text-black fa-bounce z-50"
        >
          <FontAwesomeIcon icon={faArrowDown} className="text-2xl " />
        </Link>
      </div>
    </div>
  );
};

export default index;

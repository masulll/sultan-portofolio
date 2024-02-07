import Link from "next/link";

const Navbar = () => {
  return (
    <header className="  bg-slate-700 sticky top-0 z-50 text-white">
      <div className="flex md:flex-row flex-col justify-between p-2 gap-2 md:items-center">
        <Link href={"/"} className="font-bold  text-3xl">
          Portfolio
        </Link>
        <div className="text-sm flex flex-row gap-3 p-3">
          <Link href={"/#home"} scroll={true}>
            HOME
          </Link>
          <Link href={"/#about"} scroll={true}>
            ABOUT
          </Link>
          <Link href={"/#works"} scroll={true}>
            WORKS
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

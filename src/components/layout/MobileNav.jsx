import { Link } from "react-router-dom";

function MobileNav({ title }) {
  return (
    <header className="py-5 bg-[#F6F7FA] border-b border-[#eaebf2]">
      <nav className="container">
        <div className="flex nav-holder justify-center items-center">
          <Link
            to={"/"}
            className="text-black font-bold text-lg tracking-wider font-primary"
          >
            {title}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MobileNav;

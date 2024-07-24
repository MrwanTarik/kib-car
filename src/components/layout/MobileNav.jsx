import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

function MobileNav({ title }) {
  return (
    <header className="py-[15px] bg-[#F6F7FA] border-b border-[#eaebf2]">
      <nav className="container">
        <div className="flex  justify-between items-center">
          <Link
            to={"/"}
            className="text-black font-bold text-lg tracking-wider font-primary"
          >
            {title}
          </Link>
          <Link className="text-red">
            <BsPlusCircleFill size="26px" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MobileNav;

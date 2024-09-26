import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import cellularLogo from "../../assets/icons/cellur-logo.png";
import { RedHeartIcon, GrayHeartIcon } from "./IconHover";
import newLogo from "../../assets/icons/new-logo.svg";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Nav() {
  const [hover, setHover] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`sticky w-full  transition-transform duration-300  z-50 ${
          showNav ? "translate-y-0 " : "-translate-y-full"
        }`}
      >
        <div className="py-[9px] bg-[#F6F7FA] text-[15px] text-[#8d94ad]">
          <nav className="container">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <a href="#" className="hover:text-red flex items-center">
                  <PiInstagramLogoFill className="mr-3" size={"15px"} />
                  Instagram
                </a>
                <a href="#" className="hover:text-red flex items-center">
                  <IoLogoWhatsapp className="mr-3" size={"15px"} />
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-5">
                <div className="text-[#212c3a]">
                  <span>Support: </span>
                  <a className="hover:text-red" href="tel:+900125057755">
                    (012) 505-77-55
                  </a>
                </div>
                <Link className="hover:text-red" to={"/help"}>
                  Help
                </Link>
                <Link className="hover:text-red" to={"/"}>
                  Ru
                </Link>
                <Link
                  to={"/favorite"}
                  className="hover:text-red flex items-center"
                >
                  <FaHeart className="mr-3" />
                  Favorite
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <header className="py-[10px] bg-red ">
          <nav className="container">
            <div className="flex nav-holder justify-between items-center">
              <div className="flex items-center top-nav space-x-5 md:space-x-[80px]">
                <Link
                  to={"/"}
                  className=" text-white font-bold text-lg tracking-wider font-primary"
                >
                  KIBCAR
                </Link>
                <div className="flex items-center space-x-4 md:space-x-[30px]">
                  <Link
                    to={"/"}
                    className="font-primary text-[14px]  font-normal leading-5  text-white"
                  >
                    All Ads
                  </Link>
                  <Link
                    to={"/dealership-owners"}
                    className="font-primary text-[14px]  font-normal leading-5  text-white"
                  >
                    Salons
                  </Link>
                  <Link
                    to={"/lease"}
                    className="font-primary text-[14px]  font-normal leading-5  text-white"
                  >
                    Lease
                  </Link>
                </div>
              </div>
              <div className="flex nav-links items-center flex-1 justify-end md:space-x-[30px]">
                <Link
                  to={"/new-advertisement"}
                  className="flex items-center space-x-[4px]  py-[11px] px-[10px] rounded-[8px] bg-green hover:scale-105 transition-all duration-300"
                >
                  <img src={newLogo} alt="add-Announcement" />
                  <p className="font-primary text-[14px] font-medium leading-[18px] text-white ">
                    New Announcement
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Nav;

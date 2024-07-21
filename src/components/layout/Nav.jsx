import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import cellularLogo from "../../assets/icons/cellur-logo.png";
import { RedHeartIcon, GrayHeartIcon } from "./IconHover";
import newLogo from "../../assets/icons/new-logo.svg";
function Nav() {
  const [hover, setHover] = useState(false);
  return (
    <header className="py-5 bg-red">
      <nav className="container">
        <div className="flex nav-holder justify-between items-center">
          <div className="flex items-center top-nav space-x-5 md:space-x-[80px]">
            <Link
              to={"/"}
              className="text-white font-bold text-lg tracking-wider font-primary"
            >
              {/* <img
                className="logo"
                src={logo}
                alt="logo"
                width={161}
                height={46}
              /> */}
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
                to={"/help"}
                className="font-primary text-[14px]  font-normal leading-5  text-white"
              >
                Motorcyle
              </Link>
              <Link
                to={"/dealership-owners"}
                className="font-primary text-[14px]  font-normal leading-5  text-white"
              >
                Spare Part and Accessories
              </Link>
              <Link
                to={"/dealership-owners"}
                className="font-primary text-[14px]  font-normal leading-5  text-white"
              >
                Lease
              </Link>
            </div>
          </div>
          <div className="flex nav-links items-center flex-1 justify-end md:space-x-[30px]">
            {/* <a
              href="tel:+1234567890"
              className="flex items-center space-x-[10px]"
            >
              <img
                src={cellularLogo}
                alt="cellular-Logo"
                width={24}
                height={24}
              />
              <p className="font-primary text-[14px]  font-normal leading-5  text-white">
                (012)599-08-01
              </p>
            </a>
            <Link
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex items-center space-x-[10px] py-4 px-5 rounded-md justify-center bg-white "
              to={"/favourite"}
            >
              {hover ? <RedHeartIcon /> : <GrayHeartIcon />}
              <p className="font-primary text-[14px] font-medium leading-[21px] text-secondary">
                Favorites
              </p>
            </Link> */}
            <Link
              to={"/new-advertisement"}
              className="flex items-center space-x-[4px]  py-[11px] px-5 rounded-[8px] bg-green"
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
  );
}

export default Nav;

import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/m-home.png";
import FavIcon from "../../assets/icons/m-fav.png";
import ProfileIcon from "../../assets/icons/m-profile.png";
import TogglerIcon from "../../assets/icons/m-toggler.png";
import AddIcon from "../../assets/icons/m-add.png";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Russian Language",
    href: "",
  },
  {
    name: "Help",
    href: "",
  },
  {
    name: "Motorcycle",
    href: "",
  },
  {
    name: "All Ads",
    href: "",
  },
  {
    name: "Salons",
    href: "",
  },
  {
    name: "Spare Parts and Accessories",
    href: "",
  },
  {
    name: "Lease",
    href: "",
  },
  {
    name: "Contact Us",
    href: "",
  },
];

function MobileFixedFooter() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  function handleMenuClick() {
    setShowMenu((show) => !show);
  }
  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen bg-[#F6F7FA] z-50">
        <div className="container flex justify-between items-center h-full py-[20px]">
          <div className="flex items-center gap-6">
            <Link
              to=""
              className="flex flex-col justify-center items-center gap-1"
            >
              <img className="h-[30px]" src={HomeIcon} alt="home" />
              <p>Main</p>
            </Link>
            <Link
              to=""
              className="flex flex-col justify-center items-center gap-1"
            >
              <img className="h-[30px]" src={FavIcon} alt="fav" />
              <p>Favorite</p>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to=""
              className="flex flex-col justify-center items-center gap-1"
            >
              <img className="h-[30px]" src={ProfileIcon} alt="profile" />
              <p>Cabinet</p>
            </Link>
            <button
              onClick={handleMenuClick}
              className="flex flex-col justify-center items-center gap-1"
            >
              <img className="h-[30px]" src={TogglerIcon} alt="toggler" />
              <p>More</p>
            </button>
          </div>
          <Link
            to=""
            className="absolute bottom-[80px] left-[45%] w-[50px] h-[50px]"
          >
            <img src={AddIcon} alt="add" />
            <p className="absolute top-[65px] -left-[75%]  whitespace-nowrap">
              New Announcement
            </p>
          </Link>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 bg-[#F6F7FA] w-screen h-screen ${
          showMenu ? "" : "hidden"
        }`}
      >
        <p className="w-full text-center bg-white py-4">More</p>

        <div className="flex flex-col gap-4 mt-8">
          {links.map((link) => (
            <Link className="bg-white py-4 " key={link.name} to={link.href}>
              <span className="container font-primary text-[14px] font-normal">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileFixedFooter;

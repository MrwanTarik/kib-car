import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

const links = [
  {
    name: "Russian Language",
    href: "/",
  },
  {
    name: "Help",
    href: "/help",
  },
  {
    name: "All Ads",
    href: "/",
  },
  {
    name: "Salons",
    href: "/dealership-owners",
  },
  {
    name: "Lease",
    href: "/",
  },
];
function MobileFixedFooter() {
  const location = useLocation();
  const show = location.pathname == "/" || location.pathname == "/favorite";
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef();

  function handleMenuClick() {
    setShowMenu((show) => !show);
  }
  function handleContact() {
    // Show Contact menu modal
  }
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }

    setLastScrollY(currentScrollY);
  };
  const handleMenuLinkClick = () => {
    // close the menu
    setShowMenu(false);
  };
  const handleClickOutside = (event) => {
    if (contactRef.current && !contactRef.current.contains(event.target)) {
      setShowContact(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  // useEffect(() => {
  //   console.log(showMenu);
  //   if (showMenu) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [showMenu]);

  return (
    <>
      <div className={`h-screen bg-[#f6f7fa] ${show ? "" : "hidden"}`}>
        <div
          className={`fixed left-0 right-0 px-2 border-t border-gray-200 z-[60] bg-white transition-all duration-200 ${
            !isScrollingUp ? "-bottom-60" : "bottom-0"
          }`}
        >
          <ul className="m-0 p-0 list-none flex items-center justify-around">
            <li className="relative w-1/5 text-center">
              <Link
                className="block text-[8px] py-[9px] pb-[4px] text-[#8d94ad] no-underline tracking-[0.44px] whitespace-nowrap"
                to="/"
                onClick={handleMenuLinkClick}
              >
                <i className="inline-block w-[26px] h-[20px]">
                  <svg
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ca1016"
                  >
                    <g>
                      <path
                        d="M29.568.174c.241-.232.623-.232.864 0l9.25 8.866c.206.205.318.475.318.751 0 .574-.468 1.042-1.042 1.042H37.5v7.5c0 .92-.746 1.667-1.667 1.667l-3.85-.001V20h-3.967l-.001-.001h3.968v-5.01c0-.514-.386-.936-.883-.994l-.117-.007h-1.967c-.553 0-1 .448-1 1L28.015 20h-3.848c-.873 0-1.588-.669-1.66-1.522l-.007-.144v-7.5h-1.458c-.574 0-1.042-.468-1.042-1.042 0-.276.112-.546.308-.741z"
                        transform="translate(-29 -680) translate(0 655) translate(9 25)"
                      ></path>
                    </g>
                  </svg>
                </i>
                <span className="block mt-1 uppercase">Main</span>
              </Link>
            </li>
            <li className="relative w-1/5 text-center">
              <Link
                className="block text-[8px] py-[9px] pb-[4px] text-[#8d94ad] no-underline tracking-[0.44px] whitespace-nowrap"
                to="/favorite"
                onClick={handleMenuLinkClick}
              >
                <i className="inline-block w-[26px] h-[20px]">
                  <svg
                    height="20"
                    viewBox="0 0 24 20"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#8d94ad"
                  >
                    <g fillRule="evenodd">
                      <g>
                        <path
                          d="M19.787.83C18.85.311 17.773.014 16.625.014c-2.026 0-3.84.923-5.037 2.37C10.384.938 8.572.015 6.544.015c-1.145 0-2.22.297-3.16.814C1.367 1.946 0 4.094 0 6.563 0 7.27.115 7.947.323 8.58 1.447 13.631 11.588 20 11.588 20S21.722 13.63 22.848 8.58c.207-.634.324-1.312.324-2.018 0-2.468-1.367-4.615-3.385-5.734z"
                          transform="translate(-250 -680) translate(0 655) translate(232 25) translate(18)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </i>
                <span className="block mt-1 uppercase">Favorite</span>
              </Link>
            </li>
            <li className="relative w-1/5 text-center">
              <Link
                className="block text-[8px] py-[9px] pb-[4px] text-[#8d94ad] no-underline tracking-[0.44px] whitespace-nowrap absolute p-0 left-1/2 top-[-58px] transform -translate-x-1/2"
                to="/new-advertisement"
                onClick={handleMenuLinkClick}
              >
                <i className="inline-block w-[45px] h-[45px]">
                  <svg
                    height="45"
                    viewBox="0 0 46 45"
                    width="46"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="circlegradient"
                        x1="0%"
                        x2="98.965%"
                        y1="0%"
                        y2="98.965%"
                      >
                        <stop offset="0%" stopColor="#CA1016"></stop>
                        <stop offset="43.571%" stopColor="#C01817"></stop>
                        <stop offset="100%" stopColor="#B41312"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd" transform="translate(.5)">
                      <circle
                        cx="22.5"
                        cy="22.5"
                        fill="url(#circlegradient)"
                        r="22.5"
                      ></circle>
                      <path
                        d="M32.619 21.286h-9.31V12.38a.81.81 0 1 0-1.619 0v8.905h-9.309a.81.81 0 1 0 0 1.619h9.31v9.714a.81.81 0 1 0 1.619 0v-9.714h9.309a.81.81 0 1 0 0-1.62z"
                        fill="#FFF"
                        fillRule="nonzero"
                        stroke="#FFF"
                        strokeWidth="1.171"
                      ></path>
                    </g>
                  </svg>
                </i>
                <span className="block mt-1 uppercase">New Announcement</span>
              </Link>
            </li>
            <li className="relative w-1/5 text-center">
              <Link
                className="block text-[8px] py-[9px] pb-[4px] text-[#8d94ad] no-underline tracking-[0.44px] whitespace-nowrap js-auth-link"
                to="/"
                onClick={handleMenuLinkClick}
              >
                <i className="inline-block w-[26px] h-[20px]">
                  <svg
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#8d94ad"
                  >
                    <g fillRule="evenodd">
                      <path
                        d="M9.898 0C4.432 0 0 4.431 0 9.898c0 5.466 4.432 9.898 9.898 9.898 5.467 0 9.899-4.432 9.899-9.898C19.797 4.43 15.365 0 9.898 0zm0 2.96c1.809 0 3.275 1.466 3.275 3.273 0 1.809-1.466 3.274-3.275 3.274-1.808 0-3.273-1.465-3.273-3.274 0-1.807 1.465-3.273 3.273-3.273zm-.002 14.248c-1.804 0-3.456-.657-4.73-1.745-.31-.264-.49-.653-.49-1.06 0-1.833 1.484-3.3 3.318-3.3h3.81c1.834 0 3.312 1.467 3.312 3.3 0 .408-.178.795-.489 1.06-1.274 1.088-2.927 1.745-4.73 1.745z"
                        transform="translate(-326 -680) translate(0 655) translate(306 25) translate(20)"
                      ></path>
                    </g>
                  </svg>
                </i>
                <span className="block mt-1 uppercase">Cabinet</span>
              </Link>
            </li>
            <li className="relative w-1/5 text-center">
              <button onClick={handleMenuClick}>
                <div className="block text-[8px] py-[9px] pb-[4px] text-[#8d94ad] no-underline tracking-[0.44px] whitespace-nowrap">
                  <i className="inline-block w-[26px] h-[20px]">
                    <svg
                      height="20"
                      viewBox="0 0 28 22"
                      width="26"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#8d94ad"
                    >
                      <path
                        d="M25.917 18.005c.598 0 1.083.56 1.083 1.25s-.485 1.25-1.083 1.25H2.083c-.598 0-1.083-.56-1.083-1.25s.485-1.25 1.083-1.25zm0-8c.598 0 1.083.56 1.083 1.25s-.485 1.25-1.083 1.25H2.083c-.598 0-1.083-.56-1.083-1.25s.485-1.25 1.083-1.25zm0-9c.598 0 1.083.56 1.083 1.25s-.485 1.25-1.083 1.25H2.083C1.485 3.505 1 2.945 1 2.255s.485-1.25 1.083-1.25z"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </i>
                  <span className="block mt-1 uppercase">More</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-[#F6F7FA] z-50 ${
          showMenu ? "" : "hidden"
        }`}
      >
        <p className="w-full text-center bg-white py-4">More</p>

        <div className="flex flex-col gap-4 mt-8 px-4">
          {links.map((link) => (
            <Link
              onClick={handleMenuLinkClick}
              className="bg-white py-4"
              key={link.name}
              to={link.href}
            >
              <span className="container font-primary text-[14px] font-normal">
                {link.name}
              </span>
            </Link>
          ))}
          <button onClick={handleContact} className="bg-white py-4">
            <div
              onClick={() => setShowContact(true)}
              className="container text-start font-primary text-[14px] font-normal"
            >
              Contact Us
            </div>
          </button>
        </div>
      </div>
      <div
        className={`fixed h-screen w-full top-0 left-0 bg-black bg-opacity-25 z-[600] transition-all duration-200 ${
          showContact ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={handleClickOutside}
      >
        <div
          className={`absolute  bottom-0 left-0 z-[400] w-full bg-white rounded-tr-lg rounded-tl-lg `}
          ref={contactRef}
        >
          <div className="relative px-4 py-5 rounded-tr-lg rounded-tl-lg border-y-2 border-[#eaebf2]">
            Contact Us
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-[22px] right-[10px]"
            >
              <HiXMark size="20px" color="#8D94AD" />
            </button>
          </div>
          <div className="flex items-center px-4 py-5 border-b border-[#eaebf2]">
            <FaPhoneAlt className="mr-3" />
            <a href="#">Call</a>
          </div>
          <div className="flex items-center px-4 py-5 border-b border-[#eaebf2]">
            <IoMdMail className="mr-3" />
            <a href="#">Write a letter</a>
          </div>
          <div className="flex items-center px-4 py-5 border-b border-[#eaebf2]">
            <FaFacebook className="mr-3" />
            <a href="#">Facebook</a>
          </div>
          <div className="flex items-center px-4 py-5 border-b border-[#eaebf2]">
            <FaInstagram className="mr-3" />
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileFixedFooter;

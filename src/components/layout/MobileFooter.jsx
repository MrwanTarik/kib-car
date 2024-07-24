import { Link, useLocation } from "react-router-dom";
import facebookIcon from "../../assets/icons/fa-icon.svg";
import instaIcon from "../../assets/icons/insta-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";
const links = [
  {
    name: "Rules",
    href: "/rules",
  },
  {
    name: "User agreement",
    href: "/user-agreement",
  },
  {
    name: "Place an Ad",
    href: "/new-advertisement",
  },
];
function MobileFooter() {
  return (
    <div className="bg-[#F1F3F7]  ">
      <div className={`py-5`}>
        <div className="container">
          <div className="flex flex-col gap-[8px] pb-[15px] ">
            {links.map((link) => (
              <Link
                className="font-primary text-[14px] font-normal"
                key={link.name}
                to={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[6px] py-[25px] border-y border-[#eceaf6]">
            <p>Support Service</p>
            <p className="font-bold">(012) 505-77-55</p>
            <p className="text-[12px] text-secondary">
              Working hours — Weekdays: 09:00-19:00 | Saturday: 09:00-13:00
            </p>
            <div className="flex items-center gap-x-5 mt-4">
              <a href="mailto:kibcar@kibcar.com">
                <div className="flex justify-center items-center w-[37px] h-[37px] rounded-full bg-[#eceff6]">
                  <img src={emailIcon} alt="email" />
                </div>
              </a>
              <a href="#">
                <div className="flex justify-center items-center w-[37px] h-[37px] rounded-full bg-[#eceff6]">
                  <img src={facebookIcon} alt="facebook" />
                </div>
              </a>
              <a href="#">
                <div className="flex justify-center items-center w-[37px] h-[37px] rounded-full bg-[#eceff6]">
                  <img src={instaIcon} alt="insta" />
                </div>
              </a>
            </div>
          </div>
          <div className="pt-[25px] pb-[50px] border-b border-[#eceaf6]">
            <div className="container">
              <div className="flex flex-col">
                <h2 className="font-primary text-[12px] font-normal leading-7 text-secondary">
                  The Site Administration is not responsible for the content of
                  advertising banners and posted announcements.
                </h2>
                <p className="font-primary text-[12px] font-normal text-secondary">
                  2023-2023 Digital Classifieds LLC. TIN: 1305631664
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;

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
    name: "Law",
    href: "/law",
  },
  {
    name: "User agreement",
    href: "/user-agreement",
  },
  {
    name: "Privacy policy",
    href: "/privacy-policy",
  },
];
function Footer() {
  const location = useLocation();
  const isCarDetailsRoute = location.pathname.startsWith("/car-details/");
  return (
    <div className="bg-[#F1F3F7]  ">
      {/* className={`bg-[#E2E2E2]  py-5 ${
          isCarDetailsRoute ? "mt-[0px]" : "mt-[120px]"
        }`} */}
      <div className={`py-5`}>
        <div className="container">
          <div className="flex justify-between items-center pb-[20px] border-b-[2px] border-[#eaebf2]">
            <Link to="/new-advertisement">
              <p>Place an Ad</p>
            </Link>
            <div className="flex gap-x-5">
              <a href="#">
                <img src={facebookIcon} alt="facebook" />
              </a>
              <a href="#">
                <img src={instaIcon} alt="insta" />
              </a>
              <a href="mailto:kibcar@kibcar.com">
                <div className="flex items-center gap-x-2">
                  <img src={emailIcon} alt="email" />
                  <p>kibcar@kibcar.com</p>
                </div>
              </a>
              <a href="tel:012-505-7755">
                <div className="flex items-center gap-x-2">
                  <img src={phoneIcon} alt="phone" />
                  <p>(012) 505-77-55</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-[30px] items-center py-[20px] ">
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
        </div>
      </div>
      <div className="bg-red py-[15px]">
        <div className="container">
          <div className="flex items-center footer justify-between">
            <h2 className="font-primary text-[14px] font-normal leading-7 text-white max-w-[528px]">
              The Site Administration is not responsible for the content of
              advertising banners and posted announcements.
            </h2>
            <p className="font-primary text-[14px] font-normal text-white">
              2023-2023 Digital Classifieds LLC. TIN: 1305631664
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

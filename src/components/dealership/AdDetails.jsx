import locationLogo from "../../assets/icons/location-logo.png";
import figureIcon from "../../assets/icons/figure-icon.png";
import cellularLogo from "../../assets/icons/cellur-logo.png";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMore from "../ReadMore";
function AdDetails({
  ad: {
    id,
    description,
    city,
    number_of_announcment,
    adContent,
    phone,
    timePosted,
    slogan,
    logo_url,
    cover_url,
    dealership_name,
  },
}) {
  return (
    <>
      <div>
        <p className="font-primary  text-[15px] text-[#212c3a] px-4 hidden lg:block">
          <Link
            to="/dealership-owners"
            className="underline text-[16px] hover:text-link"
          >
            Salons
          </Link>
          {" • "}
          {dealership_name}
        </p>
        <div>
          <div className="lg:mt-[15px]">
            <img
              className="w-full object-cover h-full max-h-[323px] m-auto"
              src={cover_url}
              alt="cover_url"
            />
          </div>
          <div className="p-[10px] pr-[25px] lg:px-[25px] lg:py-[20px] bg-[#192843]">
            <div className="flex md:space-x-[30px]">
              <div className="flex flex-col justify-between">
                <img
                  className="max-w-full max-h-[73px] lg:max-h-[150px] lg:min-w-[150px] lg:max-w-[150px]  rounded-[4px] lg:mb-[15px]"
                  src={logo_url}
                  alt="dealershipImage"
                />
                <button className="rounded-[4px] p-3 max-w-full  max-h-[53px] w-full  text-white bg-link font-medium font-primary text-[14px] hidden lg:block">
                  {number_of_announcment} announcement
                </button>
              </div>
              <div>
                <div className="flex h-full lg:h-auto lg:min-h-[165px] pb-[7px] lg:pb-[15px] pl-5">
                  <div className="flex flex-col  justify-between flex-1">
                    <h2 className="font-secondary text-[22px] font-bold  text-white">
                      {dealership_name}
                    </h2>
                    <p className="block lg:hidden text-[16px] text-[#dbd8d8]">
                      {number_of_announcment} announcement
                    </p>
                    <p className="text-[14px] font-primary text-white pb-[10px] pr-[21px] border-r border-[#2a3e63] flex-1 hidden lg:block">
                      <ReadMore text={description} maxLength={220} />
                    </p>
                    <p className="lg:flex items-center font-primary text-[15px] underline text-white hidden ">
                      <FaMapMarkerAlt
                        size="22px"
                        color="#4989E0"
                        className="mr-3"
                      />
                      {city?.name}
                    </p>
                  </div>
                  <div className="pt-[33px] min-w-[200px] hidden lg:block">
                    <div className="flex items-start">
                      <FaPhoneAlt
                        className="mx-4"
                        size="24px"
                        color="#4989E0"
                      />
                      <div className="flex flex-col gap-1">
                        {Object.keys(phone).map((key) => (
                          <div key={key} className="flex">
                            <p className="font-primary text-white text-[15px]">
                              {phone[key]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <FaClock className="mx-4" size="24px" color="#4989E0" />
                      <p className="font-primary text-white text-[15px]">
                        Daily: 09:00-19:00
                      </p>
                    </div>
                  </div>
                </div>
                <p className="rounded-md px-3 py-[10.5px] w-full lg:flex items-center justify-center text-white bg-link font-medium font-primary text-[14px] hidden ">
                  <img
                    className="w-6 h-6 md:mr-[15px]"
                    src={figureIcon}
                    alt="figureIcon"
                  />
                  {slogan}
                </p>
              </div>
            </div>
            <p className="text-[14px] font-primary text-white pt-[10px] lg:pt-0 pb-[15px] pr-[21px] flex-1 block lg:hidden">
              <ReadMore text={description} maxLength={220} />
            </p>
            <p className="mb-[5px] rounded-md px-3 py-[10.5px] w-full lg:hidden items-center justify-center text-white bg-link font-medium font-primary text-[14px] flex ">
              <img
                className="w-6 h-6 md:mr-[15px]"
                src={figureIcon}
                alt="figureIcon"
              />
              {slogan}
            </p>
          </div>
        </div>
      </div>
      <p className="lg:hidden font-primary text-[15px] underline text-[#1e6e9d] flex  bg-white mt-1 lg:mt-0 p-[10px]">
        {city?.name}
      </p>
    </>
  );
}

export default AdDetails;

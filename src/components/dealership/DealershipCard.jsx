import { useState } from "react";
import telephoneGray from "../../assets/icons/telephone-gray.svg";
import EllipsisText from "react-ellipsis-text";
import { Link } from "react-router-dom";
function DealershipCard({
  dealership: {
    id,
    dealership_name,
    description,
    logo_url,
    phone,
    number_of_announcment,
  },
}) {
  const [width] = useState(window.innerWidth);
  const showMobileCom = width < 971;
  return (
    <Link
      to={`/dealership/${id}`}
      className="dealership lg:col-span-6 col-span-12"
    >
      <div
        className="flex items-center bg-white text-gray-800 leading-6 transition-shadow duration-200 ease-in-out rounded-lg h-full lg:min-h-[152px] min-h-[115px] max-h-[115px]"
        style={{ boxShadow: "0 0 3px 2px rgba(201, 199, 199, 0.66)" }}
      >
        <div
          className="relative w-[145px] h-full rounded-bl-lg rounded-tl-lg bg-cover bg-center bg-no-repeat lg:min-h-[152px] min-h-[115px] max-h-[115px]"
          style={{ backgroundImage: `url(${logo_url})` }}
        >
          <span className="flex justify-center items-center  absolute right-[5px] top-[5px] z-10 w-[40px] h-[20px] bg-[#3B8BF2] text-[10px] text-white rounded-md">
            Official
          </span>
        </div>
        <div className="dealershipContent w-[calc(100%-145px)] border-l-2 border-r-[#f7f5f5]  pb-[3px] lg:px-[10px]  lg:pt-[10px] lg:min-h-[152px] px-[10px] pt-[5] max-h-[115px]">
          <h2 className="font-bold lg:text-[18px] lg:pb-[5px] text-[15px] pb-[3px]">
            {dealership_name}
          </h2>
          <p className="lg:text-[14px] lg:pb-[5px] lg:leading-[1.2] text-[12px] pb-[1px] leading-[1.1]">
            {description !== null
              ? description.length < 50
                ? description
                : `${description.substring(0, !showMobileCom ? 120 : 60)}...`
              : ""}
          </p>
          <div className="flex items-center lg:pb-[5px] pb-[1px]">
            <svg
              width="22"
              height="23"
              viewBox="-5 -5 22 23"
              x="142"
              y="475"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.854 10.31L8.976 7.311a.231.231 0 00-.233-.063l-.429.127a.233.233 0 00-.067.032l-.44.307-.657.456a11.41 11.41 0 01-3.215-3.423l.479-.499.368-.382a.25.25 0 00.06-.107l.122-.447a.255.255 0 00-.06-.243L2.026.072a.23.23 0 00-.251-.056l-.49.191A.237.237 0 001.2.264 4.27 4.27 0 00.894.62c-1.3 1.696-1.168 4.133.306 5.67l4.685 4.879a4.002 4.002 0 002.894 1.25c.897 0 1.798-.307 2.548-.931.12-.1.236-.208.343-.32a.25.25 0 00.054-.088l.184-.51a.255.255 0 00-.054-.262zM1.5.65l.297-.116L4.47 3.317l-.067.245-.156.163L1.402.762a2.09 2.09 0 01.099-.11zm4.72 10.17L1.535 5.94C.296 4.65.13 2.636 1.106 1.153L3.91 4.074l-.444.463a.255.255 0 00-.035.304 11.89 11.89 0 003.592 3.835.23.23 0 00.26-.002l.625-.435 2.908 3.029c-1.424 1.016-3.355.844-4.596-.448zm5.077.037c-.034.035-.07.07-.106.103l-2.88-3.001.168-.118.259-.077 2.67 2.783-.11.31zm-4.6-.596a.255.255 0 010 .35.232.232 0 01-.336 0l-1.77-1.843a.255.255 0 010-.35.23.23 0 01.337 0l1.769 1.843zM4.264 7.725a.255.255 0 010 .35.232.232 0 01-.336 0l-.119-.123a.255.255 0 010-.35.23.23 0 01.336 0l.119.123z"
                fill="#22A7F0"
                fillRule="evenodd"
              />
            </svg>
            <p className="text-[#9b9b9b] overflow-hidden whitespace-nowrap overflow-ellipsis">
              {Object.values(phone).join(",")}
            </p>
          </div>
          <div className="lg:leading-normal leading-[0.7]">
            <div className="text-link text-[12px] ">
              {number_of_announcment} Announcements
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DealershipCard;

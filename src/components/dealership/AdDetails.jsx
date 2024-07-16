import locationLogo from "../../assets/icons/location-logo.png";
import figureIcon from "../../assets/icons/figure-icon.png";
import cellularLogo from "../../assets/icons/cellur-logo.png";
import clockLogo from "../../assets/icons/clock-logo.png";
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
    <div>
      <p className="font-primary font-medium leading-7 uppercase text-[17px] text-secondary">
        {dealership_name}
      </p>
      <div>
        <div className="mt-[30px]">
          <img
            className="w-full object-cover h-full max-h-[600px] m-auto"
            src={cover_url}
            alt="cover_url"
          />
        </div>
        <div className="p-7 md:p-10 bg-[#192843]">
          <div className="flex md:space-x-[30px] md:flex-row flex-col items-center md:items-start ">
            <div>
              <img
                className="max-w-full max-h-[200px] md:min-w-[200px] md:max-w-[200px]  rounded-md mb-[30px]"
                src={logo_url}
                alt="dealershipImage"
              />
            </div>
            <div>
              <h2 className="font-secondary text-[26px] font-bold leading-[32px] text-white md:mt-4">
                {dealership_name}
              </h2>
              <p className="max-w-[625px] text-[14px] font-primary text-white mt-[21px] mb-[16px] mr-[30px]">
                {description}
              </p>
              <p className="flex items-center font-primary text-[14px] underline text-white">
                <img
                  className="w-6 h-6 mr-[12px]"
                  src={locationLogo}
                  alt="city"
                />{" "}
                {city?.name}
              </p>
            </div>
            <div className=" pt-[50px] relative md:before:content-[''] md:before:absolute before:w-[1px] before:h-[118px]  before:bg-[#E2E2E2] before:-left-[30px] w-full md:w-auto">
              <div className="flex items-start">
                <img
                  className="w-6 h-6 mr-[20px] mt-1"
                  src={cellularLogo}
                  alt="cellularLogo"
                />
                <div className="flex flex-wrap gap-x-4">
                  {Object.keys(phone).map((key) => (
                    <p
                      key={key}
                      className="font-primary text-white text-[17px] font-medium leading-7 uppercase"
                    >
                      {phone[key]}
                    </p>
                  ))}
                </div>
              </div>
              {/* <div className="flex mt-5 space-x-5">
                <img className="w-6 h-6" src={clockLogo} alt="datePosted" />
                <p className="font-primary text-white text-[17px] font-medium leading-7 uppercase">
                  {`Daily: ${timePosted}`}{" "}
                </p>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 mt-8 md:gap-0 md:flex-row md:mt-0 md:space-x-8">
            <button className="rounded-md py-3 max-w-full md:max-w-[200px] max-h-[53px] w-full px-5 text-white bg-link font-medium font-primary text-[14px]">
              {number_of_announcment} announcement
            </button>
            <p className="rounded-md py-3 w-full px-5 flex md:flex-row flex-col items-center gap-2 md:gap-0  md:items-start text-white bg-link font-medium font-primary text-[14px]">
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
    </div>
  );
}

export default AdDetails;

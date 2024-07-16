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
  return (
    <Link
      to={`/dealership/${id}`}
      className="xl:col-span-6 col-span-12 rounded-lg shadow-lg"
    >
      <div className="flex md:flex-row flex-col items-center md:items-start">
        <div className="max-w-[204px] h-[201px]">
          <img
            className="object-cover w-full h-full md:rounded-l-lg rounded-lg md:rounded-none"
            src={logo_url}
            alt="dealership-img"
          />
        </div>
        <div className="p-5 bg-white flex-1 md:border-l md:border-solid rounded-r-lg">
          <h2 className="font-secondary text-[18px] font-bold leading-7 text-primary mb-5">
            {dealership_name}
          </h2>
          <p className="mb-[12px] font-primary text-secondary text-base font-normal">
            {description}
          </p>
          <div className="flex mt-[10px] mb-[10px] md:flex-row flex-col gap-y-3 md:gy-y-0 justify-center md:justify-start">
            <img
              width={24}
              height={24}
              src={telephoneGray}
              alt="telephoneGray"
              className="m-auto md:m-0"
            />
            <div className="flex md:space-x-[10px] ml-0 md:ml-[10px] md:flex-row flex-col items-center md:items-start  ">
              {Object.keys(phone).map((key, index, array) => {
                const isLast = index === array.length - 1;

                return isLast ? (
                  <EllipsisText
                    text={phone[key]}
                    length={13}
                    key={key}
                    className="font-primary text-secondary text-[14px] md:text-[17px] font-medium leading-7 uppercase"
                  />
                ) : (
                  <p
                    key={key}
                    className="font-primary text-secondary text-[14px] md:text-[17px] font-medium  leading-7 uppercase"
                  >
                    {phone[key]}
                  </p>
                );
              })}
            </div>
          </div>
          <p className="mt-[10px] text-link text-[14px] md:text-base font-primary">
            {number_of_announcment} Announcements
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DealershipCard;

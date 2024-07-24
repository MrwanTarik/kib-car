import { useState } from "react";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";

import phoneDetails from "../../../assets/images/phone-details.png";
import clockGray from "../../../assets/icons/clock-gray.png";
import vipIcon from "../../../assets/icons/vip-icon.png";
import FullscreenMode from "./FullscreenMode";
import ProfileCard from "./ProfileCard";
import AttentionNote from "./AttentionNote";
import CarDetailsCom from "./CarDetailsCom";
import CreativeButton from "./CreativeButton";
import CarSlider from "./CarSlider";
import { formatPhoneNumber, hideLastTwoDigits } from "../../../utils/help";
import Modal from "../../Modal";
import DeleteAdForm from "../../DeleteAdForm";
import EditAdForm from "../../EditAdForm";
import ForgetPinForm from "../../ForgetPinForm";

function DetailsPC({ car, showFullSlider, setShowFullSlider, carImages, id }) {
  const [number, setNumber] = useState(false);
  return (
    <div className="container relative">
      <ul className="flex items-center gap-[10px] py-[16px] font-primary font-medium border-b border-solid border-[#E2E2E2] uppercase text-[16px] text-[#212c3a]">
        <li className="underline">{car.brand.name}</li> -
        <li className="underline">{car.brand_model.name}</li> -
        <li>{car.brand_model.name}</li>
      </ul>
      {/* fixed while scrolling */}
      <div className="navigation-container">
        <div className="navigation flex md:flex-row flex-col gap-y-4 md:gap-y-0  items-center justify-between py-[15px] ">
          <h2 className="text-[#212c3a] text-center md:text-start text-[24px]  font-bold leading-8">
            {car.brand.name} {car.brand_model.name},{" "}
            {car.engine_volume_liters + " L "} , {car.vehicle_year.name} ,{" "}
            {Number(car.mileage).toLocaleString()}{" "}
            {car.mileage_measurement_unit.toUpperCase()}
          </h2>
          <div className="flex items-center gap-x-[30px]">
            <Link
              className="group flex items-center space-x-[4px]  rounded-md justify-center bg-white "
              to={""}
            >
              <svg
                width="32"
                height="30"
                fill="none"
                viewBox="-5 -5 32 30"
                x="64"
                y="413"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:stroke-rose-600"
                stroke="#212c3a"
              >
                <path
                  d="M17.725 2.193a5.204 5.204 0 00-2.593-.693c-1.66 0-3.148.785-4.13 2.016C10.015 2.286 8.529 1.5 6.866 1.5c-.94 0-1.82.253-2.591.693C2.62 3.143 1.5 4.97 1.5 7.07c0 .601.094 1.178.265 1.717.921 4.296 9.237 9.713 9.237 9.713s8.31-5.417 9.232-9.713c.17-.539.266-1.116.266-1.717 0-2.099-1.12-3.926-2.775-4.877z"
                  strokeWidth="1.5"
                />
              </svg>
              <p className="font-primary text-[14px] font-medium leading-[21px] text-[#212c3a] group-hover:text-rose-600  ">
                Save to favourites
              </p>
            </Link>
            {/* <Link
                    className="flex items-center space-x-[10px] rounded-md justify-center bg-white "
                    to={""}
                    onClick={() => setComplain(!complain)}
                  >
                    <img src={complainLogo} alt="complain" />
                    <p className="font-primary text-[14px] font-medium leading-[21px] text-secondary">
                      Complain
                    </p>
                  </Link> */}
          </div>
        </div>
      </div>
      <div className="sliderX flex lg:flex-row flex-col  justify-between items-start lg:gap-x-[30px] lg:g-y-0 gap-y-8">
        <div className="lg:w-[65%] w-full">
          {/* <ImageGallery
                  infinite={true}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={500}
                  swipingTransitionDuration={100}
                  showNav={false}
                  slideInterval={3000}
                  items={carImages}
                /> */}
          {showFullSlider && (
            <FullscreenMode
              showFullSlider={showFullSlider}
              setShowFullSlider={setShowFullSlider}
              carImages={carImages}
            />
          )}
          <CarSlider
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
          />
          {/* <SliderMobile
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
          /> */}
          <ul className="mt-[65px] pt-[20px] pb-[20px] picture-list pl-[20px] border-b border-solid border-[#E2E2E2]">
            <li>Updated: {car.updated_date}</li>
          </ul>
          <CarDetailsCom car={car} />
          <div className="flex flex-col gap-y-[10px] mt-[30px] ">
            {car.additional_information && (
              <div className="border-b border-solid border-[#E2E2E2] pb-[30px]">
                {car.additional_information}
              </div>
            )}

            <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-3 pt-[20px] pb-[30px] border-b border-solid border-[#e2e2e2]">
              {car.features.map((feature) => {
                return (
                  <p
                    key={feature.id}
                    className="bg-[#F6F7FA] py-[14px] px-[20px] font-secondary"
                  >
                    {feature.name}
                  </p>
                );
              })}
            </div>
            <div className="flex items-center justify-between mt-[20px]">
              <div className="flex gap-x-[20px]">
                <Modal>
                  <Modal.Open windowName="edit">
                    <button className="font-primary text-[14px] underline text-[#212c3a] hover:text-link">
                      Correct it
                    </button>
                  </Modal.Open>
                  <Modal.Window name="edit">
                    <EditAdForm />
                  </Modal.Window>
                  <Modal.Open windowName="delete">
                    <button className="font-primary text-[14px] underline text-[#212c3a] hover:text-link">
                      Delete Announcement
                    </button>
                  </Modal.Open>
                  <Modal.Window name="delete">
                    <DeleteAdForm />
                  </Modal.Window>
                  <Modal.Open windowName="forget-pin">
                    <button className="font-primary text-[14px] underline text-[#212c3a] hover:text-link">
                      Forget pin
                    </button>
                  </Modal.Open>
                  <Modal.Window name="forget-pin">
                    <ForgetPinForm car={car} />
                  </Modal.Window>
                </Modal>
              </div>
              <p className="font-primary text-[14px] text-[#212c3a]">
                Announcement number: {id}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full sticky top-[77px]">
          <div className="bg-[#f6f7fa] p-[30px] w-full rounded-lg">
            <h2 className="text-[26px] font-bold leading-8 text-primary ">
              {Number(car.price).toLocaleString()} {car.price_currency}
            </h2>
            <ProfileCard />
            <div className="flex gap-x-5">
              {car.user && (
                <div className="p-[20px]">
                  <img
                    className="w-[60px] h-[60px]"
                    src={car.car_dealership_logo}
                    alt="brandImg"
                  />
                  <p>{car.car_dealership.name}</p>
                </div>
              )}
            </div>
            <div
              onClick={() => setNumber((prev) => !prev)}
              className={`py-[10px] bg-[#3db460] rounded-xl hover:bg-[#269547] ${
                number ? "hidden" : "block"
              }`}
            >
              <p className="text-center font-primary text-white text-[14px] cursor-pointer">
                Show The Number
              </p>
              <div
                className={`justify-center flex items-center gap-x-[10px] font-secondary text-[18px] font-bold leading-7 text-white visible h-8 pt-[5px] cursor-pointer`}
              >
                <img
                  className="w-6 h-6"
                  src={phoneDetails}
                  alt="phoneDetails"
                />
                {car.user
                  ? hideLastTwoDigits(
                      formatPhoneNumber(car.car_dealership.phone1)
                    )
                  : hideLastTwoDigits(formatPhoneNumber(car.creator.phone))}
              </div>
            </div>
            <div className={number ? "block" : "hidden"}>
              <a
                href={`tel:+${
                  car.user
                    ? formatPhoneNumber(car.car_dealership.phone1)
                    : formatPhoneNumber(car.creator.phone)
                }`}
                className={`flex items-center gap-x-[10px]  text-[22px] font-bold leading-7 text-[#212c3a] visible h-8 hover:text-[#ca1016]`}
              >
                {/* make it red*/}
                <svg
                  width="29"
                  height="28"
                  fill="none"
                  viewBox="-5 -5 29 28"
                  x="359"
                  y="413"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                    fill="#CA1016"
                  />
                </svg>
                {car.user
                  ? formatPhoneNumber(car.car_dealership.phone1)
                  : formatPhoneNumber(car.creator.phone)}
              </a>
              <AttentionNote />
            </div>
            {car.user && (
              <>
                <div className="pt-[17px] mt-[15px] border-t border-solid border-[#E2E2E2] flex-col flex gap-y-[20px]">
                  <p className="text-black font-primary text-[14px] font-normal">
                    {car.car_dealership.slogan}
                  </p>
                  <p className="text-secondary font-primary text-[14px] font-normal">
                    {car.car_dealership.description}
                  </p>
                  <p className="text-secondary font-primary text-[14px] font-normal underline pb-[20px]">
                    {car.car_dealership_announcement_count} announcements
                  </p>
                </div>

                <div className="pt-[17px] border-t border-solid border-[#E2E2E2] flex flex-col gap-y-[11px]">
                  {/* <div className="flex gap-x-[20px] items-center">
                      <img
                        className="w-6 h-6"
                        src={locationGray}
                        alt="locationGray"
                      />
                      <p className="text-[17px] font-primary font-medium leading-7 uppercase text-primary">
                        Daily: 09:00-19:00
                      </p>
                    </div> */}
                  <div className="flex gap-x-[10px] items-center">
                    <img className="w-6 h-6" src={clockGray} alt="clockGray" />
                    <p className="text-[17px] font-primary font-medium leading-7 uppercase text-primary underline">
                      {car.car_dealership.address}
                    </p>
                  </div>
                </div>

                <Link
                  to={"/"}
                  className="flex flex-col mt-[25px] py-[18px] text-white px-[20px] text-center font-primary bg-link rounded-md"
                >
                  Go to the hall
                </Link>
              </>
            )}
          </div>
          <div to={""} className="grid grid-cols-12 space-x-2 mt-[20px]">
            {!car.is_premium_announcement && (
              <>
                {/* <Link
                        onClick={handleMoveForward}
                        className="p-[10px] w-full flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md "
                      >
                        <div className="flex flex-col ">
                          <p className="font-primary p-[10px] text-[14px] font-bold leading-10 text-primary">
                            PREMIUM
                          </p>
                   
                        </div>
                        <img
                          className="w-4 h-4"
                          src={arrowIcon}
                          alt="arrowIcon"
                        />
                      </Link> */}
                <Link className="col-span-4">
                  <CreativeButton
                    title="Premium"
                    price="7"
                    icon={
                      <img className="w-4 h-4" src={vipIcon} alt="vipIcon" />
                    }
                  />
                </Link>
                <Link className="col-span-4">
                  <CreativeButton
                    title="Premium"
                    price="7"
                    icon={
                      <img className="w-4 h-4" src={vipIcon} alt="vipIcon" />
                    }
                  />
                </Link>
                <Link className="col-span-4">
                  <CreativeButton
                    title="Premium"
                    price="7"
                    icon={
                      <img className="w-4 h-4" src={vipIcon} alt="vipIcon" />
                    }
                  />
                </Link>
              </>
            )}

            {/* <Link className="p-[10px] w-full md:w-[33%] flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md ">
                    <div className="flex flex-col ">
                      <p className="font-primary text-[14px] font-bold leading-6 text-primary">
                        Move forward
                      </p>
                      <span className="font-primary text-[14px] font-normal text-link leading-6 ">
                        From 3 AZN
                      </span>
                    </div>
                    <img className="w-4 h-4" src={vipIcon} alt="vipIcon" />
                  </Link>
                  <Link className="p-[10px] w-full md:w-[33%] flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md ">
                    <div className="flex flex-col ">
                      <p className="font-primary text-[14px] font-bold leading-6 text-primary">
                        Move forward
                      </p>
                      <span className="font-primary text-[14px] font-normal text-link leading-6 ">
                        From 3 AZN
                      </span>
                    </div>
                    <img
                      className="w-4 h-4"
                      src={premiumIcon}
                      alt="premiumIcon"
                    />
                  </Link> */}
          </div>
        </div>
      </div>
      {/* <RecentAnnouncement carDetail={true} /> */}
    </div>
  );
}

export default DetailsPC;

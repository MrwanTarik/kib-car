import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";

import phoneDetails from "../../../assets/images/phone-details.png";
import vipIcon from "../../../assets/icons/vip-icon.png";

import ProfileCard from "./ProfileCard";
import AttentionNote from "./AttentionNote";
import CarDetailsCom from "./CarDetailsCom";
import CreativeButton from "./CreativeButton";
import SliderMobile from "./SliderMobile";
import { formatPhoneNumber } from "../../../utils/help";
import ReadMore from "../../ReadMore";
import Modal from "../../Modal";
import EditAdForm from "../../EditAdForm";
import DeleteAdForm from "../../DeleteAdForm";
import ForgetPinForm from "../../ForgetPinForm";
function DetailsMobile({
  car,
  showFullSlider,
  setShowFullSlider,
  carImages,
  id,
}) {
  return (
    <div className="relative">
      <button className="fixed h-[48px] justify-center flex items-center gap-x-2 bg-[#3db460] rounded-xl hover:bg-[#269547] w-[calc(100%-32px)] right-4 left-4  bottom-4">
        <img
          className="w-[18px] h-[18px]"
          src={phoneDetails}
          alt="phoneDetails"
        />
        <p className="text-[15px] text-white">Call</p>
      </button>
      <ul className="container flex items-center gap-[10px] py-[8px] font-primary  uppercase text-[14px] text-[#b4b5b9]">
        <li>{car.brand.name}</li> •<li>{car.brand_model.name}</li> •
        <li>{car.brand_model.name}</li>
      </ul>
      {/* fixed while scrolling */}

      <div className="sliderX flex lg:flex-row flex-col  justify-between items-start lg:gap-x-[30px] lg:g-y-0 gap-y-8">
        <div className="w-full">
          <SliderMobile
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
          />
          <div className="container flex flex-col pt-[15px]">
            <h2 className="text-[26px] font-bold leading-8 text-primary ">
              {Number(car.price).toLocaleString()} {car.price_currency}
            </h2>
            <h2 className="text-[#212c3a] text-start text-[20px] leading-6 py-[15px] border-b border-solid border-[#E2E2E2]">
              {car.brand.name} {car.brand_model.name},{" "}
              {car.engine_volume_liters + " L "} , {car.vehicle_year.name} ,{" "}
              {Number(car.mileage).toLocaleString()}{" "}
              {car.mileage_measurement_unit.toUpperCase()}
            </h2>
            <div to={""} className="grid grid-cols-12 space-x-2 my-[15px] ">
              {!car.is_premium_announcement && (
                <>
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
            </div>{" "}
            <CarDetailsCom car={car} />
            {car.additional_information && (
              <ReadMore text={car.additional_information} maxLength={200} />
            )}
            <ProfileCard />
            <div className="flex justify-between items-center  p-[10px] bg-[#f8f9fd] rounded-[7px]">
              <a
                href={`tel:+${
                  car.user
                    ? formatPhoneNumber(car.car_dealership.phone1)
                    : formatPhoneNumber(car.creator.phone)
                }`}
                className={`flex items-center gap-x-[10px]  text-[15px]  text-link`}
              >
                {/* make it red*/}
                <svg
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="-5 -5 29 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                    fill="#4C88F9"
                  />
                </svg>
                {car.user
                  ? formatPhoneNumber(car.car_dealership.phone1)
                  : formatPhoneNumber(car.creator.phone)}
              </a>
              <a className="text-[15px]  text-link underline">Call</a>
              {/* <AttentionNote /> */}
            </div>
            <div className="pb-[15px] border-b border-solid border-[#E2E2E2]">
              <AttentionNote />
            </div>
            <div className="grid grid-cols-12 space-x-1 pt-[15px]">
              <p className="col-span-6 text-[15px] text-[#8d94ad]">
                Announcement number:
              </p>
              <p className="col-span-6 text-[15px] text-[#8d94ad]">{id}</p>
            </div>
            <div className="grid grid-cols-12 space-x-1 pt-[5px]">
              <p className="col-span-6 text-[15px] text-[#8d94ad]">
                Updated At:
              </p>
              <p className="col-span-6 text-[15px] text-[#8d94ad]">
                {car.updated_date}
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMobile;

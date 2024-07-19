import { RedHeartIcon, GrayHeartIcon } from "../components/layout/IconHover";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import complainLogo from "../assets/images/complain.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import coverImg from "../assets/images/cover.jpg";
import sampleOneImg from "../assets/images/sample-1.jpg";
import sampleTwoImg from "../assets/images/sample-2.jpg";
import sampleFourImg from "../assets/images/sample-4.jpg";
import sampleSixImg from "../assets/images/sample-6.jpg";
import brandImg from "../assets/images/brand-img.png";
import phoneDetails from "../assets/images/phone-details.png";
import locationGray from "../assets/icons/location-gray.png";
import clockGray from "../assets/icons/clock-gray.png";
import arrowIcon from "../assets/icons/arrow-icon.png";
import vipIcon from "../assets/icons/vip-icon.png";
import premiumIcon from "../assets/icons/premium-icon.png";
import RecentAnnouncement from "../components/cars/RecentAnnouncement";
import OtpCloseModal from "../assets/icons/close-modal.svg";
import { useNavigate } from "react-router-dom";
import CarSlider from "../components/cars/CarSlider";
import FullscreenMode from "../components/cars/FullscreenMode";

function formatPhoneNumber(phoneNumber) {
  // Remove all non-numeric characters
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // Define the structure
  const structure = ["(", ") ", "-", "-"];

  // Define the pattern
  const pattern = [3, 3, 2, 2];

  let formattedNumber = "";
  let currentIndex = 0;

  // Iterate over the pattern to construct the formatted number
  for (let i = 0; i < pattern.length; i++) {
    formattedNumber +=
      structure[i] + phoneNumber.substr(currentIndex, pattern[i]);
    currentIndex += pattern[i];
  }

  // Return the formatted number, removing leading characters
  return formattedNumber.startsWith("(")
    ? formattedNumber
    : formattedNumber.slice(2);
}

function hideLastTwoDigits(formattedNumber) {
  // Replace the last two digits with bullets
  return formattedNumber.slice(0, -2) + "••";
}

const images = [
  {
    original: coverImg,
    thumbnail: coverImg,
  },
  {
    original: sampleOneImg,
    thumbnail: sampleOneImg,
  },
  {
    original: sampleTwoImg,
    thumbnail: sampleTwoImg,
  },
  {
    original: sampleOneImg,
    thumbnail: sampleOneImg,
  },
  {
    original: sampleFourImg,
    thumbnail: sampleFourImg,
  },
  {
    original: sampleTwoImg,
    thumbnail: sampleTwoImg,
  },
  {
    original: sampleSixImg,
    thumbnail: sampleSixImg,
  },
];
function CarDetails() {
  // slider logic
  const [showFullSlider, setShowFullSlider] = useState(false);
  const { id } = useParams();
  const [correctAd, setCorrectAd] = useState(false);
  const [deleteAd, setDeleteAd] = useState(false);
  const [correctPin, setCorrectPin] = useState("");
  const [deleteAdErrorMsg, setDeleteAdErrorMsg] = useState("");
  const [deletePin, setDeletePin] = useState("");
  const [moveForward, setMoveForward] = useState(false);
  const [forgetPinModal, setForgetPinModal] = useState(false);

  const [iframeSrc, setIframeSrc] = useState(null);
  const [forgetPinIframeSrc, setForgetPinIframeSrc] = useState(null);

  const navigate = useNavigate();

  const handleMoveForward = async () => {
    setMoveForward(true);

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/order/token`,
        {
          email: car.guest_contact.email,
          phone: car.guest_contact.phone,
          announcement_id: id,
          service_id: 1,
        }
      );

      if (response.data.success == true) {
        const resToken = response.data.token;
        setIframeSrc(`https://www.paytr.com/odeme/guvenli/${resToken}`);
      }
    } catch (error) {
      setMoveForward(false);

      console.log(error);
    }
  };

  const handleForgetPin = async () => {
    setForgetPinModal(true);

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/order/token`,
        {
          email: car.creator.email,
          phone: car.creator.phone,
          announcement_id: id,
          service_id: 1,
        }
      );

      if (response.data.success == true) {
        const resToken = response.data.token;
        setForgetPinIframeSrc(
          `https://www.paytr.com/odeme/guvenli/${resToken}`
        );
      }
    } catch (error) {
      setForgetPinModal(false);

      console.log(error);
    }
  };

  const handleCorrectAd = async () => {
    navigate("/");
  };

  const handleDeleteApi = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/delete`,
        {
          pin_code: deletePin,
        }
      );

      if (response.data.success == true) {
        navigate("/");
        setDeleteAd(false);
      } else {
        setDeleteAdErrorMsg("Wrong PIN Code!");
      }
    } catch (error) {
      setDeleteAd(true);

      console.log(error);
    }
  };
  const handleDeleteAd = async () => {
    setDeleteAd(true);
  };
  const handleCloseCorrectAd = () => {
    setCorrectAd(false);
  };
  const handleCloseDeleteAd = () => {
    setDeleteAd(false);
  };
  const handleCorrectPinChange = (e) => {
    setCorrectPin(e.target.value);
  };
  const handleDeletePinChange = (e) => {
    setDeletePin(e.target.value);
  };
  const handleMoveClose = () => {
    setMoveForward(false);
  };

  const handleCloseForgetPin = () => {
    setForgetPinModal(false);
  };

  const [car, setCar] = useState(null);
  const [carImages, setCarImages] = useState([]);
  useEffect(() => {
    async function getCar() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/${id}`
        );
        setCar(response.data.data);
        const featuredImagesArr = [
          {
            original: response.data.data.vehicle_front_view_image,
            thumbnail: response.data.data.vehicle_front_view_image,
          },
          {
            original: response.data.data.vehicle_front_panel_image,
            thumbnail: response.data.data.vehicle_front_panel_image,
          },
          {
            original: response.data.data.vehicle_back_view_image,
            thumbnail: response.data.data.vehicle_back_view_image,
          },
        ];

        const ImagesArr = response.data.data.images.map(function (img) {
          return {
            original: img.url,
            thumbnail: img.url,
          };
        });

        setCarImages([...featuredImagesArr, ...ImagesArr]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCar();
  }, [id]);
  const [heart, setHeart] = useState(false);
  const [complain, setComplain] = useState(false);
  const [number, setNumber] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbarContainer = document.querySelector(".navigation-container");

      if (window.scrollY > 10) {
        navbarContainer.classList.add("fixed-nav-container");
      } else {
        navbarContainer.classList.remove("fixed-nav-container");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (car) {
    return (
      <>
        <div
          className={`absolute inset-0 bg-black z-[2]  ${
            correctAd || deleteAd || moveForward
              ? "bg-opacity-25  visible z-[2]"
              : "invisible  bg-opacity-0 -z-10"
          }`}
        ></div>
        <div className=" pb-[30px] ">
          <div
            className={`fixed  top-0 left-0 right-0 bottom-0 h-[250px] m-auto bg-white rounded-lg shadow-lg  w-full max-w-[450px] ${
              correctAd
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
              <p className="font-primary font-medium text-[14px] text-center text-white">
                Confirm your identity
              </p>
              <img
                onClick={handleCloseCorrectAd}
                className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
                src={OtpCloseModal}
                alt="handleCloseCorrectAd"
              />
            </div>
            <div className="px-[20px]">
              <div className="py-[20px]">
                <p className="text-[#6B6B6B] text-[14px]">
                  Enter your PIN to continue.
                </p>
                <p className="text-[#6B6B6B] text-[14px]">
                  You can get the OTP code from the letter sent to you on gmail
                </p>
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[14px] mb-[15px]">Ad PIN:</p>
              </div>
              <div className="flex gap-x-[20px]">
                <input
                  type="text"
                  name="pin"
                  value={correctPin}
                  onChange={handleCorrectPinChange}
                  className="px-4 py-[12px] border rounded w-full"
                  placeholder="Enter PIN"
                />
                <button className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md ">
                  Submit PIN
                </button>
              </div>
            </div>
          </div>
          <div
            className={`fixed  top-0 left-0 right-0 bottom-0 h-[250px] m-auto bg-white rounded-lg shadow-lg  w-full max-w-[450px] ${
              deleteAd
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
              <p className="font-primary font-medium text-[14px] text-center text-white">
                Confirm your identity
              </p>
              <img
                onClick={handleCloseDeleteAd}
                className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
                src={OtpCloseModal}
                alt="handleCloseDeleteAd"
              />
            </div>
            <div className="px-[20px]">
              <div className="py-[20px]">
                <p className="text-[#6B6B6B] text-[14px]">
                  Enter your Announcement PIN to continue.
                </p>
                <p className="text-[#6B6B6B] text-[14px]">
                  {/* You can get the OTP code from the letter sent to you on gmail */}
                </p>

                <p className="error text-red"> {deleteAdErrorMsg} </p>
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[14px] mb-[15px]">
                  Announcement PIN:
                </p>
              </div>
              <div className="flex gap-x-[20px]">
                <input
                  type="text"
                  name="pin"
                  value={deletePin}
                  onChange={handleDeletePinChange}
                  className="px-4 py-[12px] border rounded w-full"
                  placeholder="Enter PIN"
                />
                <button
                  onClick={handleDeleteApi}
                  className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md "
                >
                  Delete PIN
                </button>
              </div>
            </div>
          </div>

          <div
            className={` bg-white rounded-lg  h-[600px] w-full max-w-[600px] fixed  top-0 left-0 right-0 bottom-0 m-auto   ${
              moveForward
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            {" "}
            {/* Modal content with higher z-index */}
            {iframeSrc ? (
              <iframe
                className="!overflow-auto !w-full !h-[calc(100%-60px)]"
                src={iframeSrc}
                id="paytriframe"
                frameBorder="0"
                scrolling="no"
                style={{ width: "100%", height: "100%", overflowY: "auto" }}
              ></iframe>
            ) : (
              ""
            )}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleMoveClose}
                className="px-4 py-[12px]  font-bold text-white bg-red rounded-md"
              >
                Close
              </button>
            </div>
          </div>

          <div
            className={` bg-white rounded-lg  h-[600px] w-full max-w-[600px] fixed  top-0 left-0 right-0 bottom-0 m-auto   ${
              forgetPinModal
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            {" "}
            {/* Modal content with higher z-index */}
            {forgetPinIframeSrc ? (
              <iframe
                className="!overflow-auto !w-full !h-[calc(100%-60px)]"
                src={forgetPinIframeSrc}
                id="paytriframe"
                frameBorder="0"
                scrolling="no"
                style={{ width: "100%", height: "100%", overflowY: "auto" }}
              ></iframe>
            ) : (
              ""
            )}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCloseForgetPin}
                className="px-4 py-[12px]  font-bold text-white bg-red rounded-md"
              >
                Close
              </button>
            </div>
          </div>

          <div className="fix"></div>
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
                        stroke-width="1.5"
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
                <ul className="mt-[65px] pt-[20px] pb-[20px] picture-list pl-[20px] border-b border-solid border-[#E2E2E2]">
                  <li>Updated: {car.updated_date}</li>
                </ul>
                <div className="grid grid-cols-12 pb-[30px] border-b border-solid border-[#E2E2E2]">
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[6px] mr-[20px]">
                      <p className="font-primary text-[14px] text-secondary">
                        City
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Brand
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Model
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Model Year
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Ban type
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Color
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Engine
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        March
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[6px] mr-[20px]">
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.city.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.brand.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.brand_model.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.vehicle_year?.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.vehicle_category?.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.vehicle_color.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {/* 2.3 L/130 hp/Diesel */}
                        {car.engine_volume_liters +
                          " L / " +
                          car.fuel_type.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {Number(car.mileage_in_km).toLocaleString()} km
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[6px] mr-[20px]">
                      <p className="font-primary text-[14px] text-secondary">
                        Gear Box
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Gear
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        New
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Number of seats
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Owners
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        Situation
                      </p>
                      <p className="font-primary text-[14px] text-secondary">
                        For which market it is assembled
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[6px] mr-[20px]">
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.vehicle_transmission.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.gear.name}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.vehicle_status == "USED" ? "No" : "Yes"}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.number_of_seats}
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        1
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        There is no stroke, it is not painted
                      </p>
                      <p className="font-primary text-[14px] text-[#212c3a]">
                        {car.vehicle_market.name}
                      </p>
                    </div>
                  </div>
                </div>
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
                      <Link
                        // onClick={handleCorrectAd}
                        to={`/edit-advertisement/${id}`}
                        className="font-primary text-[14px] underline text-[#212c3a] hover:text-link"
                      >
                        Correct it
                      </Link>
                      <Link
                        onClick={handleDeleteAd}
                        className="font-primary text-[14px] underline text-[#212c3a] hover:text-link"
                      >
                        Delete Announcement
                      </Link>
                      <Link
                        onClick={handleForgetPin}
                        className="font-primary text-[14px] underline text-[#212c3a] hover:text-link"
                      >
                        Forget pin
                      </Link>
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
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#eaebf2]">
                    <div>
                      <p>Ruslan</p>
                      <p className="text-secondary text-[14px]">Ganja</p>
                    </div>
                    <div className="mb-4">
                      <svg
                        width="50"
                        height="50"
                        fill="none"
                        className="border border-[#d8d8d8] bg-[#d8d8d8] rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25 0C11.194 0 0 11.193 0 25s11.193 25 25 25c13.808 0 25-11.193 25-25S38.808 0 25 0zm0 7.476a8.27 8.27 0 110 16.539 8.27 8.27 0 010-16.54zM13.047 39.058a18.347 18.347 0 0011.947 4.406 18.34 18.34 0 0011.95-4.407 3.516 3.516 0 001.235-2.678c0-4.63-3.734-8.337-8.367-8.337H20.19c-4.632 0-8.38 3.706-8.38 8.337 0 1.03.453 2.01 1.237 2.679z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
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
                        : hideLastTwoDigits(
                            formatPhoneNumber(car.creator.phone)
                          )}
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                          fill="#CA1016"
                        />
                      </svg>
                      {car.user
                        ? formatPhoneNumber(car.car_dealership.phone1)
                        : formatPhoneNumber(car.creator.phone)}
                    </a>
                    <div className="flex items-center gap-x-[5px] mt-[15px] p-[20px] bg-[#ffe6e5] border border-[#ff586d] rounded-lg text-[14px] leading-[17px]">
                      <div>
                        <svg
                          width="34"
                          height="32"
                          fill="none"
                          viewBox="-5 -5 34 32"
                          x="261"
                          y="338"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.634 16.995L13.973 2.287A2.518 2.518 0 0011.769 1c-.916 0-1.74.477-2.217 1.3L1.366 16.995a2.694 2.694 0 00-.026 2.665c.464.836 1.302 1.34 2.243 1.34h16.834c.94 0 1.779-.504 2.243-1.34a2.694 2.694 0 00-.026-2.665z"
                            stroke="#FF586D"
                          />
                          <path
                            d="M13 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"
                            fill="#FF586D"
                          />
                          <path
                            d="M12 13.801v-8"
                            stroke="#FF586D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p>
                        <span className="text-[#ff586d]">Diqqət!</span>{" "}
                        Avtomobilə baxış keçirmədən öncə beh göndərməyin.
                      </p>
                    </div>
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
                          <img
                            className="w-6 h-6"
                            src={clockGray}
                            alt="clockGray"
                          />
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
                <div
                  to={""}
                  className="flex md:flex-row flex-col md:gap-x-[10px] mt-[20px]"
                >
                  {!car.is_premium_announcement && (
                    <Link
                      onClick={handleMoveForward}
                      className="p-[10px] w-full flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md "
                    >
                      <div className="flex flex-col ">
                        <p className="font-primary p-[10px] text-[14px] font-bold leading-10 text-primary">
                          PREMIUM
                        </p>
                        {/* <span className="font-primary text-[14px] font-normal text-link leading-6 ">
                        From 3 AZN
                      </span> */}
                      </div>
                      <img
                        className="w-4 h-4"
                        src={arrowIcon}
                        alt="arrowIcon"
                      />
                    </Link>
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
        </div>
      </>
    );
  }
}

export default CarDetails;

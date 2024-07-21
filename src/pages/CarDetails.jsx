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
import CarSlider from "../components/cars/CarDetails/CarSlider";
import FullscreenMode from "../components/cars/CarDetails/FullscreenMode";
import ProfileCard from "../components/cars/CarDetails/ProfileCard";
import AttentionNote from "../components/cars/CarDetails/AttentionNote";
import CarDetailsCom from "../components/cars/CarDetails/CarDetailsCom";
import SliderMobile from "../components/cars/CarDetails/SliderMobile";
import CreativeButton from "../components/cars/CarDetails/CreativeButton";
import DetailsPC from "../components/cars/CarDetails/DetailsPC";
import DetailsMobile from "../components/cars/CarDetails/DetailsMobile";

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
  const [width] = useState(window.innerWidth);

  const showMobileCom = width < 971;
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
          {showMobileCom ? (
            <DetailsMobile
              car={car}
              showFullSlider={showFullSlider}
              setShowFullSlider={setShowFullSlider}
              carImages={carImages}
              id={id}
              handleDeleteAd={handleDeleteAd}
              handleForgetPin={handleForgetPin}
            />
          ) : (
            <DetailsPC
              car={car}
              showFullSlider={showFullSlider}
              setShowFullSlider={setShowFullSlider}
              carImages={carImages}
              id={id}
              handleDeleteAd={handleDeleteAd}
              handleForgetPin={handleForgetPin}
            />
          )}
        </div>
      </>
    );
  }
}

export default CarDetails;

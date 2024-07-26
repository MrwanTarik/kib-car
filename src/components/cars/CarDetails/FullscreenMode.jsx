import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarSlider.module.css";
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={`${styles.topArrow} ${styles.prevArrow}`}
      onClick={onClick} // Prop for handling click events
    />
  );
};

// Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className={`${styles.topArrow} ${styles.nextArrow}`}
      onClick={onClick} // Prop for handling click events
    />
  );
};

function FullscreenMode({ showFullSlider, setShowFullSlider, carImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    customPaging: function (i) {
      return (
        <a className="w-[70px] h-[50px] block mt-2">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-[4px]"
            style={{ backgroundImage: `url(${carImages[i].original})` }}
          ></div>
          <div
            onMouseMove={() => handleMouseEnter(i)}
            className="absolute top-0 left-0 w-[70px] h-[50px] mt-2 rounded-[4px] hover:bg-none bg-[linear-gradient(0deg,rgba(255,255,255,0.25),rgba(255,255,255,0.25))]"
          ></div>
        </a>
      );
    },
    dots: true,
    initialSlide: showFullSlider,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setCurrentSlide,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  useEffect(() => {
    if (showFullSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFullSlider]);
  useEffect(() => {
    setCurrentSlide(showFullSlider);
  }, []);
  const handleMouseEnter = (index) => {
    if (index !== currentSlide) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 overflow-hidden">
      <nav className="flex justify-between items-center h-[60px] font-medium text-base leading-5 text-white px-7 bg-white bg-opacity-10">
        <div className="flex items-center">
          <p className="pr-5 border-r border-r-[rgba(255,255,255,0.25)]">
            Hyundai Santa Fe
          </p>
          <p className="pl-5">30 600 AZN</p>
        </div>
        <ul className="flex items-center gap-x-10">
          <li className="flex justify-center items-center gap-x-2 w-[220px] h-10 leading-10 text-base bg-[#3db460] rounded-md text-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#269547]">
            <svg
              width="29"
              height="28"
              fill="none"
              viewBox="-5 -5 29 28"
              x="388"
              y="413"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                fill="#fff"
              />
            </svg>
            <a href="#">Nömrəni göstər</a>
          </li>
          <li className="group flex items-center gap-x-2 cursor-pointer">
            <svg
              width="32"
              height="30"
              fill="none"
              viewBox="-5 -5 32 30"
              x="64"
              y="413"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-rose-600"
              stroke="#fff"
            >
              <path
                d="M17.725 2.193a5.204 5.204 0 00-2.593-.693c-1.66 0-3.148.785-4.13 2.016C10.015 2.286 8.529 1.5 6.866 1.5c-.94 0-1.82.253-2.591.693C2.62 3.143 1.5 4.97 1.5 7.07c0 .601.094 1.178.265 1.717.921 4.296 9.237 9.713 9.237 9.713s8.31-5.417 9.232-9.713c.17-.539.266-1.116.266-1.717 0-2.099-1.12-3.926-2.775-4.877z"
                strokeWidth="1.5"
              />
            </svg>
            <Link to="#" className="underline font-bold">
              Seçilmişlərdə saxla
            </Link>
          </li>
          <li className="hover:bg-[#FFFFFF26] rounded-lg">
            <button onClick={() => setShowFullSlider(null)}>
              <svg
                width="35"
                height="36"
                fill="none"
                viewBox="-5 -5 35 36"
                x="420"
                y="239"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.51 6.99L6.49 19.01M18.51 19.01L6.49 6.99"
                  stroke="#fff"
                  strokeWidth="1.7"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      {/* Slider */}
      <div className={`${styles["slider-container"]} relative full-slider`}>
        <Slider {...settings} ref={sliderRef}>
          {carImages.map((item, index) => (
            <div
              className="relative p-4 text-center h-[calc(100vh-120px)]"
              key={index}
            >
              <div className="flex justify-center absolute top-0 h-full left-0 w-full z-10 ">
                <img src={item.original} />
              </div>
              <div
                className="absolute top-0 left-0 w-full h-full  bg-cover bg-center bg-no-repeat blur-2xl  z-0"
                style={{ backgroundImage: `url(${item.original})` }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className={`${styles.counter}`}>
          {/* Display the slide counter */}
          {currentSlide + 1} / {carImages.length}
        </div>
      </div>
    </div>
  );
}

export default FullscreenMode;

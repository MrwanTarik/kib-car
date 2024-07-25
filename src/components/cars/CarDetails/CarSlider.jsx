import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
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
function CarSlider({ carImages, showFullSlider, setShowFullSlider }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    customPaging: function (i) {
      if (i < 8)
        return (
          <a className="w-[70px] h-[50px] block mt-2">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-[4px]"
              style={{ backgroundImage: `url(${carImages[i].original})` }}
            ></div>
            {i === 7 ? (
              <div
                onMouseMove={() => handleMouseEnter(i)}
                onClick={() => setShowFullSlider(true)}
                className="flex items-center rounded-[4px] justify-center absolute top-0 left-0 w-[70px] h-[50px] mt-2  bg-[linear-gradient(0deg,rgba(0,0,0,0.51),rgba(0,0,0,0.51))]"
              >
                <p className="text-[10px] text-white">{`+${carImages.length} pictures`}</p>
              </div>
            ) : (
              <div
                onMouseMove={() => handleMouseEnter(i)}
                className="absolute top-0 left-0 w-[70px] h-[50px] mt-2 rounded-[4px] hover:bg-none bg-[linear-gradient(0deg,rgba(255,255,255,0.25),rgba(255,255,255,0.25))]"
              ></div>
            )}
          </a>
        );
      return <></>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb relative top-0",
    infinite: true,
    arrows: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setCurrentSlide,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const handleMouseEnter = (index) => {
    if (index !== currentSlide) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className={`${styles["slider-container"]} relative small-slider`}>
      <Slider {...settings} ref={sliderRef}>
        {carImages.map((item, index) => (
          <div className="relative h-[480px] p-4 text-center" key={index}>
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
      <div
        onClick={() => setShowFullSlider(!showFullSlider)}
        className={`${styles.topZoom}`}
      ></div>
    </div>
  );
}

export default CarSlider;

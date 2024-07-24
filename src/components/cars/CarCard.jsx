import barter from "../../assets/icons/barter.png";
import { useEffect, useState } from "react";
import { RedHeartIcon, GrayHeartIcon } from "../layout/IconHover";
import { Link } from "react-router-dom";
import premiumImage from "../../assets/icons/premium.png";
function CarCard({
  fakeRender,
  car: {
    key,
    id,
    price,
    price_currency,
    brand,
    brand_model,
    vehicle_year,
    mileage,
    engine_power,
    date,
    vehicle_front_view_image,
    vehicle_category,
    engine_volume_liters,
    city,
    published_at,
    car_dealership,
    loan,
    barter,
  },
}) {
  const [heart, setHeart] = useState(false);

  function saveCarData(carData) {
    // Retrieve existing data from localStorage
    const existingData = localStorage.getItem("carDataList");
    let carDataList = existingData ? JSON.parse(existingData) : [];

    // Push the new car data into the array
    carDataList.push(carData);

    // Save the updated array back to localStorage
    localStorage.setItem("carDataList", JSON.stringify(carDataList));
  }
  function removeCarData(carId) {
    // Retrieve the existing data from localStorage
    const existingData = localStorage.getItem("carDataList");
    let carDataList = existingData ? JSON.parse(existingData) : [];

    // Filter out the car data with the specified id
    carDataList = carDataList.filter((car) => car.id !== carId);

    // Save the updated array back to localStorage
    localStorage.setItem("carDataList", JSON.stringify(carDataList));
  }
  function checkCarDataAndAct(carId, actionCallback) {
    // Retrieve data from localStorage
    const data = localStorage.getItem("carDataList");
    const carDataList = data ? JSON.parse(data) : [];

    // Find the car data with the specified id
    const foundCar = carDataList.find((car) => car.id === carId);

    if (foundCar) {
      actionCallback(foundCar); // Perform the callback action with the found car data
    }
  }
  function handleXD(e) {
    e.preventDefault();
    // check if save or remove the car data from fav

    const carData = {
      id,
      price,
      price_currency,
      brand,
      brand_model,
      vehicle_year,
      mileage,
      engine_power,
      date,
      vehicle_front_view_image,
      vehicle_category,
      engine_volume_liters,
      city,
      published_at,
      car_dealership,
      loan,
      barter,
    };
    if (heart) {
      removeCarData(id);
      setHeart(false);
      fakeRender?.((fakeRender) => !fakeRender);
    } else {
      saveCarData(carData);
      setHeart(true);
      fakeRender?.((fakeRender) => !fakeRender);
    }
  }
  useEffect(() => {
    checkCarDataAndAct(id, () => setHeart(true));
  }, []);
  return (
    <Link
      to={`/car-details/${id}`}
      id={id}
      className="col-span-6 xl:col-span-3 lg:col-span-4 md:col-span-6"
    >
      <div className="flex-col bg-white rounded-t-[12px] shadow-md relative">
        <div className="absolute bottom-[10px] left-[10px] top-[10px] right-[10px] flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex items-center space-x-[5px]">
              {loan === 1 && (
                <div className="rounded-full bg-[#76c81c] w-[18px] h-[18px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="-5 -5 29 25"
                    x="420"
                    y="275"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5.875c-3.644 0-6.625 2.98-6.625 6.625H.667l3.312 4.417L7.29 7.5H5.08A4.4 4.4 0 019.5 3.083V.875zm5.52 2.208L11.71 7.5h2.21a4.4 4.4 0 01-4.42 4.417v2.208c3.644 0 6.625-2.98 6.625-6.625h2.208L15.02 3.083z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {barter === 1 && (
                <div className="rounded-full bg-[#f5a623] w-[18px] h-[18px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="-5 -5 26 25"
                    x="279"
                    y="312"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.962 5.28c.273-.272.41-.6.41-.988a1.35 1.35 0 00-.41-.99 1.347 1.347 0 00-.988-.407c-.387 0-.717.136-.99.408a1.35 1.35 0 00-.408.99c0 .386.136.715.41.988.27.273.6.41.988.41.386 0 .716-.137.988-.41zM6.29 6.605a3.146 3.146 0 01-2.316.958 3.15 3.15 0 01-2.312-.958 3.15 3.15 0 01-.958-2.312c0-.902.32-1.673.958-2.312a3.15 3.15 0 012.312-.958c.902 0 1.672.32 2.31.958.64.64.96 1.41.96 2.312 0 .902-.32 1.673-.954 2.312zm7.215 3.098a1.347 1.347 0 00-.988-.41 1.35 1.35 0 00-.99.41 1.347 1.347 0 00-.408.988c0 .387.135.717.408.99.272.272.602.408.99.408.385 0 .715-.136.987-.41.273-.27.41-.6.41-.988 0-.386-.137-.716-.41-.988zm1.323 3.3a3.15 3.15 0 01-2.31.958 3.15 3.15 0 01-2.313-.958 3.15 3.15 0 01-.958-2.312c0-.908.32-1.68.958-2.315a3.157 3.157 0 012.312-.954c.902 0 1.672.32 2.31.96.64.638.96 1.408.96 2.31a3.15 3.15 0 01-.96 2.312zM11.118.962h1.337l-7.1 13.077H3.99L11.12.96z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <button onClick={handleXD}>
              {!heart ? (
                <svg
                  width="30"
                  height="27"
                  viewBox="-5 -5 30 27"
                  x="389"
                  y="338"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.35.766a4.89 4.89 0 014.212 2.373 4.715 4.715 0 01.432 3.906c-.83 3.651-7.302 7.975-8.993 9.052-1.692-1.077-8.168-5.4-8.975-8.978a4.86 4.86 0 01-.26-1.549c0-.888.245-1.719.672-2.432a4.877 4.877 0 011.848-1.772 4.94 4.94 0 012.362-.6 4.917 4.917 0 014.356 2.615 4.88 4.88 0 01.584-.872A4.901 4.901 0 0114.349.766z"
                    fill="#212C3A"
                    fillRule="nonzero"
                    stroke="#FFF"
                    strokeWidth="1.531"
                    fillOpacity=".297"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="27"
                  viewBox="-5 -5 30 27"
                  x="359"
                  y="338"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.35.766a4.89 4.89 0 014.212 2.373 4.715 4.715 0 01.432 3.906c-.83 3.651-7.302 7.975-8.993 9.052-1.692-1.077-8.168-5.4-8.975-8.978a4.86 4.86 0 01-.26-1.549c0-.888.245-1.719.672-2.432a4.877 4.877 0 011.848-1.772 4.94 4.94 0 012.362-.6 4.917 4.917 0 014.356 2.615 4.88 4.88 0 01.584-.872A4.901 4.901 0 0114.349.766z"
                    fill="#FF3C00"
                    fillRule="nonzero"
                    stroke="#FFF"
                    strokeWidth="1.531"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            {car_dealership ? (
              <span className="py-[2px] px-[5px] bg-[#3B8BF2] text-[10px] text-white rounded-md">
                Salons
              </span>
            ) : (
              <span></span>
            )}

            <div className="bg-white rounded-md flex items-center">
              <svg
                width="20"
                height="18"
                fill="none"
                viewBox="-5 -5 25 24"
                x="359"
                y="312"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.56 5.7L7.5.5 4.44 5.7 0 3.1l1.875 7.15v3.25h11.25v-3.25L15 3.1l-4.44 2.6z"
                  fill="#FF9F2B"
                />
              </svg>
              <svg
                viewBox="-5 -5 27 23"
                width="20"
                height="18"
                x="214"
                y="196"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M4.779 1.857h6.691v6.5H4.779z" />
                  <path
                    fill="#FF4F08"
                    d="M12.241 0l3.936 4.643L8.305 13 .433 4.643 4.37 0h7.872zM9.577 2.676l-1.233 3.96-1.184-3.96-1.61.002 2.116 5.351 1.275-.002 2.12-5.35H9.576z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[145px] ">
          <img
            className="h-full w-full rounded-t-[12px] object-cover"
            src={vehicle_front_view_image}
            alt="carImage"
          />
        </div>
      </div>
      <div className="p-[10px] rounded-b-[12px] bg-white shadow-md">
        <h2 className="text-[15px] font-bold text-primary leading-[17px] mb-[2px] overflow-hidden whitespace-nowrap overflow-ellipsis">
          {` ${Number(price).toLocaleString()} - ${price_currency}`}
        </h2>
        <p className="text-primary text-[14px] leading-[17px] mb-[2px] overflow-hidden whitespace-nowrap overflow-ellipsis">
          {`${brand.name} - ${brand_model.name}`}
        </p>

        <p className="text-[14px]  text-primary leading-[17px] mb-[2px] overflow-hidden whitespace-nowrap overflow-ellipsis">
          {`${vehicle_year.name}, ${engine_volume_liters} L, ${mileage} km`}{" "}
        </p>

        <p className="text-secondary font-normal !text-[12px] leading-[17px] overflow-hidden whitespace-nowrap overflow-ellipsis">{`${published_at} , ${city?.name}`}</p>
      </div>
    </Link>
  );
}

export default CarCard;

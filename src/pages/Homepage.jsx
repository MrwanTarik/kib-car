import axios from "axios";
import { useState, useEffect } from "react";
import Brand from "../components/filters/Brand";
import City from "../components/filters/City";
import Model from "../components/filters/Model";
import Type from "../components/filters/Type";
import Price from "../components/filters/Price";
import PaymentCurrency from "../components/filters/PaymentCurrency";
import PaymentType from "../components/filters/PaymentType";
import { Link } from "react-router-dom";
import BanType from "../components/filters/BanType";
import YearManufacturer from "../components/filters/YearManufacturer";
import MaxYearManufacturer from "../components/filters/MaxYearManufacturer";
import Color from "../components/filters/Color";
import FuelType from "../components/filters/FuelType";
import Gear from "../components/filters/Gear";
import GearBox from "../components/filters/GearBox";
import VolumeMin from "../components/filters/VolumeMin";
import VolumeMax from "../components/filters/VolumeMax";
import chevronTop from "../assets/icons/chivron-top.svg";
import chivronBottom from "../assets/icons/chivron-bottom.svg";
import notifiedIcon from "../assets/icons/notify-icon.svg";
import Power from "../components/filters/Power";
import Mileage from "../components/filters/Mileage";
import CarType from "../components/filters/CarType";
import OwnersNumber from "../components/filters/OwnersNumber";
import SeatsNumber from "../components/filters/SeatsNumber";
import Market from "../components/filters/Market";
import { useContext } from "react";
import FilterContext from "../context/filterContext/FilterContext";
import VipAnnouncement from "../components/cars/VipAnnouncement";
import RecentAnnouncement from "../components/cars/RecentAnnouncement";
import PremiumAds from "../components/cars/PremiumAds";
import VehicleFeatures from "../components/cars/VehicleFeatures";
import NoAds from "../components/NoAds";
import Spinner from "../components/Spinner";
import AnimatedButtonWrapper from "../components/AnimatedButtonWrapper";

function Homepage() {
  const [width] = useState(window.innerWidth);
  const hideMoreMobile = width < 971;
  const [isLoading, setIsLoading] = useState(false);
  const [premiumAds, setPremiumAds] = useState([]);
  const [ads, setAds] = useState([]);
  const [adsCount, setAdsCount] = useState(0);

  const { newAds, moreFilters, handleMoreFilters, setPaymentOptions } =
    useContext(FilterContext);
  const { resetFilters } = useContext(FilterContext);
  const [key, setKey] = useState(0);

  const filterContextData = useContext(FilterContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          // Click was outside the dropdown, close it
          dropdown.open = false;
        }
      });
    };

    window.addEventListener("click", handleClickOutside);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    async function getAds() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/filter`
        );
        setPremiumAds(response.data.premiumAnnouncements);
        setAds(response.data.announcements);
        setAdsCount(
          response.data.announcementsCount +
            response.data.premiumAnnouncementsCount
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getAds();
  }, [key]);

  const showFilterPayload = async () => {
    try {
      const data = {
        barter: filterContextData.paymentOptions.barter,
        brand: filterContextData.brandId?.brand,
        min_price: filterContextData.minPrice,
        max_price: filterContextData.maxPrice,
        brand_model: filterContextData.checkedModelsIds,
        city: filterContextData.checkedCityIds, // Todo: Uncomment or remove this line based on your requirement
        fuel_type: filterContextData.checkedFuelTypeIds,
        is_crashed: filterContextData.paymentOptions.noPunctuation
          ? !filterContextData.paymentOptions.noPunctuation
          : null,
        is_painted: filterContextData.paymentOptions.notColored
          ? !filterContextData.paymentOptions.notColored
          : null,
        for_spare_parts: filterContextData.paymentOptions.accidentalCars,
        gear: filterContextData.checkedGearIds,
        loan: filterContextData.paymentOptions.credit,
        max_engine_power: filterContextData.maxPower,
        min_engine_power: filterContextData.minPower,
        max_mileage: filterContextData.maxMileage,
        min_mileage: filterContextData.minMileage,
        max_vehicle_engine_volume: filterContextData.selectedVolumeMax,
        min_vehicle_engine_volume: filterContextData.selectedVolumeMin,
        max_vehicle_year: filterContextData.selectedMaxYearManufactured,
        min_vehicle_year: filterContextData.selectedYearManufactured,
        number_of_seats: filterContextData.checkedSeatsNumberIds,
        price_currency: filterContextData.selectedCurrency,
        vehicle_category: filterContextData.checkedBanTypeIds,
        vehicle_color: filterContextData.checkedColorIds,
        vehicle_market: filterContextData.checkedMarketAssembledIds,
        vehicle_prior_owner: filterContextData.checkedOwnersNumberIds,
        vehicle_status: filterContextData.selectedType,
        vehicle_transmission: filterContextData.checkedGearBoxIds,
        ownership_type: filterContextData.selectedCarType,
        features: filterContextData.featuresIds,
      };

      const config = {
        method: "GET",
        url: `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/filter`,
        params: data,
      };

      axios(config)
        .then(function (response) {
          setPremiumAds(response.data.premiumAnnouncements);
          setAds(response.data.announcements);
          setAdsCount(
            response.data.announcementsCount +
              response.data.premiumAnnouncementsCount
          );
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  function handleResetForm() {
    resetFilters();
    setKey((prevKey) => prevKey + 1);
  }
  return (
    <main key={key} className="flex-1">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="py-[30px] bg-[#EBEDF3]"
      >
        <div className="container">
          <div className="grid grid-cols-12  gap-[10px] ">
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <Brand />
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]`}
            >
              <Model />
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px] ${
                hideMoreMobile && !moreFilters ? "hidden" : ""
              }`}
            >
              <Type />
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px] ${
                hideMoreMobile && !moreFilters ? "hidden" : ""
              }`}
            >
              <City />
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px] ${
                hideMoreMobile && !moreFilters ? "hidden" : ""
              }`}
            >
              <Price />
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px] ${
                hideMoreMobile && !moreFilters ? "hidden" : ""
              }`}
            >
              <div className="flex justify-between h-full ">
                <PaymentCurrency />
                <PaymentType
                  label="Credit"
                  type="credit"
                  name="paymentType"
                  setPaymentOptions={setPaymentOptions}
                />
                <PaymentType
                  label="Barter"
                  type="barter"
                  name="paymentType"
                  setPaymentOptions={setPaymentOptions}
                />
              </div>
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px] ${
                hideMoreMobile && !moreFilters ? "hidden" : ""
              }`}
            >
              <BanType />
            </div>
            <div
              className={`xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px] ${
                hideMoreMobile && !moreFilters ? "hidden" : ""
              }`}
            >
              <div className="flex justify-between h-full gap-3">
                <div className="flex-1">
                  <YearManufacturer />
                </div>
                <div className="flex-1">
                  <MaxYearManufacturer />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`grid grid-cols-12 gap-[10px] mt-[10px]  ${
              moreFilters ? " transition-all grid" : "hidden"
            }`}
          >
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <Color />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <FuelType />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <Gear />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <GearBox />
            </div>
            <div className="xl:col-span-3 md:col-span-6 col-span-12 h-[48px]">
              <VolumeMin />
              {/* <div className="flex justify-between h-full gap-6">
                <div className="flex-1">
                  <VolumeMin />
                </div>
                <div className="flex-1">
                  <VolumeMax />
                </div>
              </div> */}
            </div>
            <div className="xl:col-span-3 md:col-span-6 col-span-12 h-[48px]">
              <VolumeMax />
            </div>
            <div className="xl:col-span-3 md:col-span-6 col-span-12 h-[48px]">
              <Power />
            </div>
            <div className="xl:col-span-3 md:col-span-6 col-span-12 h-[48px]">
              <Mileage />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <CarType />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <OwnersNumber />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <SeatsNumber />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <Market />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <PaymentType
                label="There is no punctuation"
                type="noPunctuation"
                name="noPunctuation"
                setPaymentOptions={setPaymentOptions}
              />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <PaymentType
                label="Not colored"
                type="notColored"
                name="notColored"
                setPaymentOptions={setPaymentOptions}
              />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[48px]">
              <PaymentType
                label="Accidental cars only"
                type="accidentalCars"
                name="accidentalCars"
                setPaymentOptions={setPaymentOptions}
              />
            </div>

            <div className="col-span-12 mt-12">
              <div className="flex items-center justify-between">
                <span className="font-primary text-primary text-[14px] inline-block min-w-[130px]">
                  Vehicle supply
                </span>
                <hr className="h-[1px] w-full bg-[#e2e2e2]" />
              </div>
            </div>
            <div className="col-span-12 items-center flex flex-wrap gap-[10px]">
              <VehicleFeatures />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12  mt-[20px] ">
              <div className="flex flex-wrap items-center justify-between md:flex-nowrap md:gy-0 ">
                <span className="font-primary text-primary text-[14px] inline-block ">
                  <h2 className="flex items-center font-normal text-primary text-[14px] md:text-[14px] font-primary">
                    Today :{" "}
                    <Link className="ml-1 font-primary font-normal text-link">
                      {adsCount} Ads
                    </Link>
                  </h2>
                </span>
                <div className="flex flex-wrap items-center md:flex-nowrap md:gy-0 gap-y-4 ">
                  <div className="flex items-center">
                    <button
                      onClick={handleResetForm}
                      className="font-primary text-[14px] font-normal mr-7 text-[#8D94AD]"
                    >
                      Rest
                    </button>
                    <button
                      onClick={handleMoreFilters}
                      className="text-red hover:text:[#882111] font-primary text-[14px] font-normal flex items-center"
                    >
                      {moreFilters ? "Hide" : `More Filters `}
                      <img
                        className="ml-[10px]"
                        src={moreFilters ? chevronTop : chivronBottom}
                        alt="chevron top"
                      />
                    </button>
                  </div>
                  <div>
                    <AnimatedButtonWrapper>
                      <button
                        onClick={showFilterPayload}
                        className="text-white rounded-lg shadow-lg bg-red hover:bg-[#882111] shadow-none hover:shadow-none py-[14px] px-[35px] font-primary text-[14px] font-normal md:ml-14 ml-[20px] flex items-center"
                      >
                        Shows ads
                      </button>
                    </AnimatedButtonWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {premiumAds.length > 0 && (
        <VipAnnouncement announcements={premiumAds} title={"Premium Ads"} />
      )}
      {ads.length > 0 && (
        <VipAnnouncement announcements={ads} title={"Advertisements"} />
      )}
      {isLoading && <Spinner />}
      {!isLoading && ads.length === 0 && <NoAds />}
      {/* {ads && <RecentAnnouncement announcements={ads} />} */}
      {/* {premiumAds && <PremiumAds premiumAds={premiumAds} />} */}
    </main>
  );
}

export default Homepage;

import { createContext, useEffect } from "react";
import { useState } from "react";
const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [featuresIds, setFeaturesIds] = useState([]);
  const [brandId, setBrandId] = useState();
  const [checkedModels, setCheckedModels] = useState([]);
  const [checkedModelsIds, setCheckedModelsIds] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [checkedCity, setCheckedCity] = useState([]);
  const [checkedCityIds, setCheckedCityIds] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [checkedBanType, setCheckedBanType] = useState([]);
  const [selectedYearManufactured, setSelectedYearManufactured] = useState("");
  const [selectedMaxYearManufactured, setSelectedMaxYearManufactured] =
    useState("");
  const [checkedColor, setCheckedColor] = useState(false);
  const [checkedColorIds, setCheckedColorIds] = useState([]);
  const [checkedBanTypeIds, setCheckedBanTypeIds] = useState([]);
  const [checkedFuelType, setCheckedFuelType] = useState([]);
  const [checkedFuelTypeIds, setCheckedFuelTypeIds] = useState([]);
  const [checkedGear, setCheckedGear] = useState([]);
  const [checkedGearIds, setCheckedGearIds] = useState([]);
  const [checkedGearBox, setCheckedGearBox] = useState([]);
  const [checkedGearBoxIds, setCheckedGearBoxIds] = useState([]);
  const [selectedVolumeMin, setSelectedVolumeMin] = useState("");
  const [selectedVolumeMax, setSelectedVolumeMax] = useState("");
  const [minPower, setMinPower] = useState("");
  const [maxPower, setMaxPower] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [checkedOwnersNumber, setCheckedOwnersNumber] = useState([]);
  const [checkedOwnersNumberIds, setCheckedOwnersNumberIds] = useState([]);
  const [checkedSeatsNumber, setCheckedSeatsNumber] = useState([]);
  const [checkedSeatsNumberIds, setCheckedSeatsNumberIds] = useState([]);
  const [checkedMarketAssembled, setCheckedMarketAssembled] = useState([]);
  const [checkedMarketAssembledIds, setCheckedMarketAssembledIds] = useState([]);
  const [newAds, setNewAds] = useState(1425);
  const [moreFilters, setMoreFilters] = useState(false);
  function handleMoreFilters() {
    setMoreFilters(!moreFilters);
  }

  const [paymentOptions, setPaymentOptions] = useState({
    credit: null,
    barter: null,
    noPunctuation: null,
    notColored: null,
    accidentalCars: null,
    alloyWheels: null,
    usa: null,
    hatch: null,
    rainSensor: null,
    centralLocking: null,
    parkingRadar: null,
    airConditioning: null,
    seatHeating: null,
    leatherSalon: null,
    xenonLamps: null,
    rearViewCamera: null,
    sideCurtains: null,
    rainSeatVentilationSensor: null,
  });
  return (
    <FilterContext.Provider
      value={{
        newAds,
        moreFilters,
        handleMoreFilters,
        setPaymentOptions,
        paymentOptions,
        brandId,
        setBrandId,
        checkedModels,
        setCheckedModels,
        checkedBanTypeIds, 
        setCheckedBanTypeIds,
        checkedModelsIds,
        setCheckedModelsIds,
        selectedType,
        setSelectedType,
        checkedCity,
        setCheckedCity,
        checkedCityIds,
        setCheckedCityIds,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedCurrency,
        setSelectedCurrency,
        checkedBanType,
        setCheckedBanType,
        selectedYearManufactured,
        setSelectedYearManufactured,
        selectedMaxYearManufactured,
        setSelectedMaxYearManufactured,
        checkedColor,
        setCheckedColor,
        checkedFuelType,
        setCheckedFuelType,
        checkedGear,
        setCheckedGear,
        checkedGearBox,
        setCheckedGearBox,
        selectedVolumeMin,
        setSelectedVolumeMin,
        selectedVolumeMax,
        setSelectedVolumeMax,
        minPower,
        setMinPower,
        maxPower,
        setMaxPower,
        minMileage,
        setMinMileage,
        maxMileage,
        setMaxMileage,
        selectedCarType,
        setSelectedCarType,
        checkedOwnersNumber,
        setCheckedOwnersNumber,
        checkedSeatsNumber,
        setCheckedSeatsNumber,
        checkedMarketAssembled,
        setCheckedMarketAssembled,
        cars,
        setCars,
        checkedColorIds,
        setCheckedColorIds, 
        checkedFuelTypeIds, 
        setCheckedFuelTypeIds,
        checkedGearIds, 
        setCheckedGearIds,
        checkedGearBoxIds, 
        setCheckedGearBoxIds,
        checkedOwnersNumberIds, 
        setCheckedOwnersNumberIds,
        checkedSeatsNumberIds, 
        setCheckedSeatsNumberIds,
        checkedMarketAssembledIds, 
        setCheckedMarketAssembledIds,
        featuresIds,
        setFeaturesIds,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;

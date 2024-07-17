import { createContext, useEffect } from "react";
import { useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialPaymentOptions = {
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
  };

  const initialValues = {
    cars: [],
    featuresIds: [],
    brandId: undefined,
    checkedModels: [],
    checkedModelsIds: [],
    selectedType: "",
    checkedCity: [],
    checkedCityIds: [],
    minPrice: "",
    maxPrice: "",
    selectedCurrency: "",
    checkedBanType: [],
    selectedYearManufactured: "",
    selectedMaxYearManufactured: "",
    checkedColor: false,
    checkedColorIds: [],
    checkedBanTypeIds: [],
    checkedFuelType: [],
    checkedFuelTypeIds: [],
    checkedGear: [],
    checkedGearIds: [],
    checkedGearBox: [],
    checkedGearBoxIds: [],
    selectedVolumeMin: "",
    selectedVolumeMax: "",
    minPower: "",
    maxPower: "",
    minMileage: "",
    maxMileage: "",
    selectedCarType: "",
    checkedOwnersNumber: [],
    checkedOwnersNumberIds: [],
    checkedSeatsNumber: [],
    checkedSeatsNumberIds: [],
    checkedMarketAssembled: [],
    checkedMarketAssembledIds: [],
    newAds: 1425,
    moreFilters: false,
    paymentOptions: initialPaymentOptions,
  };

  const [cars, setCars] = useState(initialValues.cars);
  const [featuresIds, setFeaturesIds] = useState(initialValues.featuresIds);
  const [brandId, setBrandId] = useState(initialValues.brandId);
  const [checkedModels, setCheckedModels] = useState(
    initialValues.checkedModels
  );
  const [checkedModelsIds, setCheckedModelsIds] = useState(
    initialValues.checkedModelsIds
  );
  const [selectedType, setSelectedType] = useState(initialValues.selectedType);
  const [checkedCity, setCheckedCity] = useState(initialValues.checkedCity);
  const [checkedCityIds, setCheckedCityIds] = useState(
    initialValues.checkedCityIds
  );
  const [minPrice, setMinPrice] = useState(initialValues.minPrice);
  const [maxPrice, setMaxPrice] = useState(initialValues.maxPrice);
  const [selectedCurrency, setSelectedCurrency] = useState(
    initialValues.selectedCurrency
  );
  const [checkedBanType, setCheckedBanType] = useState(
    initialValues.checkedBanType
  );
  const [selectedYearManufactured, setSelectedYearManufactured] = useState(
    initialValues.selectedYearManufactured
  );
  const [selectedMaxYearManufactured, setSelectedMaxYearManufactured] =
    useState(initialValues.selectedMaxYearManufactured);
  const [checkedColor, setCheckedColor] = useState(initialValues.checkedColor);
  const [checkedColorIds, setCheckedColorIds] = useState(
    initialValues.checkedColorIds
  );
  const [checkedBanTypeIds, setCheckedBanTypeIds] = useState(
    initialValues.checkedBanTypeIds
  );
  const [checkedFuelType, setCheckedFuelType] = useState(
    initialValues.checkedFuelType
  );
  const [checkedFuelTypeIds, setCheckedFuelTypeIds] = useState(
    initialValues.checkedFuelTypeIds
  );
  const [checkedGear, setCheckedGear] = useState(initialValues.checkedGear);
  const [checkedGearIds, setCheckedGearIds] = useState(
    initialValues.checkedGearIds
  );
  const [checkedGearBox, setCheckedGearBox] = useState(
    initialValues.checkedGearBox
  );
  const [checkedGearBoxIds, setCheckedGearBoxIds] = useState(
    initialValues.checkedGearBoxIds
  );
  const [selectedVolumeMin, setSelectedVolumeMin] = useState(
    initialValues.selectedVolumeMin
  );
  const [selectedVolumeMax, setSelectedVolumeMax] = useState(
    initialValues.selectedVolumeMax
  );
  const [minPower, setMinPower] = useState(initialValues.minPower);
  const [maxPower, setMaxPower] = useState(initialValues.maxPower);
  const [minMileage, setMinMileage] = useState(initialValues.minMileage);
  const [maxMileage, setMaxMileage] = useState(initialValues.maxMileage);
  const [selectedCarType, setSelectedCarType] = useState(
    initialValues.selectedCarType
  );
  const [checkedOwnersNumber, setCheckedOwnersNumber] = useState(
    initialValues.checkedOwnersNumber
  );
  const [checkedOwnersNumberIds, setCheckedOwnersNumberIds] = useState(
    initialValues.checkedOwnersNumberIds
  );
  const [checkedSeatsNumber, setCheckedSeatsNumber] = useState(
    initialValues.checkedSeatsNumber
  );
  const [checkedSeatsNumberIds, setCheckedSeatsNumberIds] = useState(
    initialValues.checkedSeatsNumberIds
  );
  const [checkedMarketAssembled, setCheckedMarketAssembled] = useState(
    initialValues.checkedMarketAssembled
  );
  const [checkedMarketAssembledIds, setCheckedMarketAssembledIds] = useState(
    initialValues.checkedMarketAssembledIds
  );
  const [newAds, setNewAds] = useState(initialValues.newAds);
  const [moreFilters, setMoreFilters] = useState(initialValues.moreFilters);
  const [paymentOptions, setPaymentOptions] = useState(
    initialValues.paymentOptions
  );

  const resetFilters = () => {
    setCars(initialValues.cars);
    setFeaturesIds(initialValues.featuresIds);
    setBrandId(initialValues.brandId);
    setCheckedModels(initialValues.checkedModels);
    setCheckedModelsIds(initialValues.checkedModelsIds);
    setSelectedType(initialValues.selectedType);
    setCheckedCity(initialValues.checkedCity);
    setCheckedCityIds(initialValues.checkedCityIds);
    setMinPrice(initialValues.minPrice);
    setMaxPrice(initialValues.maxPrice);
    setSelectedCurrency(initialValues.selectedCurrency);
    setCheckedBanType(initialValues.checkedBanType);
    setSelectedYearManufactured(initialValues.selectedYearManufactured);
    setSelectedMaxYearManufactured(initialValues.selectedMaxYearManufactured);
    setCheckedColor(initialValues.checkedColor);
    setCheckedColorIds(initialValues.checkedColorIds);
    setCheckedBanTypeIds(initialValues.checkedBanTypeIds);
    setCheckedFuelType(initialValues.checkedFuelType);
    setCheckedFuelTypeIds(initialValues.checkedFuelTypeIds);
    setCheckedGear(initialValues.checkedGear);
    setCheckedGearIds(initialValues.checkedGearIds);
    setCheckedGearBox(initialValues.checkedGearBox);
    setCheckedGearBoxIds(initialValues.checkedGearBoxIds);
    setSelectedVolumeMin(initialValues.selectedVolumeMin);
    setSelectedVolumeMax(initialValues.selectedVolumeMax);
    setMinPower(initialValues.minPower);
    setMaxPower(initialValues.maxPower);
    setMinMileage(initialValues.minMileage);
    setMaxMileage(initialValues.maxMileage);
    setSelectedCarType(initialValues.selectedCarType);
    setCheckedOwnersNumber(initialValues.checkedOwnersNumber);
    setCheckedOwnersNumberIds(initialValues.checkedOwnersNumberIds);
    setCheckedSeatsNumber(initialValues.checkedSeatsNumber);
    setCheckedSeatsNumberIds(initialValues.checkedSeatsNumberIds);
    setCheckedMarketAssembled(initialValues.checkedMarketAssembled);
    setCheckedMarketAssembledIds(initialValues.checkedMarketAssembledIds);
    setNewAds(initialValues.newAds);
    setMoreFilters(initialValues.moreFilters);
    setPaymentOptions(initialValues.paymentOptions);
  };

  function handleMoreFilters() {
    setMoreFilters(!moreFilters);
  }
  return (
    <FilterContext.Provider
      value={{
        cars,
        setCars,
        featuresIds,
        setFeaturesIds,
        brandId,
        setBrandId,
        checkedModels,
        setCheckedModels,
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
        checkedColorIds,
        setCheckedColorIds,
        checkedBanTypeIds,
        setCheckedBanTypeIds,
        checkedFuelType,
        setCheckedFuelType,
        checkedFuelTypeIds,
        setCheckedFuelTypeIds,
        checkedGear,
        setCheckedGear,
        checkedGearIds,
        setCheckedGearIds,
        checkedGearBox,
        setCheckedGearBox,
        checkedGearBoxIds,
        setCheckedGearBoxIds,
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
        checkedOwnersNumberIds,
        setCheckedOwnersNumberIds,
        checkedSeatsNumber,
        setCheckedSeatsNumber,
        checkedSeatsNumberIds,
        setCheckedSeatsNumberIds,
        checkedMarketAssembled,
        setCheckedMarketAssembled,
        checkedMarketAssembledIds,
        setCheckedMarketAssembledIds,
        newAds,
        setNewAds,
        moreFilters,
        setMoreFilters,
        paymentOptions,
        setPaymentOptions,
        resetFilters,
        handleMoreFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;

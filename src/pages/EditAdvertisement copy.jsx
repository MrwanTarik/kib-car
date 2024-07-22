import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import addMore from "../assets/images/add-more.png";
import backView from "../assets/images/back-view.png";
import frontView from "../assets/images/front-view.png";
import insideView from "../assets/images/inside-view.png";
import { IoIosClose } from "react-icons/io";
import PaymentModal from "../components/PaymentModal";
import OtpModal from "../components/OtpModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditAdvertisement() {
  const { id } = useParams();
  const formRef = useRef(null);
  const [brands, setBrands] = useState([]);
  const [carFeatures, setCarFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [brandModels, setBrandModels] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [gears, setGears] = useState([]);
  const [gearBoxs, setGearBoxs] = useState([]);
  const [years, setYears] = useState([]);
  const [banTypes, setBanTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [engineVolumes, setEngineVolumes] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [owners, setOwners] = useState([]);
  const [cities, setCities] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentToken, setPaymentToken] = useState("");
  const [PictureErrorMsg, setPictureErrorMsg] = useState("");

  const [car, setCar] = useState(null);
  const [carImages, setCarImages] = useState([]);
  const handleCheckboxChangeForCarFeatures = (featureId) => (event) => {
    if (event.target.checked) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    }
  };
  const [formData, setFormData] = useState({
    brand: "",
    fuelType: "",
    model: "",
    gear: "",
    banType: "",
    gearBox: "",
    march: "",
    marchNum: "",
    year: "",
    color: "",
    engineVolume: "",
    price: "",
    currencyValue: "",
    enginePower: "",
    howManyDoYouOwn: "",
    marketAssembled: "",
    hasStroke: false,
    hasColor: false,
    needRepair: false,
    seatNum: "",
    credit: false,
    barter: false,
    vinCode: "",
    moreInfo: "",
    alloyWheels: false,
    centralLocking: false,
    leatherSalon: false,
    seatVentilation: false,
    usa: false,
    parkingRadar: false,
    xenonLamps: false,
    hatch: false,
    airConditioning: false,
    nearViewCamera: false,
    rainSensor: false,
    seatHeating: false,
    sideCurtains: false,
    uploadedImages: [],
    images: [],
    vehicle_front_view_image: null,
    vehicle_back_view_image: null,
    vehicle_front_panel_image: null,
    imagesFiles: [],
    pin_code: null,
    city: null,
  });

  useEffect(() => {
    async function getCar(id) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/${id}`
        );

        const carData = response.data.data;
        const carImages = carData.images.map((car) => {
          return { src: car.url, id: car.id };
        });
        const featureIds = carData.features.map((feature) => feature.id);
        const featuredImagesArr = {
          vehicle_front_view_image: carData.vehicle_front_view_image,
          vehicle_front_panel_image: carData.vehicle_front_panel_image,
          vehicle_back_view_image: carData.vehicle_back_view_image,
        };

        setFormData({
          brand: carData.brand.id,
          fuelType: carData.fuel_type.id,
          model: carData.brand_model.id,
          gear: carData.gear.id,
          banType: carData.vehicle_category.id,
          gearBox: carData.vehicle_transmission.id,
          march: carData.mileage,
          marchNum: "km",
          year: carData.vehicle_year.id,
          color: carData.vehicle_color.id,
          engineVolume: carData.vehicle_engine_volume.id,
          price: carData.price,
          currencyValue: carData.price_currency,
          enginePower: carData.engine_power,
          howManyDoYouOwn: carData.vehicle_prior_owner.id,
          marketAssembled: carData.vehicle_market.id,
          hasStroke: carData.is_crashed == 1 ? true : false,
          hasColor: carData.is_painted == 1 ? true : false,
          needRepair: carData.for_spare_parts == 1 ? true : false,
          seatNum: carData.number_of_seats,
          credit: carData.loan == 1 ? true : false,
          barter: carData.barter == 1 ? true : false,
          vinCode: carData.vin_code,
          moreInfo: carData.additional_information,
          alloyWheels: false,
          centralLocking: false,
          leatherSalon: false,
          seatVentilation: false,
          usa: false,
          parkingRadar: false,
          xenonLamps: false,
          hatch: false,
          airConditioning: false,
          nearViewCamera: false,
          rainSensor: false,
          seatHeating: false,
          sideCurtains: false,
          uploadedImages: [
            { src: featuredImagesArr.vehicle_front_view_image },
            { src: featuredImagesArr.vehicle_back_view_image },
            { src: featuredImagesArr.vehicle_front_panel_image },
            ...carImages,
          ],
          vehicle_front_view_image: null,
          vehicle_back_view_image: null,
          vehicle_front_panel_image: null,
          pin_code: null,
          city: carData.city.id,
          imagesFiles: [],
        });

        setCar(response.data.data);
        setSelectedFeatures(featureIds);

        console.log(formData);
      } catch (error) {
        console.log(error);
      }
    }
    async function getDefaultOptions() {
      try {
        const brandsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/brands`
        );
        setBrands(brandsRes.data);
        const vehicleFeaturesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-features`
        );
        setCarFeatures(vehicleFeaturesRes.data);
        const fuelTypesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/fuel-types`
        );
        setFuelTypes(fuelTypesRes.data);

        const gearsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/gears`
        );
        setGears(gearsRes.data);

        const gearBoxsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-transmissions`
        );
        setGearBoxs(gearBoxsRes.data);

        const yearsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-years`
        );
        setYears(yearsRes.data);

        const banTypeRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-categories`
        );
        setBanTypes(banTypeRes.data);

        const colorsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-colors`
        );
        setColors(colorsRes.data);

        const ownersRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-prior-owners`
        );
        setOwners(ownersRes.data);

        const volumesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-engine-volumes`
        );
        setEngineVolumes(volumesRes.data);

        const marketsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-markets`
        );
        setMarkets(marketsRes.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDefaultOptions();
    getCar(id);
  }, [id]);

  useEffect(() => {
    async function getModels() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/brand-models?brand_id=${formData.brand}`
        );
        setBrandModels(response.data);
      } catch (error) {
        setBrandModels([]);
        console.log(error);
      }
    }
    getModels();
  }, [formData.brand]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  }
  const placeholderImages = [frontView, backView, insideView];
  function validateImageCount(uploadedImages) {
    const minImages = 3;
    const maxImages = 21;
    const numberOfUploadedImages = uploadedImages.length;

    if (numberOfUploadedImages < minImages) {
      return `Please upload at least ${minImages} images.`;
    } else if (numberOfUploadedImages > maxImages) {
      return `You can only upload up to ${maxImages} images.`;
    }

    return ""; // No error
  }
  const handleImageUpload = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Use the original file's name or create a new one if necessary
      const filename = file.name || `image_${new Date().getTime()}`;
      const newImage = {
        src: URL.createObjectURL(file),
        flipped: 0,
        type: file.type,
        name: filename,
      };
      // Directly use the file object
      if (index == 0) {
        formData.vehicle_front_view_image = new File([file], filename, {
          type: file.type,
        });
      } else if (index == 1) {
        formData.vehicle_back_view_image = new File([file], filename, {
          type: file.type,
        });
      } else if (index == 2) {
        formData.vehicle_front_panel_image = new File([file], filename, {
          type: file.type,
        });
      } else {
        console.log("ffff", formData.imagesFiles);
        formData.imagesFiles = [...formData.imagesFiles, file];
      }
      // Replace or add new uploaded image
      let updatedImages = [...formData.uploadedImages];
      updatedImages[index] = newImage;
      setFormData({
        ...formData,
        uploadedImages: updatedImages,
      });
    }
  };

  const addImage = (event) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newImages = files.map((file) => ({
        src: URL.createObjectURL(file),
        flipped: 0,
      }));
      setFormData({
        ...formData,
        uploadedImages: [...formData.uploadedImages, ...newImages],
      });
    }
  };

  const rotateImage = (index, direction) => {
    const updatedImages = formData.uploadedImages.map((img, i) =>
      i === index
        ? {
            ...img,
            flipped: img.flipped + (direction === "clockwise" ? 90 : -90),
          }
        : img
    );

    setFormData({
      ...formData,
      uploadedImages: updatedImages,
    });
  };

  const removeImage = (index) => {
    if (formData.uploadedImages[index].id) {
      setRemovedImages([...removedImages, formData.uploadedImages[index].id]);
    }

    const updatedImages = formData.uploadedImages.map((image, i) => {
      return i === index ? null : image;
    });

    setFormData({
      ...formData,
      uploadedImages: updatedImages,
    });
  };

  const imageSlots = formData.uploadedImages.map((image, index) => {
    if (image) {
      return (
        <div
          key={index}
          className="md:w-[48%] lg:w-[23%] w-full h-[180px] inline-block m-2"
        >
          <img
            src={image.src}
            alt={`Uploaded image ${index}`}
            className="object-cover w-full h-full"
            style={{ transform: `rotate(${image.flipped}deg)` }}
          />
          <div>
            <div className="flex justify-between">
              <button
                onClick={() => removeImage(index)}
                className="!text-[35px] text-red"
              >
                <IoIosClose />
              </button>
              <div className="flex gap-x-3">
                <button
                  onClick={() => rotateImage(index, "clockwise")}
                  className=" text-red !text-[24px]"
                >
                  ↻
                </button>
                <button
                  onClick={() => rotateImage(index, "counterclockwise")}
                  className=" text-red !text-[24px]"
                >
                  ↺
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  // Add placeholders to imageSlots if they're not already replaced by an uploaded image
  [frontView, backView, insideView].forEach((placeholder, index) => {
    if (!formData.uploadedImages[index]) {
      imageSlots.splice(
        index,
        0,
        <div
          key={`placeholder-${index}`}
          className="relative md:w-[48%] w-full lg:w-[23%] h-[180px] inline-block m-2"
        >
          <input
            type="file"
            id={`file-upload-${index}`}
            style={{ display: "none" }}
            onChange={(e) => handleImageUpload(e, index)}
            accept="image/*"
          />
          <img
            src={placeholder}
            alt={`Placeholder ${index}`}
            className="object-cover h-full max-w-full m-auto cursor-pointer lg:m-0"
            onClick={() =>
              document.getElementById(`file-upload-${index}`).click()
            }
          />
        </div>
      );
    }
  });
  // Always show the "Add More" button
  imageSlots.push(
    <div
      key="add-more"
      className="relative  md:w-[48%] w-full lg:w-[23%] h-[180px] inline-block m-2"
    >
      <input
        type="file"
        id="file-upload-add-more"
        style={{ display: "none" }}
        onChange={(e) =>
          handleImageUpload(
            e,
            formData.uploadedImages.length < 3
              ? 3
              : formData.uploadedImages.length
          )
        }
        accept="image/*"
        multiple
      />
      <img
        src={addMore}
        alt="Add more"
        className="object-cover h-full max-w-full m-auto cursor-pointer lg:m-0"
        onClick={() => document.getElementById("file-upload-add-more").click()}
      />
    </div>
  );

  function handleFormSubmit(e) {
    e.preventDefault();
    async function saveAnnouncement() {
      try {
        const params = {
          vehicle_category: formData.banType,
          fuel_type: formData.fuelType,
          gear: formData.gear,
          mileage_measurement_unit: formData.marchNum,
          vehicle_transmission: formData.gearBox,
          vehicle_year: formData.year,
          vehicle_prior_owner: formData.howManyDoYouOwn,
          vehicle_status: 1,
          mileage: formData.march,
          mileageType: formData.marchNum,
          vehicle_color: formData.color,
          price: formData.price,
          vehicle_engine_volume: formData.engineVolume,
          engine_power: formData.enginePower,
          vehicle_market: formData.marketAssembled,
          number_of_seats: formData.seatNum,
          loan: formData.credit,
          barter: formData.barter,
          is_crashed: formData.hasStroke,
          is_painted: formData.hasColor,
          for_spare_parts: formData.needRepair,
          vin_code: formData.vinCode,
          additional_information: formData.moreInfo,
          vehicle_front_view_image: formData.vehicle_front_view_image,
          vehicle_back_view_image: formData.vehicle_back_view_image,
          vehicle_front_panel_image: formData.vehicle_front_panel_image,
          brand_model: formData.model,
          city: formData.city,
          name: formData.userName,
          email: formData.userEmail,
          phone: formData.userTel,
          brand: formData.brand,
          pin_code: formData.pin_code,
          price_currency: formData.currencyValue.toLocaleLowerCase(),
          images: formData.imagesFiles,
          vehicle_features: selectedFeatures,
          removeImages: removedImages,
        };
        const headers = {
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/update`,
          params,
          {
            headers: headers,
          }
        );

        if (response.data.action == "premium") {
          setPaymentToken(response.data.token);
          setShowPaymentModal(true);
        }

        if (response.data.action == "otp") {
          setShowOtpModal(true);
        }

        if (response.data.success == true) {
          //show success alet
          toast.dismiss();
          toast.success("Your announcement updated successfully", {
            position: "bottom-right",
            autoClose: false,
          });
        }

        console.log(response.data);
      } catch (error) {
        console.log(error);

        if (error.response.data.errors) {
          toast.dismiss();
          for (let errorKey in error.response.data.errors) {
            error.response.data.errors[errorKey].forEach((v) => {
              toast.error(v, {
                position: "bottom-right",
                autoClose: false,
              });
            });
          }
        }
      }
    }
    const errorMessage = validateImageCount(formData.uploadedImages);
    const picSection = document.getElementById("picturesSection");
    const errorMsg = document.getElementById("error");
    if (errorMessage) {
      setPictureErrorMsg(errorMessage);
      errorMsg.classList.remove("hidden");
      picSection.scrollIntoView({ behavior: "smooth" });
      return; // Stop the request from being sent
    } else {
      errorMsg.classList.add("hidden");
      saveAnnouncement();
      console.log(formData);
    }
  }

  return (
    <form ref={formRef} action="" onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="mt-[30px]">
          <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary">
            POSTING AN ADVERTISEMENT
          </h2>
          <ul className="flex flex-col space-y-[20px] items-start mt-[30px] mb-[80px] list-outside advertisement-list font-primary text-[14px] text-secondary">
            <li>
              A vehicle can be published for free only once in three months.
            </li>
            <li>
              Repeat or similar ads (make/model, color) within three months are
              paid.
            </li>
            <li>
              Use the "Promote" service to see your ad on the front lines of the
              site
            </li>
          </ul>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Brand
                </label>
                <select
                  name="brand"
                  id="brand"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.brand}
                  placeholder="Select brand"
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {brands.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Fuel type
                </label>
                <select
                  name="fuelType"
                  id="fuelType"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.fuelType}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {fuelTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Model
                </label>
                <select
                  name="model"
                  id="Model"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.model}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {brandModels.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Gear
                </label>
                <select
                  name="gear"
                  id="gear"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.gear}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {gears.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Ban Type
                </label>
                <select
                  name="banType"
                  id="banType"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.banType}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {banTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Gear Box
                </label>
                <select
                  name="gearBox"
                  id="gearBox"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.gearBox}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {gearBoxs.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  March
                </label>
                <div className="flex items-center justify-between gap-x-8 md:max-w-[452px] w-full">
                  <div className="w-1/2 md:w-auto">
                    <input
                      name="march"
                      type="number"
                      id="march"
                      className="w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                      onChange={handleChange}
                      value={formData.march}
                      required
                    />
                  </div>
                  <div className="md:max-w-[177px] flex space-x-4 items-center w-1/2">
                    <div className="flex items-center gap-x-2">
                      <input
                        required
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="km"
                        type="radio"
                        name="marchNum"
                        value="km"
                        checked={formData.marchNum === "km"}
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="km"
                      >
                        km
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        required
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="mi"
                        type="radio"
                        name="marchNum"
                        value="mi"
                        checked={formData.marchNum === "mi"}
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="mi"
                      >
                        mi
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Year
                </label>
                <select
                  name="year"
                  id="year"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.year}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {years.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Color
                </label>
                <select
                  name="color"
                  id="color"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.color}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {colors.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Engine volume.cm 3
                </label>
                <select
                  name="engineVolume"
                  id="engineVolume"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.engineVolume}
                  required
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  {engineVolumes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Price
                </label>
                <div className="flex items-center justify-between gap-x-8 md:max-w-[452px] w-full">
                  <div className="w-1/2 md:w-auto">
                    <input
                      name="price"
                      type="number"
                      id="price"
                      className="w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                      onChange={handleChange}
                      value={formData.price}
                      required
                    />
                  </div>
                  <div className="md:max-w-[220px] flex space-x-4 items-center w-1/2">
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="azn"
                        type="radio"
                        name="currencyValue"
                        value="azn"
                        required
                        checked={formData.currencyValue === "AZN"}
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="azn"
                      >
                        AZN
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="usd"
                        type="radio"
                        name="currencyValue"
                        value="usd"
                        required
                        checked={formData.currencyValue === "USD"}
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="usd"
                      >
                        USD
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="eur"
                        type="radio"
                        name="currencyValue"
                        value="eur"
                        required
                        checked={formData.currencyValue === "EUR"}
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="eur"
                      >
                        EUR
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Engine power.ag
                </label>
                <input
                  className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal focus:outline-0"
                  type="number"
                  name="enginePower"
                  id="enginePower"
                  placeholder="Engine power.ag"
                  value={formData.enginePower}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  How many do you own?
                </label>
                <select
                  name="howManyDoYouOwn"
                  id="howManyDoYouOwn"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.howManyDoYouOwn}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {owners.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  For which market it is assem
                </label>
                <select
                  name="marketAssembled"
                  id="marketAssembled"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.marketAssembled}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {markets.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary">
                  The Situation
                </label>
                <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                  <div className="mt-[2px]">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.hasStroke}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="hasStroke"
                        id="hasStroke"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="hasStroke">
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
                        It has a stroke
                      </h3>
                      <p className="pt-1 text-[14px] font-primary text-secondary">
                        One or more parts have been replaced or repaired.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col mt-6">
                <label className="font-primary text-[14px] font-normal invisible text-secondary">
                  The Situation
                </label>
                <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                  <div className="mt-[2px]">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.needRepair}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="needRepair"
                        id="needRepair"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="needRepair">
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
                        For accident or spare parts
                      </h3>
                      <p className="pt-1 text-[14px] font-primary text-secondary">
                        In need of repair or in general disrepair..
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                <label className="font-primary text-[14px] font-normal invisible text-secondary">
                  The Situation
                </label>
                <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                  <div className="mt-[2px]">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.hasColor}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="hasColor"
                        id="needRepair"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="needRepair">
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
                        It is colored
                      </h3>
                      <p className="pt-1 text-[14px] font-primary text-secondary">
                        One or more details have been painted or cosmetic work
                        has been done.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                <label className="font-primary text-[14px] font-normal text-secondary md:min-w-[12%]">
                  Number of seats
                </label>
                <div className="md:flex-nowrap  flex-wrap gap-y-3 md:gap-y-0  md:min-w-[452px] w-full space-x-5 flex md:ml-2">
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum1"
                      type="radio"
                      name="seatNum"
                      value="1"
                      checked={formData.seatNum == "1"}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum1"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum2"
                      type="radio"
                      name="seatNum"
                      value="2"
                      onChange={handleChange}
                      checked={formData.seatNum == "2"}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum2"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum3"
                      type="radio"
                      name="seatNum"
                      value="3"
                      onChange={handleChange}
                      required
                      checked={formData.seatNum == "3"}
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum3"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum4"
                      type="radio"
                      name="seatNum"
                      value="4"
                      checked={formData.seatNum == "4"}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum4"
                    >
                      4
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum5"
                      type="radio"
                      name="seatNum"
                      value="5"
                      checked={formData.seatNum == "5"}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum5"
                    >
                      5
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum6"
                      type="radio"
                      name="seatNum"
                      value="6"
                      checked={formData.seatNum == "6"}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum6"
                    >
                      6
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum7"
                      type="radio"
                      name="seatNum"
                      value="7"
                      onChange={handleChange}
                      required
                      checked={formData.seatNum == "7"}
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum7"
                    >
                      7
                    </label>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum8"
                      type="radio"
                      name="seatNum"
                      value="8"
                      onChange={handleChange}
                      required
                      checked={formData.seatNum == "8"}
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum8"
                    >
                      8
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum8"
                      type="radio"
                      name="seatNum"
                      value="0"
                      onChange={handleChange}
                      checked={formData.seatNum == "0" || formData.seatNum > 8}
                      required
                    />
                    <label
                      className="text-[14px] font-normal  text-primary"
                      htmlFor="seatVal"
                    >
                      Don’t be mentioned
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary  "></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex md:ml-2">
                  <div className="mt-[2px] ">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.credit}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="credit"
                        id="credit"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="credit">
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
                        With credit
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary "></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex md:ml-2">
                  <div className="mt-[2px] ">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.barter}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="barter"
                        id="barter"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="barter">
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
                        Barter is possible
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[30px] mt-[80px]">
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal text-secondary">
                  VIN code
                </label>
                <input
                  type="text"
                  value={formData.vinCode}
                  name="vinCode"
                  id="vinCode"
                  className="w-full focus:outline-0 md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between lg:gap-[50px] xl:gap-[90px] md:flex-row flex-col">
                <label className="font-primary min-w-[170] text-[14px] font-normal text-secondary">
                  Additional Information
                </label>
                <textarea
                  type="textarea"
                  value={formData.moreInfo}
                  name="moreInfo"
                  id="moreInfo"
                  className="w-full min-h-[132px]  focus:outline-0 md:min-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal"
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
              </div>
            </div>
          </div>
          <div className="mt-[117px]">
            <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary mb-[80px]">
              Vehicle supply
            </h2>
            <div className="grid grid-cols-12 gap-y-5">
              <div className="xl:col-span-3 lg:col-span-4 col-span-6 space-y-[10px]">
                {carFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="mt-[2px] flex items-center space-x-[10px]"
                  >
                    <label className="flex items-center custom-checkbox">
                      <input
                        checked={selectedFeatures.includes(feature.id)} // Check if the feature is selected
                        onChange={handleCheckboxChangeForCarFeatures(
                          feature.id
                        )} // Pass the feature ID to the change handler
                        type="checkbox"
                        name={feature.name} // Use dynamic name
                        id={feature.id} // Use dynamic ID
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label htmlFor={feature.id}>{feature.name}</label>{" "}
                    {/* Use dynamic label */}
                  </div>
                ))}
              </div>
            </div>
            <div id="picturesSection" className="grid grid-cols-12">
              <div className="col-span-12">
                <h2 className="uppercase mt-[110px] mb-[30px] font-secondary text-[26px] font-bold leading-8 text-primary">
                  Pictures
                </h2>
                <p
                  id="error"
                  className="font-secondary text-[14px] font-bold leading-8 text-red hidden"
                >
                  {PictureErrorMsg}
                </p>
                <div className="p-[30px] flex lg:flex-row flex-col lg:gap-x-14 gap-y-4 lg:gap-y-0 border-dashed border border-link">
                  <div className="lg:max-w-[424px] lg:min-w-[424px] flex flex-col lg:gap-y-7 gap-y-4">
                    <p className="text-[14px] font-primary text-secondary">
                      Minimum – 3 pictures (front, back and whole front panel
                      image is mandatory).
                    </p>
                    <ul className="flex flex-col pl-8 picture-list text-secondary lg:gap-y-7 gap-y-4">
                      <li>- Maximum – 21 images.</li>
                      <li>- Optimal size – 1024x768 pixels.</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-y-[50px] lg:gap-x-6 xl:gap-x-0 ">
                    {imageSlots}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[30px] mt-[80px]">
            <div className="col-span-12 lg:col-span-6">
              <ul className="flex flex-col gap-y-[30px] picture-list ml-5">
                <li>
                  Photos must be taken in the territory of the Republic of
                  Azerbaijan
                </li>
                <li>
                  Photos must be of good quality. The vehicle should be
                  well-lit, there should be no logos and other inscriptions on
                  the pictures. Screenshots are not accepted.
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <ul className="flex flex-col gap-y-[30px] picture-list ml-5 lg:ml-0 ">
                <li>
                  Photos taken at the dealership must be uploaded from the
                  registered dealership's account.
                </li>
                <li>
                  A vehicle sold by a private owner must not be photographed in
                  or near the showroom/official service area.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[117px]">
            <div className="col-span-12">
              <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary">
                PIN Code
              </h2>
              <p className="mt-[10px] font-primary text-secondary">
                No changes are made to the contact details after the
                advertisement is published.
              </p>
              <div className="mt-[80px] flex flex-col gap-y-[30px]">
                <div className="flex flex-col items-start md:flex-row md:items-center gap-y-3">
                  <label
                    className="md:min-w-[244px] md:max-w-[244px] w-full"
                    htmlFor="yourName"
                  >
                    PIN
                  </label>
                  <input
                    className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] text-secondary font-normal focus:outline-0"
                    type="text"
                    name="pin_code"
                    id="pin_code"
                    placeholder="Enter Car PIN Code"
                    value={formData.pin_code}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[700px] mt-[60px]">
            <button
              className="md:min-w-[452px] min-w-full text-[14px] font-primary text-white  py-[18px] px-[20px] outline-none rounded-md font-medium bg-link"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {showPaymentModal && (
        <PaymentModal
          token={paymentToken}
          onClose={() => setShowPaymentModal(false)}
          onPaymentResult={handlePaymentResult}
        />
      )}

      {showOtpModal && (
        <OtpModal
          verifyOtp={verifyOtp}
          resendOtp={resendOtp}
          onClose={() => setShowOtpModal(false)}
        />
      )}
      <ToastContainer />
    </form>
  );
}

export default EditAdvertisement;

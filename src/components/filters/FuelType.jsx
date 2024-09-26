import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function FuelType() {
  const [fuelTypes, setFuelTypes] = useState([]);
  const { checkedFuelType, setCheckedFuelType, setCheckedFuelTypeIds } =
    useContext(FilterContext);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // New state to track dropdown open status

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;
    setCheckedFuelType((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedFuelTypeIds((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((item) => item !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });
  };

  useEffect(() => {
    async function getFuelTypes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/fuel-types`
        );
        setFuelTypes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFuelTypes();
  }, []);

  const selectedOptions = Object.keys(checkedFuelType).filter(
    (item) => checkedFuelType[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Fuel Type" : selectedOptions.join(", ");

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)} // Update state on toggle
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px]  bg-white border-none rounded-lg shadow-md cursor-pointer btn shadow-input hover:bg-stone-50">
          <div className="max-w-[80%]">
            {selectedOptions.length !== 0 && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Fuel Type
              </p>
            )}
            <p className="font-primary text-[14px] font-normal text-start overflow-hidden whitespace-nowrap overflow-ellipsis">
              {summaryText}
            </p>
          </div>

          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`} // Apply rotation class based on state
          />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {fuelTypes.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={checkedFuelType[item.name] || false}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 form-checkbox accent-red"
                />
                <span className="ml-2 text-secondary font-primary text-[15px]">
                  {item.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default FuelType;

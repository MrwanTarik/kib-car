import { useRef, useEffect, useState } from "react";
import axios from "axios";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function YearManufacturer() {
  const { selectedYearManufactured, setSelectedYearManufactured } =
    useContext(FilterContext);
  const [years, setYears] = useState([]);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // New state to track dropdown open status

  const handleSelection = (item) => {
    setSelectedYearManufactured(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  // get brands
  useEffect(() => {
    async function getVehicleYears() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-years`
        );
        setYears(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getVehicleYears();
  }, []);

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)} // Update state on toggle
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg btn shadow-input hover:bg-stone-100">
          <div>
            {selectedYearManufactured && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Year
              </p>
            )}
            <p className="font-primary text-[14px] font-normal text-secondary">
              {selectedYearManufactured || "Year"}
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
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex flex-col w-full flex-nowrap mt-2 rounded-none rounded-l-lg max-h-[210px] overflow-x-auto">
          {years.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default YearManufacturer;

import { useRef, useState, useEffect } from "react";
import axios from "axios";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function MaxYearManufacturer() {
  const { selectedMaxYearManufactured, setSelectedMaxYearManufactured } =
    useContext(FilterContext);
  const [years, setYears] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const detailsRef = useRef(null);
  const inputRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedMaxYearManufactured(item.name);
    setSearchTerm(""); // Clear search term on selection
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
      setIsOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const filteredYears = years.filter((year) =>
    year.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg btn shadow-input hover:bg-stone-100">
          <div>
            {selectedMaxYearManufactured && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Max year
              </p>
            )}
            <p className="font-primary text-[14px] font-normal text-secondary">
              {selectedMaxYearManufactured || "Max year"}
            </p>
          </div>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex flex-col w-full flex-nowrap mt-2 rounded-none rounded-l-lg max-h-[210px] overflow-x-auto">
          <li className="sticky top-0 bg-white z-10">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              placeholder="Search year"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none active:!bg-transparent mb-2"
            />
          </li>
          {filteredYears.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default MaxYearManufacturer;

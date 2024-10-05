import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function MaxYearManufacturer() {
  const { selectedMaxYearManufactured, setSelectedMaxYearManufactured } = useContext(FilterContext);
  const [years, setYears] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedMaxYearManufactured(item.name);
    setSearchTerm("");
    closeDropdown();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
    inputRef.current.blur();
  };

  const handleDetailsClick = (e) => {
    e.preventDefault();
    if (isOpen) {
      closeDropdown();
    } else {
      setIsOpen(true);
      if (detailsRef.current) {
        detailsRef.current.setAttribute("open", "true");
      }
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
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
        open={isOpen}
        onClick={handleDetailsClick}
      >
        <summary className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg btn shadow-input hover:bg-white hover:!border-[#8F93AD] ${
          isOpen ? "border-[#8F93AD]" : "border-gray-300"
        }`}>
          <div className="max-w-[64%]">
            {selectedMaxYearManufactured && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Max year
              </p>
            )}
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={selectedMaxYearManufactured || "Max year"}
              className="font-primary text-[14px] font-normal w-full bg-transparent border-none focus:outline-none"
            />
          </div>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex flex-col w-full flex-nowrap mt-1 rounded-none rounded-l-lg max-h-[210px] overflow-x-auto">
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

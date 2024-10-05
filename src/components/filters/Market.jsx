import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function Market() {
  const [markets, setMarkets] = useState([]);
  const {
    checkedMarketAssembled,
    setCheckedMarketAssembled,
    setCheckedMarketAssembledIds,
  } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;
    setCheckedMarketAssembled((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedMarketAssembledIds((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((item) => item !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });
    setSearchTerm(""); // Clear search term after selection
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (detailsRef.current) {
      detailsRef.current.setAttribute("open", "true");
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    if (detailsRef.current) {
      detailsRef.current.setAttribute("open", "true");
    }
  };

  useEffect(() => {
    async function getMarkets() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-markets`
        );
        setMarkets(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMarkets();
  }, []);

  const filteredMarkets = markets.filter((market) =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOptions = Object.keys(checkedMarketAssembled).filter(
    (item) => checkedMarketAssembled[item]
  );

  const summaryText =
    selectedOptions.length === 0
      ? "For which market it is assembled"
      : selectedOptions.join(", ");
  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isOpen]);
  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg btn shadow-input hover:bg-white hover:!border-[#8F93AD] ${
            isOpen ? "border-[#8F93AD]" : "border-gray-300"
          }`}
        >
          <div className="max-w-[80%]">
            {selectedOptions.length !== 0 && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Market
              </p>
            )}
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder={summaryText}
              className="font-primary text-[14px] font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis"
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
        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-1 rounded-lg max-h-[210px] overflow-y-auto">
          {filteredMarkets.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={checkedMarketAssembled[item.name] || false}
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

export default Market;

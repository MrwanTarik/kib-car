import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function VolumeMax() {
  const [engineVolumes, setEngineVolumes] = useState([]);
  const { selectedVolumeMax, setSelectedVolumeMax } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelection = (item) => {
    setSelectedVolumeMax(item.name);
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

  useEffect(() => {
    async function getEngineVolumes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-engine-volumes`
        );
        setEngineVolumes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEngineVolumes();
  }, []);

  const filteredEngineVolumes = engineVolumes.filter((volume) =>
    volume.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="max-w-[80%]">
            {selectedVolumeMax && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Max
              </p>
            )}
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={selectedVolumeMax || "Max"}
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
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex-col flex-nowrap w-full mt-1 rounded-none rounded-l-lg max-h-[210px] overflow-y-auto">
          {filteredEngineVolumes.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default VolumeMax;

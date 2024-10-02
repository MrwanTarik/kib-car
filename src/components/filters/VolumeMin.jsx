import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function VolumeMin() {
  const [engineVolumes, setEngineVolumes] = useState([]);
  const { selectedVolumeMin, setSelectedVolumeMin } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelection = (item) => {
    setSelectedVolumeMin(item.name);
    setSearchTerm("");
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
      setIsOpen(false);
    }
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
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg btn shadow-input hover:bg-stone-50">
          <div className="max-w-[80%]">
            {selectedVolumeMin && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Volume (cm.3)
              </p>
            )}
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder={selectedVolumeMin || "Volume (cm.3)"}
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

export default VolumeMin;

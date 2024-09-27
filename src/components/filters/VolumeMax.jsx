import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function VolumeMax() {
  const [engineVolumes, setEngineVolumes] = useState([]);
  const { selectedVolumeMax, setSelectedVolumeMax } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // New state to track dropdown open status
  const [searchTerm, setSearchTerm] = useState(""); // Add search term state
  const inputRef = useRef(null); // Add input ref

  const handleSelection = (item) => {
    setSelectedVolumeMax(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
      setIsOpen(false); // Close the dropdown
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
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
        onToggle={(e) => setIsOpen(e.target.open)} // Update state on toggle
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg btn shadow-input hover:bg-stone-50">
          <div>
            {selectedVolumeMax && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Max
              </p>
            )}
            <p className="font-primary text-[14px] font-normal">
              {selectedVolumeMax || "Max"}
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
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex-col flex-nowrap w-full mt-2 rounded-none rounded-l-lg max-h-[210px] overflow-y-auto">
          <li className="sticky top-0 bg-white z-10">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              placeholder="Search volume"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none active:!bg-transparent mb-2"
            />
          </li>
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

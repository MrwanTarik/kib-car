import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function VolumeMin() {
  const [engineVolumes, setEngineVolumes] = useState([]);
  const { selectedVolumeMin, setSelectedVolumeMin } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // New state to track dropdown open status

  const handleSelection = (item) => {
    setSelectedVolumeMin(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
      setIsOpen(false); // Close the dropdown
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

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)} // Update state on toggle
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border-none rounded-lg shadow-md btn shadow-input hover:bg-stone-50">
          <div className="text-start">
            {selectedVolumeMin && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Volume (cm.3)
              </p>
            )}
            <p className="font-primary text-[14px] font-normal">
              {selectedVolumeMin || "Volume (cm.3)"}
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
          {engineVolumes.map((item) => (
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

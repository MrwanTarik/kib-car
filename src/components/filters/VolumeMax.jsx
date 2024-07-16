import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function VolumeMax() {
  const [engineVolumes, setEngineVolumes] = useState([]);
  const { selectedVolumeMax, setSelectedVolumeMax } = useContext(FilterContext);
  const detailsRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedVolumeMax(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
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
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-5 bg-white border-none rounded-lg shadow-md btn shadow-input hover:bg-stone-50">
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
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex justify-start w-full mt-2 rounded-none rounded-l-lg">
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

export default VolumeMax;

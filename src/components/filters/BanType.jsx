import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function BanType() {
  const [banTypes, setBanTypes] = useState([]);
  const { checkedBanType, setCheckedBanType, setCheckedBanTypeIds } =
    useContext(FilterContext);
  const detailsRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const banTypeId = event.target.id;
    setCheckedBanType((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedBanTypeIds((prevItems) => {
      if (prevItems.includes(banTypeId)) {
        return prevItems.filter((item) => item !== banTypeId);
      } else {
        return [...prevItems, banTypeId];
      }
    });
  };

  useEffect(() => {
    async function getBanTypes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-categories`
        );
        setBanTypes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBanTypes();
  }, []);

  const selectedOptions = Object.keys(checkedBanType).filter(
    (item) => checkedBanType[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Ban Type" : selectedOptions.join(", ");

  return (
    <div className="h-full ">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border-none rounded-lg shadow-md cursor-pointer btn shadow-input hover:bg-stone-100">
          <div className="max-w-[80%]">
            {selectedOptions.length !== 0 && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Ban Type
              </p>
            )}
            <p className="font-primary text-[14px] font-normal text-secondary text-start overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
              {summaryText}
            </p>
          </div>

          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {banTypes.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  checked={checkedBanType[item.name] || false}
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

export default BanType;

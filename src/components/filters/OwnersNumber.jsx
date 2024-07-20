import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function OwnersNumber() {
  const [ownersNumber, setOwnersNumber] = useState([]);
  const {
    checkedOwnersNumber,
    setCheckedOwnersNumber,
    setCheckedOwnersNumberIds,
  } = useContext(FilterContext);
  const detailsRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;
    setCheckedOwnersNumber((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedOwnersNumberIds((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((item) => item !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });
  };
  useEffect(() => {
    async function getSeatsNumber() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-prior-owners`
        );
        setOwnersNumber(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSeatsNumber();
  }, []);
  const selectedOptions = Object.keys(checkedOwnersNumber).filter(
    (item) => checkedOwnersNumber[item]
  );

  const summaryText =
    selectedOptions.length === 0
      ? "Number of Owners"
      : selectedOptions.join(", ");

  return (
    <div className="h-full">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border-none rounded-lg shadow-md cursor-pointer btn shadow-input hover:bg-stone-50">
          <div className="max-w-[80%]">
            {selectedOptions.length !== 0 && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Number of Owners
              </p>
            )}
            <p className="font-primary text-[14px] font-normal text-start  overflow-hidden whitespace-nowrap overflow-ellipsis">
              {summaryText}
            </p>
          </div>

          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {ownersNumber.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={checkedOwnersNumber[item.name] || false}
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

export default OwnersNumber;

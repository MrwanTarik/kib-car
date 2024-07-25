import { useContext, useEffect } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function CarType() {
  const { selectedCarType, setSelectedCarType } = useContext(FilterContext);

  const handleChange = (value) => {
    setSelectedCarType(value);
  };

  const options = ["all", "Salons", "Personal"];
  useEffect(() => setSelectedCarType("all"), []);
  return (
    <div className="flex justify-between border-none rounded-lg shadow-md h-full">
      {options.map((option, index) => (
        <label
          key={option}
          className={`first:rounded-l-lg  even:border-r-[#6B6B6B] last:rounded-r-lg py-[15px]  cursor-pointer flex flex-1 justify-center items-center text-center px-[10px] ${
            selectedCarType === option
              ? "bg-red text-white"
              : "bg-white text-secondary "
          }`}
          onClick={() => handleChange(option)}
        >
          <input
            type="radio"
            name="type"
            value={option}
            checked={selectedCarType === option}
            onChange={() => {}}
            className="hidden"
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default CarType;

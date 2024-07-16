import { useContext, useEffect } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function Type() {
  const { selectedType, setSelectedType } = useContext(FilterContext);

  const handleChange = (value) => {
    setSelectedType(value);
  };
  useEffect(() => setSelectedType("all"), []);
  const options = ["all", "new", "drove"];
  return (
    <div className="flex justify-between border-none rounded-lg shadow-md h-full">
      {options.map((option) => (
        <label
          key={option}
          className={`first:rounded-l-lg  even:border-r-[#6B6B6B] last:rounded-r-lg py-[15px] px-[20px] cursor-pointer flex flex-1 justify-center items-center ${
            selectedType === option
              ? "bg-red text-white"
              : "bg-white text-secondary "
          }`}
          onClick={() => handleChange(option)}
        >
          <input
            type="radio"
            name="type"
            value={option}
            checked={selectedType === option}
            onChange={() => {}}
            className="hidden"
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default Type;

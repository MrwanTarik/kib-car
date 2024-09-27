import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
const Power = () => {
  const { minPower, setMinPower, maxPower, setMaxPower } =
    useContext(FilterContext);

  return (
    <div className="flex justify-between items-center rounded-lg border border-gray-300 h-full bg-white ">
      <div className="relative w-[58%]">
        <input
          type="number"
          name="minPrice"
          id="minPower"
          value={minPower}
          onChange={(e) => setMinPower(e.target.value)}
          className="peer cursor-pointer placeholder-transparent h-10 px-[10px] border-gray-300 text-gray-900 focus:outline-none "
          placeholder="Power"
        />
        <label
          htmlFor="minPower"
          className="absolute cursor-pointer left-0 -top-1.5 px-4  text-sm transition-all w-full text-start peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-1.5  peer-focus:text-[12px] font-primary text-secondary"
        >
          Power (ag), min
        </label>
      </div>
      <div className="relative">
        <input
          type="number"
          name="maxPrice"
          id="maxPower"
          value={maxPower}
          onChange={(e) => setMaxPower(e.target.value)}
          className="peer cursor-pointer placeholder-transparent h-10 w-full  border-l border-[#e2e2e2] px-4 text-gray-900 focus:outline-none "
          placeholder="Max"
        />
        <label
          htmlFor="maxPower"
          className="absolute cursor-pointer left-0 -top-1.5 px-4 font-primary text-secondary text-sm transition-all text-start peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-1.5  peer-focus:text-sm"
        >
          Max
        </label>
      </div>
    </div>
  );
};

export default Power;

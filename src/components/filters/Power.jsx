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
          className="peer cursor-pointer placeholder-transparent h-10 pt-[10px] px-[10px] border-gray-300 text-gray-900 focus:outline-none "
          placeholder="Power"
        />
        <label
          htmlFor="minPower"
          className="absolute cursor-pointer left-0 top-[1px] pl-[0.6rem] pr-[0.1rem]  text-[12px] leading-3 transition-all w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:top-[1px]  peer-focus:text-[12px] peer-focus:leading-3 font-primary text-secondary"
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
          className="peer cursor-pointer placeholder-transparent h-10 w-[90%]  pt-[10px] border-l border-[#e2e2e2] pl-4 text-gray-900 focus:outline-none "
          placeholder="Max"
        />
        <label
          htmlFor="maxPower"
          className="absolute cursor-pointer left-0 top-[1px] px-4 font-primary text-secondary text-[12px] leading-3 transition-all text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:top-[1px]  peer-focus:text-[12px] peer-focus:leading-3"
        >
          Max
        </label>
      </div>
    </div>
  );
};

export default Power;

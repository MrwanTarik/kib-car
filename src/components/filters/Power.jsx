import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
const Power = () => {
  const { minPower, setMinPower, maxPower, setMaxPower } =
    useContext(FilterContext);

  return (
    <div className="flex justify-between items-center rounded-lg border border-gray-300 h-full bg-white ">
      <div className="relative w-[58%] h-full pt-[10px] pl-4 border-gray-300 focus-within:border focus-within:border-[#8F93AD] focus-within:rounded-l-md">
        <input
          type="number"
          name="minPower"
          id="minPower"
          value={minPower}
          onChange={(e) => setMinPower(e.target.value)}
          className="peer cursor-pointer placeholder-transparent text-gray-900 focus:outline-none mt-[9px]"
          placeholder="Power"
        />
        <label
          htmlFor="minPower"
          className="absolute cursor-pointer left-0 top-[8px] pl-[0.6rem] pr-[0.1rem]  text-[12px] leading-3 transition-all w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[8px]  peer-focus:text-[12px] peer-focus:leading-3 font-primary text-secondary"
        >
          Power (ag), min
        </label>
      </div>
      <div className="relative h-full border-l border-[#e2e2e2] pt-[10px] pl-4  focus-within:border focus-within:border-[#8F93AD] focus-within:rounded-r-md">
        <input
          type="number"
          name="maxPower"
          id="maxPower"
          value={maxPower}
          onChange={(e) => setMaxPower(e.target.value)}
          className="peer cursor-pointer placeholder-transparent w-[90%]  text-gray-900 focus:outline-none mt-[9px]"
          placeholder="Max"
        />
        <label
          htmlFor="maxPower"
          className="absolute cursor-pointer left-0 top-[8px] px-4 font-primary text-secondary text-[12px] leading-3 transition-all text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[8px]  peer-focus:text-[12px] peer-focus:leading-3"
        >
          Max
        </label>
      </div>
    </div>
  );
};

export default Power;

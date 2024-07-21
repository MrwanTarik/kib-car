import { useState } from "react";
import useFetchDealership from "../components/cars/useFetchDealership";
import DealershipCard from "../components/dealership/DealershipCard";
function DealershipOwners() {
  const { data, loading, error } = useFetchDealership(`car-dealerships`);
  const [width] = useState(window.innerWidth);
  const showMobileCom = width < 971;
  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="">
      <div className={`${!showMobileCom ? "container" : ""}`}>
        <div
          className={`" ${
            !showMobileCom
              ? "border-y border-[#eaebf2] bg-[#f1f3f7] p-[20px]"
              : "py-[12px] px-[10px]"
          } `}
        >
          <h2
            className={`uppercase ${
              !showMobileCom
                ? "text-[16px] font-bold leading-8 text-primary"
                : "text-[14px] font-medium text-[#ca1016]"
            } `}
          >
            OFFICIAL REPRESENTATIVES
          </h2>
        </div>
        <div
          className={`grid grid-cols-12  ${
            !showMobileCom
              ? "gap-[15px] px-[25px] pt-[22px] pb-[18px]"
              : "gap-[10px] pb-[12px] px-[10px]"
          }`}
        >
          {data.data.map((dealership) => (
            <DealershipCard
              key={dealership.id}
              dealership={dealership}
              showMobileCom={showMobileCom}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealershipOwners;

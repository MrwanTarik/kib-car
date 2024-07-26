import { useEffect, useState } from "react";
import useFetchDealership from "../components/cars/useFetchDealership";
import DealershipCard from "../components/dealership/DealershipCard";
import Spinner from "../components/Spinner";
import NoAds from "../components/NoAds";
import NoOwners from "../components/NoOwners";
function DealershipOwners() {
  const { data, loading, error } = useFetchDealership(`car-dealerships`);
  const [width] = useState(window.innerWidth);
  const showMobileCom = width < 971;
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function onSearch(e) {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      const filteredAr = data.data.filter((owner) =>
        owner.dealership_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setFilteredData(filteredAr);
    } else {
      setFilteredData(data.data);
    }
  }
  useEffect(() => {
    if (!loading && data) {
      setFilteredData(data.data);
    }
  }, [loading, data]);
  if (loading) return <Spinner />;

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
        <div className="grid grid-cols-12 gap-[15px] lg:mt-5 lg:mb-0 lg:px-[25px]  px-[10px] mb-3">
          <div className="lg:col-span-6 hidden lg:block"></div>
          <input
            type="text"
            placeholder="search.."
            value={search}
            onChange={onSearch}
            className="lg:col-span-6 col-span-12 px-5 py-3 border border-[#e5e7eb] rounded-lg focus-visible:border-[#cfcfcf] focus-visible:outline-none"
          />
        </div>
        {filteredData.length === 0 ? (
          <NoOwners />
        ) : (
          <div
            className={`min-h-[441px] grid grid-cols-12  ${
              !showMobileCom
                ? "gap-[15px] px-[25px] pt-[22px] pb-[18px]"
                : "gap-[10px] pb-[12px] px-[10px]"
            }`}
          >
            {filteredData.map((dealership) => (
              <DealershipCard
                key={dealership.id}
                dealership={dealership}
                showMobileCom={showMobileCom}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DealershipOwners;

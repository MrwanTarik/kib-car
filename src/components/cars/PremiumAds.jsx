import useFetchData from "./useFetchCars";
import CarCard from "./CarCard";
import PremiumCard from "../PremiumCard";
function PremiumAds() {
  const { data, loading, error } = useFetchData(`premiumAds`);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="mt-[80px]">
      <h1 className="font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary ">
        {" "}
        PREMIUM ADS
      </h1>
      <div className="grid grid-cols-12 mt-[72px] gap-[30px] ">
        <div className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6">
          <PremiumCard />
        </div>

        {data.map((car) => (
            <CarCard key={car.id} car={car} />
        ))}
        <div className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6">
          <PremiumCard />
        </div>
      </div>
    </div>
  );
}

export default PremiumAds;

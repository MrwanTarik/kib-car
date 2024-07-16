import useFetchDealership from "../components/cars/useFetchDealership";
import DealershipCard from "../components/dealership/DealershipCard";
function DealershipOwners() {
  const { data, loading, error } = useFetchDealership(`car-dealerships`);
  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="mt-[30px]">
      <div className="container">
        <h1 className="font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary mb-[60px]">
          {" "}
          OFFICIAL REPRESENTATIVES
        </h1>
        <div className="grid grid-cols-12 gap-[30px]">
          {data.data.map((dealership) => (
            <DealershipCard key={dealership.id} dealership={dealership} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealershipOwners;

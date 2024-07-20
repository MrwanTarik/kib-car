import useFetchData from "./useFetchCars";
import CarCard from "./CarCard";
function VipAnnouncement({ announcements, title }) {
  // const { data, loading, error } = useFetchData(`vipAnnouncement`);
  // if (loading) return <p>Loading...</p>;
  return (
    <div className="pt-[80px] bg-[#F1F3F7]">
      <h1 className="container font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary">
        {title}
      </h1>
      <div className="pb-[120px] pt-[60px] bg-[#F6F7FA]">
        <div className="container">
          <div className="grid grid-cols-12  gap-[18px] ">
            {announcements.map((car) => (
              <CarCard key={car.id} car={car} id={car.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VipAnnouncement;

import useFetchData from "./useFetchCars";
import CarCard from "./CarCard";
import { Link } from "react-router-dom";
function RecentAnnouncement({ carDetail }) {
  const { data, loading, error } = useFetchData(`recentAnnouncement`);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="mt-[90px]">
      <div
        className={`flex items-center justify-between ${
          carDetail ? "hidden" : "flex"
        }`}
      >
        <h1 className="font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary ">
          {" "}
          RECENT ANNOUNCEMENTS
        </h1>
        <Link
          to={""}
          className="text-[14px] md:text-[14px] font-bold font-primary text-secondary py-[14px] px-5 shadow-md rounded-md flex items-center justify-center text-center min-w-[120px]"
        >
          View More
        </Link>
      </div>
      <div className="grid grid-cols-12 mt-[72px] gap-[30px]">
        {data.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default RecentAnnouncement;

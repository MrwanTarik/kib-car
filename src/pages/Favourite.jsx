import React, { useEffect, useState } from "react";
import favCarIcon from "../assets/icons/fav-car.svg";
import CarCard from "../components/cars/CarCard";
function Favourite() {
  const [car, setCar] = useState([]);
  const [rerender, setRerender] = useState(false);
  function readCarData() {
    // Retrieve data from localStorage
    const data = localStorage.getItem("carDataList");
    return data ? JSON.parse(data) : [];
  }
  useEffect(() => {
    const carData = readCarData();
    setCar(carData);
  }, [rerender]);
  return (
    <div className="lg:container">
      <div className="mt-[20px] relative ">
        <h1 className="container font-bold  md:text-[16px] text-[#212C3A] pb-[20px] border-b border-[#eaebf2]">
          Featured ADS
        </h1>
        {!car ? (
          <div className="bg-[#FAFAFA] min-h-[300px] md:min-h-[600px] flex justify-center items-center flex-col">
            <img
              src={favCarIcon}
              alt="favIcon"
              width={"165px"}
              className="mb-[35px]"
            />
            <p className="font-primary text-[18px] font-normal text-center ">
              Add the ads you like to favorites by clicking the heart icon.
            </p>
          </div>
        ) : (
          <div className="bg-[#FAFAFA] min-h-[300px] md:min-h-[600px] grid grid-cols-12  gap-[10px] py-[30px] px-[18px]">
            {car.map((ad) => (
              <CarCard key={ad.id} car={ad} id={ad.id} fakeRender={setRerender}  />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourite;

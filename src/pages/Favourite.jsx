import React from "react";
import favCarIcon from "../assets/icons/fav-car.svg";
function Favourite() {
  return (
    <div className="container">
      <div className="mt-[20px] relative ">
        <h1 className="font-bold  md:text-[16px] text-[#212C3A] pb-[20px] border-b border-[#eaebf2]">
          Featured ADS
        </h1>
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
      </div>
    </div>
  );
}

export default Favourite;

import React from "react";
import favCarIcon from "../assets/icons/fav-car.png";
function Favourite() {
  return (
    <div className="container">
      <div className="fav-sec mt-[80px] relative ">
        <h1 className="font-secondary  text-[20px] md:text-[26px] font-bold leading-8 text-[#505050]">
          {" "}
          Featured ADS
        </h1>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={favCarIcon}
            alt="favIcon"
            width={"100px"}
            height={"100px"}
            className="m-auto mb-[30px]"
          />
          <p className="font-primary text-[14px] font-normal text-secondary text-center ">
            Add the ads you like to favorites by clicking the heart icon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Favourite;

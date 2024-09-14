function CarDetailsCom({ car }) {
  return (
    <div className="grid grid-cols-12 pb-[30px] border-b border-solid border-[#E2E2E2]">
      <div className="col-span-6 md:col-span-6 xl:col-span-3  mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-secondary">City</p>
          <p className="font-primary text-[14px] text-secondary">Brand</p>
          <p className="font-primary text-[14px] text-secondary">Model</p>
          <p className="font-primary text-[14px] text-secondary">Model Year</p>
          <p className="font-primary text-[14px] text-secondary">Ban type</p>
          <p className="font-primary text-[14px] text-secondary">Color</p>
          <p className="font-primary text-[14px] text-secondary">Engine</p>
          <p className="font-primary text-[14px] text-secondary">March</p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.city?.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.brand.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.brand_model.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_year?.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_category?.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_color.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {/* 2.3 L/130 hp/Diesel */}
            {car.engine_volume_liters + " L / " + car.fuel_type.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {Number(car.mileage_in_km).toLocaleString()} km
          </p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[6px] md:mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-secondary">Gear Box</p>
          <p className="font-primary text-[14px] text-secondary">Gear</p>
          <p className="font-primary text-[14px] text-secondary">New</p>
          <p className="font-primary text-[14px] text-secondary">
            Number of seats
          </p>
          <p className="font-primary text-[14px] text-secondary">Owners</p>
          <p className="font-primary text-[14px] text-secondary">Situation</p>
          <p className="font-primary text-[14px] text-secondary">
            For which market it is assembled
          </p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[6px] md:mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_transmission.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.gear.name}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_status == "USED" ? "No" : "Yes"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.number_of_seats}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">1</p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            There is no stroke, it is not painted
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_market.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsCom;

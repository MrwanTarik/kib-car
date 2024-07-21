// DealershipDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../cars/CarCard";
import AdDetails from "./AdDetails";
import phoneDetails from "../../assets/images/phone-details.png";
function DealershipDetails() {
  const [dealership, setDealership] = useState(null);
  const { dealershipId } = useParams();
  const [adContent, setAdContent] = useState(null);
  useEffect(() => {
    async function fetchDealershipDetails() {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/car-dealerships/${dealershipId}/announcements`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDealership(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching dealership details:", error);
      }
    }
    const fetchAdContent = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/car-dealerships/${dealershipId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const adData = await response.json();
        setAdContent(adData);
      } catch (error) {
        console.error("Error fetching ad content:", error);
      }
    };
    fetchAdContent();
    fetchDealershipDetails();
  }, [dealershipId]);

  if (adContent === null || adContent?.data.length === 0) {
    console.log(dealership?.data);
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#F2F2F2] lg:bg-transparent">
      <button className="fixed h-[48px] justify-center flex lg:hidden items-center gap-x-2 bg-[#3db460] rounded-xl hover:bg-[#269547] w-[calc(100%-32px)] right-4 left-4  bottom-4  ">
        <img
          className="w-[18px] h-[18px]"
          src={phoneDetails}
          alt="phoneDetails"
        />
        <p className="text-[15px] text-white">Call</p>
      </button>
      <div className="lg:container">
        <div className="lg:pt-[15px]">
          <AdDetails ad={adContent?.data} />
        </div>
        {dealership?.data?.length === 0 ? (
          <p className="lg:my-[60px] p-[10px] lg:p-0 bg-white lg:bg-transparent">
            This Dealership has no ads yett!
          </p>
        ) : (
          <div className="container grid grid-cols-12 mt-[15px] gap-[30px] bg-[#FCFCFC] lg:bg-transparent py-4">
            {dealership?.data.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DealershipDetails;

// DealershipDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../cars/CarCard";
import AdDetails from "./AdDetails";
function DealershipDetails() {
  const [dealership, setDealership] = useState(null);
  const { dealershipId } = useParams();
  const [adContent, setAdContent] = useState(null);
  useEffect(() => {
    async function fetchDealershipDetails() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/car-dealerships/${dealershipId}/announcements`
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
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/car-dealerships/${dealershipId}`
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
  if (!dealership) return <div>Loading...</div>;
  return (
    <div>
      <div className="container">
        <div className="py-[30px]">
          <AdDetails ad={adContent.data} />
        </div>
        <div className="grid grid-cols-12 mt-[60px] gap-[30px]">
          {dealership.data.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealershipDetails;

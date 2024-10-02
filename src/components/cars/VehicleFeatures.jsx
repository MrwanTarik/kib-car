import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function VehicleFeatures() {
  const [features, setFeatures] = useState([]);
  // State to track the selected feature IDs
  const [selectedFeatureIds, setSelectedFeatureIds] = useState([]);

  const { setFeaturesIds } = useContext(FilterContext);

  useEffect(() => {
    async function getFeatures() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-features`
        );
        setFeatures(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFeatures();
  }, []);

  // Function to handle checkbox changes
  const handleChange = (id) => {
    // Check if the feature is already selected
    const isSelected = selectedFeatureIds.includes(id);
    if (isSelected) {
      // Remove the ID from the selected IDs if it's already selected
      setSelectedFeatureIds(
        selectedFeatureIds.filter((featureId) => featureId !== id)
      );
      setFeaturesIds(
        selectedFeatureIds.filter((featureId) => featureId !== id)
      );
    } else {
      // Add the ID to the selected IDs if it's not already selected
      setSelectedFeatureIds([...selectedFeatureIds, id]);
      setFeaturesIds([...selectedFeatureIds, id]);
    }
  };

  return features.map((feature) => {
    // Determine if the current feature is selected
    const isChecked = selectedFeatureIds.includes(feature.id);

    return (
      <div key={feature.id} className="h-[48px] rounded-lg bg-white">
        <label className="inline-block h-full cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            name={feature.name}
            id={feature.id}
            value={feature.id} // Set value to feature.id
            checked={isChecked}
            onChange={() => handleChange(feature.id)} // Pass feature.id to handleChange
          />
          <span
            className={`py-[15px] px-[10px] rounded-lg cursor-pointer flex flex-1 justify-center items-center border ${
              !isChecked
                ? "border-transparent"
                : "text-red border-red bg-[#ffe6e5]"
            } h-full`}
          >
            {feature.name}
          </span>
        </label>
      </div>
    );
  });
}

export default VehicleFeatures;

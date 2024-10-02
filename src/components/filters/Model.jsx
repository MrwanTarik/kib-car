import axios from "axios";
import { useEffect, useRef, useState, useContext } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function Model() {
  const { checkedModels, setCheckedModels, brandId, setCheckedModelsIds } =
    useContext(FilterContext);
  const [models, setModels] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const initialCheckedModelState = {};

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const modelId = event.target.id;

    setCheckedModels((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedModelsIds((prevItems) => {
      if (prevItems.includes(modelId)) {
        return prevItems.filter((item) => item !== modelId);
      } else {
        return [...prevItems, modelId];
      }
    });
    setSearchTerm(""); // Clear the search term after each selection
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (detailsRef.current) {
      detailsRef.current.setAttribute("open", "true");
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    if (detailsRef.current) {
      detailsRef.current.setAttribute("open", "true");
    }
  };

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOptions = Object.keys(checkedModels).filter(
    (item) => checkedModels[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Model" : selectedOptions.join(", ");

  useEffect(() => {
    setCheckedModels(initialCheckedModelState);
    setCheckedModels([]);
  }, [brandId]);

  useEffect(() => {
    async function getModels() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/brand-models?brand_id=${brandId?.brand}`
        );
        setModels(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getModels();
  }, [brandId]);

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className={`w-full h-full dropdown ${!brandId && "cursor-not-allowed"}`}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          disabled={!brandId}
          className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg cursor-pointer btn shadow-input hover:bg-stone-100"
        >
          <div className="max-w-[80%]">
            {selectedOptions.length > 0 && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Model
              </p>
            )}
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder={summaryText}
              className="font-primary text-[14px] font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis"
              disabled={!brandId}
            />
          </div>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </summary>
        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-1 rounded-lg max-h-[210px] overflow-y-auto">
          {filteredModels.map((model) => (
            <li key={model.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={model.name}
                  id={model.id}
                  checked={checkedModels[model.name] || false}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 form-checkbox accent-red"
                />
                <span className="ml-2 text-secondary font-primary text-[15px]">
                  {model.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Model;

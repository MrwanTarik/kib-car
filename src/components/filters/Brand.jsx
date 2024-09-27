import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function Brand() {
  const { setBrandId } = useContext(FilterContext);
  const [brandName, setBrandName] = useState("");
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);

  const handleSelection = (item) => {
    setBrandId({
      brand: item.id,
    });
    setBrandName(item.name);
    setSearchTerm("");
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
      setIsOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getBrands() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/brands`
        );
        setBrands(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBrands();
  }, []);

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg btn shadow-input hover:bg-stone-50">
          <div>
            {brandName && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Brand
              </p>
            )}
            <p className="font-primary text-[14px] font-normal">
              {brandName || "Brand"}
            </p>
          </div>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </summary>
        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          <li className="sticky top-0 bg-white z-10">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              placeholder="Search brand"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none active:!bg-transparent mb-2"
            />
          </li>
          {filteredBrands.map((brand) => (
            <li key={brand.id} onClick={() => handleSelection(brand)}>
              <a>{brand.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Brand;

import { useEffect, useRef } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function PaymentCurrency() {
  const { selectedCurrency, setSelectedCurrency } = useContext(FilterContext);
  const detailsRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedCurrency(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  const currencies = [
    { id: 1, name: "USD" },
    { id: 2, name: "EUR" },
    { id: 3, name: "TR" },
  ];
  useEffect(() => {
    setSelectedCurrency("USD");
  }, []);
  return (
    <div className="w-[40%] h-full">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-[10px] bg-white border border-gray-300 rounded-lg  btn shadow-input hover:bg-stone-100">
          <div>
            <p className="font-primary text-[14px] font-normal">
              {selectedCurrency || "Currency"}
            </p>
          </div>
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex justify-start w-full mt-1 rounded-none rounded-l-lg">
          {currencies.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default PaymentCurrency;

import { useRef, useState } from "react";
import chivronBottom from "../assets/icons/chivron-bottom-gray.svg";

const options = [
  { value: "1", label: "Unable to contact" },
  { value: "2", label: "The ad is not current" },
  { value: "3", label: "Wrong price" },
  { value: "4", label: "Incorrect indicators" },
  { value: "5", label: "Repeat announcement" },
  { value: "6", label: "Wrong city" },
  { value: "7", label: "The pictures are incorrect" },
  { value: "8", label: "The car is delivered to order" },
  { value: "9", label: "Suspicion of fraud" },
  { value: "10", label: "The car is from the showroom" },
];
function ComplainForm({ onCloseModal }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [pin, setPin] = useState("");
  const [complainName, setComplainName] = useState("");
  const detailsRef = useRef(null);

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const onConfirm = () => {
    console.log("fuck you body");
  };
  const handleSelection = (item) => {
    setComplainName(item.label);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };
  return (
    <div className="min-w-[350px] lg:min-w-[450px] max-w-[440px]">
      <div className="px-[30px] py-[20px] rounded-t-lg relative border-b border-[#eaebf2]">
        <p className="font-primary font-semibold text-[16px]  text-[#212c3a] ">
          Complain
        </p>
      </div>
      <div className="h-full">
        <details
          ref={detailsRef}
          className={`w-full h-full dropdown  px-[30px]`}
        >
          <summary className="flex items-center justify-between w-full  !p-0 bg-white  cursor-pointer h-[3rem] min-h-[3rem] hover:bg-transparent border-b border-[#eaebf2]">
            <div className="max-w-[80%]">
              {complainName && (
                <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                  The reason for the complaint
                </p>
              )}
              <p
                className={`font-primary text-[14px] font-normal text-start ${
                  !complainName && "text-secondary"
                }`}
              >
                {complainName || "The reason for the complaint"}
              </p>
            </div>

            <img src={chivronBottom} alt="chivron-Bottom" />
          </summary>
          <ul className="py-2  z-[1]  menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-[calc(100%-60px)] mt-2 rounded-lg max-h-[330px] overflow-y-auto">
            {options.map((complain) => (
              <li
                key={complain.value}
                onClick={() => handleSelection(complain)}
              >
                <a>{complain.label}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="px-[30px]">
        <textarea
          className="w-full h-auto max-h-[200px] text-[15px] min-h-[18px] resize-none text-[#212c3a] leading-[18px] focus:outline-none border-l-0 border-r-0 border-t-0 border-b border-[#eaebf2] py-4 "
          placeholder="Describe the complaint"
          name="description"
          id="description"
        ></textarea>
      </div>
      <div className="px-[30px] py-5">
        <button
          onClick={onConfirm}
          className="px-[10px] py-[12px] w-full font-bold text-white bg-[#4c88f9] rounded-md "
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ComplainForm;

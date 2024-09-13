import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GetPinMethods({ onCloseModal, showNewModal, setSharedData }) {
  const [selectedOption, setSelectedOption] = useState("");
  const { id } = useParams();

  async function handleClick(method) {
    console.log(selectedOption);
    await handleForgetPin(id, method);
    showNewModal("forget-pin");
  }
  const handleForgetPin = async (id, method) => {
    console.log(import.meta.env.VITE_REACT_APP_API_URL);
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/forget-pin`,
        {
          announcement_id: id,
          pin_method: method,
        }
      );

      if (response.data.success == true) {
        const resToken = response.data.token;
        setSharedData(`https://www.paytr.com/odeme/guvenli/${resToken}`);
      }
    } catch (error) {
      //   setForgetPinModal(false);

      console.log(error);
    }
  };
  return (
    <div className="min-w-[350px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          PIN Recovery
        </p>
      </div>
      <div className="p-[20px]">
        <div className="flex flex-col">
          <label className="flex items-center mb-4">
            <input
              type="radio"
              value="SMS"
              checked={selectedOption === "SMS"}
              onClick={() => handleClick("sms")}
              onChange={() => setSelectedOption("SMS")}
              className="form-radio accent-red h-5 w-5"
            />
            <span className="ml-2 text-base">via SMS</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="email"
              checked={selectedOption === "email"}
              onChange={() => setSelectedOption("email")}
              onClick={() => handleClick("email")}
              className="form-radio accent-red h-5 w-5"
            />
            <span className="ml-2 text-base">Via e-mail address</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default GetPinMethods;

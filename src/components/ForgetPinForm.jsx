import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ForgetPinForm({ car, onCloseModal }) {
  const { id } = useParams();
  const [forgetPinIframeSrc, setForgetPinIframeSrc] = useState(null);

  useEffect(() => {
    const handleForgetPin = async () => {
      console.log(import.meta.env.VITE_REACT_APP_API_URL);
      try {
        const response = await axios.post(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/announcements/order/token`,
          {
            email: car.creator.email,
            phone: car.creator.phone,
            announcement_id: id,
            service_id: 1,
          }
        );

        if (response.data.success == true) {
          const resToken = response.data.token;
          setForgetPinIframeSrc(
            `https://www.paytr.com/odeme/guvenli/${resToken}`
          );
        }
      } catch (error) {
        //   setForgetPinModal(false);

        console.log(error);
      }
    };
    handleForgetPin();
  }, []);
  return (
    <div className="bg-white rounded-lg  h-[600px] w-full min-w-[600px] max-w-[600px]">
      <iframe
        className="!overflow-auto !w-full !h-[calc(100%-60px)]"
        src={forgetPinIframeSrc}
        id="paytriframe"
        frameBorder="0"
        style={{ width: "100%", height: "100%", overflowY: "auto" }}
      ></iframe>
      <div className="flex justify-between mt-4">
        <button
          onClick={onCloseModal}
          className="px-4 py-[12px]  font-bold text-white bg-red rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ForgetPinForm;

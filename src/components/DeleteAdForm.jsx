import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Modal from "./Modal";
import ForgetPinForm from "./ForgetPinForm";

function DeleteAdForm({ onCloseModal, showNewModal }) {
  const [deleteAdErrorMsg, setDeleteAdErrorMsg] = useState("");
  const [deletePin, setDeletePin] = useState("");
  const handleDeleteApi = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/delete`,
        {
          pin_code: deletePin,
        }
      );

      if (response.data.success == true) {
        Navigate("/");
        onCloseModal?.();
        // setDeleteAd(false);
      } else {
        setDeleteAdErrorMsg("Wrong PIN Code!");
      }
    } catch (error) {
      //   setDeleteAd(true);
      console.log(error);
    }
  };

  const handleDeletePinChange = (e) => {
    setDeletePin(e.target.value);
  };
  return (
    <div className="min-w-[350px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          Confirm your identity
        </p>
      </div>
      <div className="p-[20px]">
        <div>
          <p className="text-[#333] text-[14px] pb-2 leading-snug">
            Please enter the PIN to confirm the deletion of the ad. You can find
            the PIN code in the mail sent to you from kibcar.com when the ad is
            published on the site.
          </p>
          <p className="text-[#333] text-[14px]">
            {/* You can get the OTP code from the letter sent to you on gmail */}
          </p>
        </div>
        <div>
          <p className="text-[#333] text-[14px] mb-[15px]">Announcement PIN:</p>
        </div>
        <div className="flex gap-x-[20px] text-[14px]">
          <input
            type="text"
            name="pin"
            value={deletePin}
            onChange={handleDeletePinChange}
            className="px-4 py-[12px] border rounded w-full lg:min-w-[220px] max-w-[150px]"
            placeholder="Enter PIN"
          />

          <button
            onClick={handleDeleteApi}
            className="px-[10px] py-[12px] w-full font-bold text-white bg-red rounded-md "
          >
            Confirm it
          </button>
        </div>
        <button
          onClick={() => showNewModal("pin-methods")}
          className="mt-2 ml-1 text-[15px] underline text-link"
        >
          Forgot your PIN?
        </button>
        <p className="mt-1 ml-1 text-[14px] error text-red">
          {deleteAdErrorMsg}
        </p>
      </div>
    </div>
  );
}

export default DeleteAdForm;

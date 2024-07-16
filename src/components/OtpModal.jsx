import React, { useState } from "react";
import OtpCloseModal from "../assets/icons/close-modal.svg";
function OtpModal({ onClose, resendOtp, verifyOtp }) {
  const [otp, setOtp] = useState("");

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerify = () => {
    verifyOtp(otp);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <div className="z-10 bg-white rounded-lg shadow-lg w-full max-w-[450px] ">
        <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
          <p className="font-primary font-medium text-[14px] text-center text-white">
            Confirm your identity
          </p>
          <img
            onClick={onClose}
            className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
            src={OtpCloseModal}
            alt="OtpCloseModal"
          />
        </div>
        <div className="px-[20px]">
          <div className="py-[20px]">
            <p className="text-[#6B6B6B] text-[14px]">
              Enter your OTP to continue.
            </p>
            <p className="text-[#6B6B6B] text-[14px]">
              You can get the OTP code from the letter sent to you on gmail
            </p>
          </div>
          <div>
            <p className="text-[#6B6B6B] text-[14px] mb-[15px]">Ad OTP:</p>
          </div>
          <div className="flex gap-x-[20px]">
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange}
              className="px-4 py-[12px] border rounded w-full"
              placeholder="Enter OTP"
            />
            <button
              className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md "
              onClick={handleVerify}
            >
              Verify OTP
            </button>
          </div>
          <div className="flex justify-between mt-4">
            {/* <button
              className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
              onClick={resendOtp}
            >
              Resend OTP
            </button> */}
            <span
              className="pb-5 py-2 font-primary font-medium text-[#6B6B6B] text-[14px] rounded inline-block cursor-pointer"
              onClick={resendOtp}
            >
              Didn&nbsp;t receive the OTP?
              <span
                href="#"
                className="underline text-red ps-1"
                onClick={resendOtp}
              >
                Click here to resend it
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpModal;

import React, { useState, useEffect } from "react";
import OtpCloseModal from "../assets/icons/close-modal.svg";
import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function OtpModal({ onClose, resendOtp, verifyOtp }) {
  const [otp, setOtp] = useState("");
  const [showResendMsg, setShowResendMsg] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval;
    if (resendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendDisabled]);

  useEffect(() => {
    if (timer === 0) {
      setResendDisabled(false);
      setTimer(60);
    }
  }, [timer]);

  useEffect(() => {
    let timeout;
    if (showResendMsg) {
      timeout = setTimeout(() => {
        setShowResendMsg(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [showResendMsg]);

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerify = () => {
    verifyOtp(otp);
  };

  const handleResend = () => {
    const check = resendOtp();
    if (check) {
      setShowResendMsg(true);
      setResendDisabled(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <div className="z-10 bg-white rounded-lg shadow-lg w-full max-w-[450px]">
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
            <AnimatedButtonWrapper>
              <button
                className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md"
                onClick={handleVerify}
              >
                Verify OTP
              </button>
            </AnimatedButtonWrapper>
          </div>
          <div className="flex justify-between mt-4">
            <span className="pb-4 py-2 font-primary font-medium text-[#6B6B6B] text-[14px] rounded inline-block">
              Didn’t receive the OTP?
              <span
                className={`underline text-red ps-1 cursor-pointer ${
                  resendDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={!resendDisabled ? handleResend : null}
              >
                {resendDisabled
                  ? `Resend in ${timer}s`
                  : "Click here to resend it"}
              </span>
            </span>
          </div>
          {showResendMsg && (
            <p className="text-[#6B6B6B] text-[14px] pb-4">
              OTP resent successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtpModal;

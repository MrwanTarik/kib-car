// PaymentModal.js
import React, { useState, useEffect } from "react";
import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function PaymentModal({ onClose, onPaymentResult, token }) {
  const [paymentInfo, setPaymentInfo] = useState("");

  const handlePayment = () => {
    // onClose();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paytr.com/js/iframeResizer.min.js";
    script.onload = () => iFrameResize({}, "#paytriframe");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center px-[15px]">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>{" "}
      {/* Overlay with reduced opacity */}
      <div className="z-10 p-6 bg-white rounded-lg shadow-lg h-[600px] w-full max-w-[600px]">
        {" "}
        {/* Modal content with higher z-index */}
        <iframe
          className="!overflow-auto !w-full !h-[calc(100%-60px)]"
          src={`https://www.paytr.com/odeme/guvenli/${token}`}
          id="paytriframe"
          frameBorder="0"
          scrolling="no"
          style={{ width: "100%", height: "100%", overflowY: "auto" }}
          onChange={() => console.log("fuck you body")}
        ></iframe>
        <div className="flex justify-between mt-4">
          <AnimatedButtonWrapper>
            <button
              className="px-4 py-[12px]  font-bold text-white bg-red rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </AnimatedButtonWrapper>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;

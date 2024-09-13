import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ForgetPinForm({ car, onCloseModal, sharedData }) {
  return (
    <div className="bg-white rounded-lg  h-[600px] w-full min-w-[600px] max-w-[600px]">
      <iframe
        className="!overflow-auto !w-full !h-[calc(100%-60px)]"
        src={sharedData}
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

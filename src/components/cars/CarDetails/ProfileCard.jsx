function ProfileCard() {
  return (
    <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#eaebf2]">
      <div>
        <p>Ruslan</p>
        <p className="text-secondary text-[14px]">Ganja</p>
      </div>
      <div className="mb-4">
        <svg
          width="50"
          height="50"
          fill="none"
          className="border border-[#d8d8d8] bg-[#d8d8d8] rounded-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 0C11.194 0 0 11.193 0 25s11.193 25 25 25c13.808 0 25-11.193 25-25S38.808 0 25 0zm0 7.476a8.27 8.27 0 110 16.539 8.27 8.27 0 010-16.54zM13.047 39.058a18.347 18.347 0 0011.947 4.406 18.34 18.34 0 0011.95-4.407 3.516 3.516 0 001.235-2.678c0-4.63-3.734-8.337-8.367-8.337H20.19c-4.632 0-8.38 3.706-8.38 8.337 0 1.03.453 2.01 1.237 2.679z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProfileCard;

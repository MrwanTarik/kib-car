function AttentionNote() {
  return (
    <div className="flex items-center gap-x-[5px] mt-[15px] p-[20px] bg-[#ffe6e5] border border-[#ff586d] rounded-lg text-[14px] leading-[17px]">
      <div>
        <svg
          width="34"
          height="32"
          fill="none"
          viewBox="-5 -5 34 32"
          x="261"
          y="338"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.634 16.995L13.973 2.287A2.518 2.518 0 0011.769 1c-.916 0-1.74.477-2.217 1.3L1.366 16.995a2.694 2.694 0 00-.026 2.665c.464.836 1.302 1.34 2.243 1.34h16.834c.94 0 1.779-.504 2.243-1.34a2.694 2.694 0 00-.026-2.665z"
            stroke="#FF586D"
          />
          <path
            d="M13 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"
            fill="#FF586D"
          />
          <path
            d="M12 13.801v-8"
            stroke="#FF586D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p>
        <span className="text-[#ff586d]">Diqqət!</span> Avtomobilə baxış
        keçirmədən öncə beh göndərməyin.
      </p>
    </div>
  );
}

export default AttentionNote;

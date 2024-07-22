function Tabs({ children, active, onClick }) {
  return (
    <h3
      onClick={onClick}
      className={`py-[10px] px-[15px] lg:p-0 rounded-[20px] lg:rounded-none cursor-pointer ${
        active
          ? "bg-red text-white lg:bg-transparent text-[15px] lg:text-red"
          : "bg-[#f6f7fa] text-[#212C3A] text-[15px] font-normal lg:text-secondary"
      }`}
    >
      {children}
    </h3>
  );
}

export default Tabs;

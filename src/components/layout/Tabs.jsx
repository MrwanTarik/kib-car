function Tabs({ children, active, onClick }) {
  return (
    <h3
      onClick={onClick}
      className={` cursor-pointer ${
        active
          ? "font-secondary text-[18px] font-bold text-red"
          : "font-primary text-[14px] font-normal text-secondary"
      }`}
    >
      {children}
    </h3>
  );
}

export default Tabs;

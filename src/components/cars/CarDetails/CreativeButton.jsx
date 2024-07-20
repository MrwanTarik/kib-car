function CreativeButton({ title, price, icon }) {
  return (
    <div className="flex items-center justify-between px-[10px] h-[50px] bg-[#f6f7fa] rounded-[7px]">
      <div className="flex flex-col">
        <p className="text-[13px] text-[#212c3a]">{title}</p>
        <p className="text-[11px] text-link">{`From ${price} AZN`}</p>
      </div>
      <>{icon}</>
    </div>
  );
}

export default CreativeButton;

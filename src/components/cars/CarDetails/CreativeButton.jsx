function CreativeButton({ title, price, icon }) {
  return (
    <div className="flex items-center justify-between pl-[10px] h-[50px] bg-[#f6f7fa] rounded-[7px] hover:bg-[#e8e9ec]">
      <div className="flex flex-col">
        <p className="text-[10px] font-semibold text-[#212c3a]">{title}</p>
        <p className="text-[10px] text-link">{`From ${price} AZN`}</p>
      </div>
      <>{icon}</>
    </div>
  );
}

export default CreativeButton;

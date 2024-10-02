function Accordion({ id, isOpen, onToggle, title, content }) {
  return (
    <div className="collapse collapse-plus bg-white border-b border-solid rounded-md border-[#6b6b6b]]">
      <input
        type="checkbox"
        id={id}
        checked={isOpen}
        onChange={onToggle}
        style={{ display: "none" }} // Hide the checkbox
      />
      <label
        htmlFor={id}
        className="collapse-title font-primary text-[15px] font-bold leading-8 text-[#212C3A]"
      >
        {title}
      </label>
      <div
        className={`collapse-content border-l-[3px] border-[#B62C17] bg-[#f6f7fa] ${
          isOpen ? "py-[20px] px-[25px]" : ""
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
export default Accordion;

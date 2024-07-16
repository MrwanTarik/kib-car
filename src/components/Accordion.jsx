function Accordion({ id, isOpen, onToggle, title, content }) {
  return (
    <div className="collapse collapse-plus bg-white border border-solid rounded-md border-[#6b6b6b]]">
      <input
        type="checkbox"
        id={id}
        checked={isOpen}
        onChange={onToggle}
        style={{ display: "none" }} // Hide the checkbox
      />
      <label
        htmlFor={id}
        className="collapse-title font-primary text-[14px] font-bold leading-8 text-secondary"
      >
        {title}
      </label>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
export default Accordion;

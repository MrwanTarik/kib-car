import { useState } from "react";

export default function ReadMore({ text, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div className="pt-[15px]">
      <p>{isExpanded ? text : `${text.substring(0, maxLength)}...`}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

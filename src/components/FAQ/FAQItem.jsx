import React, { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const FAQItem = ({ item }) => {
  const nodeRef = useRef(null);
  const [desc, setDesc] = useState(false);

  return (
    <div className={desc ? "faq-content-item active" : "faq-content-item"} onClick={() => setDesc((prev) => !prev)}>
      <div className="faq-content-visible">
        <p className="faq-content-item-title">{item.quest}</p>
        <div className="faq-content-item-icon">
          <span>{!desc ? <BsChevronDown /> : <BsChevronUp />}</span>
        </div>
      </div>

      <div className="faq-content-item-desc">
        <p>{desc && item.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;

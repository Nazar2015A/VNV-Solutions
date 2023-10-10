import React from "react";
import "./faq.css";
import { faqData } from "./data.faq";
import FAQItem from "./FAQItem";
import { Slide } from "react-awesome-reveal";

const FAQ = () => {
  return (
    <div className="faq_wrapper">

    <div className="faq_wrapper-content">
      <div className="faq-top">
          <h2>FAQ</h2>

      </div>
      <Slide className="faq-slide" direction="right" triggerOnce>

      <div className="faq-content">
        {faqData.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
      </Slide>
    </div>
    </div>
  );
};

export default FAQ;

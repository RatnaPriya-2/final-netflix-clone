import React, {useState } from "react";
import netflixFAQs from "../../netflixFAQ";
import "../FAQ/FAQ.css";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordion = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="accordion-container">
      <p className="section-heading">Frequently Asked Questions</p>
      {netflixFAQs.map((faq, index) => (
        <>
          <div
            className={`faq-item ${activeIndex === faq.id ? "active" : ""}`}
            key={index}
            onClick={() => handleAccordion(faq.id)}
            id={index}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FAQ;

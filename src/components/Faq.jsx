import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FaqComponent.css";

const faqs = [
  {
    question: "What is avijo's view on data security and Privacy?",
    answer: "",
  },
  {
    question: "What data does avijo have?",
    answer: "",
  },
  {
    question:
      "I am a doctor using your Avijo software, what kind of access do you have to my data stored in Avijo?",
    answer: "",
  },
  {
    question:
      "If you don't have any access to data in Avijo, how can you send those appointment confirmation or feedback collection SMSes to my walk-in patients?",
    answer: "",
  },
  {
    question:
      "How do you distinguish between patients who come to me directly and patients who come to me by booking via avijo's website or app? For both of them, what data can you access?",
    answer: "",
  },
  {
    question:
      "I had a walk-in patient who received marketing communication from avijo. How is this possible?",
    answer: "",
  },
  {
    question:
      "When I ask my walk-in patients to give me a feedback--does that make them avijo's direct online patients?",
    answer: "",
  },
  {
    question:
      "My patients complain of receiving marketing communication from other healthcare companies as soon as they registered at my clinic. Do you sell data?",
    answer: "",
  },
  {
    question:
      "My offline patients receive SMS from avijo software which mentions avijo and that leads them to your website/app. They are not your direct online patients. How can you market to them?",
    answer: "",
  },
  {
    question:
      "I have been asking my patients to go to avijo and book appointment with me there. They are still my patients and not avijo's, hence can you market to them?",
    answer: "",
  },
  {
    question:
      "When I send my patients a prescription through Avijo and when they open it, does that make them avijo's direct online patients?",
    answer: "",
  },
  {
    question:
      "If a Walk-in Patient downloads and signup through avijo app to view prescription etc. shared by the doctor does he/she becomes Online Patient?",
    answer: "",
  },
  {
    question: "Have you ever faced a data breach?",
    answer: "",
  },
  {
    question: "Is my data really safe with Avijo?",
    answer: "",
  },
  {
    question:
      "What specific measures do you use to ensure security of data stored with you?",
    answer: "",
  },
  {
    question:
      "What if I find a security vulnerability in any of your applications?",
    answer: "",
  },
  {
    question:
      "Is avijo compliant with the data security and privacy laws in India?",
    answer: "",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
    if (activeIndex === null) {
      contentRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.maxHeight = "0px";
        }
      });
    } else {
      contentRefs.current.forEach((ref, idx) => {
        if (idx !== activeIndex && ref) {
          ref.style.maxHeight = "0px";
        }
      });
    }
  }, [activeIndex]);

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`faq-answer ${activeIndex === index ? "open" : ""}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;

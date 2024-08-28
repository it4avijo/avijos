import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FaqComponent.css";

const faqs = [
  {
    question: "When and why was ABDM launched?",
    answer:
      "Ayushman Bharat is a Digital Health Mission launched in September 2021, to develop the backbone necessary to support the integrated digital health infrastructure of the country. It will bridge the existing gap amongst different stakeholders of the Healthcare ecosystem through digital highways.",
  },
  {
    question: "What is the ABHA number?",
    answer:
      "ABHA Number is one of the foundation stones of ABDM. Just like Aadhaar number, ABHA ID or Ayushman bharat digital card is a 14-digital number that will be unique to every individual and will help them establish their identity in India's digital health ecosystem. It will also make the process of identifying, authenticating and making health records available and accessible easy.",
  },
  {
    question: "Why do you need to create an ABHA ID?",
    answer:
      "ABHA ID will enable you to create a secure and organised platform (Personal Health Record) to store health records of yourself and your family. It gives you the power to access and share your health information with participating stakeholders to better your treatment. Please note, PHR is secure and highly encrypted. It will protect your data and will only share your data with your healthcare provider after taking your consent.",
  },
  {
    question: "Is creating ABHA ID mandatory?",
    answer:
      "The government has not made ABHA ID mandatory yet, it is completely voluntary. However, if you are a smartphone user and prefer to have access to your healthcare records in a secure, digital safehouse, we recommend you create it as it will give you a host of benefits such as easy access to your records and easy access to authorised doctors for teleconsultations among others.",
  },
  {
    question: "How do I create my ABHA ID?",
    answer:
      "Simply visit this website, enter your driving licence or Aadhar number, enter the OTP sent to your registered mobile number, fill in basic health and profile details and submit your application. Once done, you will have access to your Ayushman Bharat health card/ digital health card.",
  },
  {
    question: "What is UHI?",
    answer:
      "Unified Healthcare Interface is an open platform that allows cross-platform discoverability and delivery of health services. It acts as an open network of health-tech service providers, End User Applications (EUAs/patients) and participating Health Service Providers (HSPs), wherein patients can consult doctors from any participating platform irrespective of the application the doctor uses and vice versa.",
  },
  {
    question: "As a provider, how do I get access to UHI?",
    answer:
      "UHI compliant health-tech providers such as Practo enable you to be a part of UHI. UHI is basically a backend gateway that is opened by health-tech providers that will enable cross-platform consultation. It enables users of the platform to improve their visibility and accessibility without any extra effort from their end.",
  },
  {
    question: "Will my data remain safe if I store it digitally?",
    answer:
      "ABDM is powered by National Health Authority of India. NHA uses high-end encryption to ensure that your data remains safe and can only be accessed by authorised personnel such as your healthcare provider after following a two-step authentication process.",
  },
  {
    question: "In case I need more information, whom do I speak to?",
    answer:
      "If you need more clarity and information, please reach out to us at support@avijo.com and we will revert to your queries at the earliest.",
  },
];

const FaqComponent = () => {
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
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;

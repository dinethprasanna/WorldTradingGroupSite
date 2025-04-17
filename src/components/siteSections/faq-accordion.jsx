import { useState } from "react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-accordion px-5 lg:px-4 mx-auto mt-8 mb-10 md:mt-10 md:mb13 lg:mt-12 lg:mb-15 max-w-[740px] bg-[#223347] rounded-3xl py-11 lg:py-12">
      <div className="accordion-quiz-wrapper grid gap-6">
        {accordionData.map((item, index) => (
          <div key={index} className="grid-cols-1">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-white px-4 py-3 rounded-lg bg-[#A9AEB0] cursor-pointer"
            >
              <span>{item.question}</span>
              <span className="text-white transition-transform duration-300">
                {openIndex === index ? (
                  <img src="/SiteAssests/FAQPage/close-icon.png" alt="close-icon" width="24px" height="24px" />
                ) : (
                    <img src="/SiteAssests/FAQPage/plus-icon.png" alt="plus-icon" width="24px" height="24px" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out mx-2 text-sm md:text-base rounded-b-lg bg-white text-(--dark-grey) ${
                openIndex === index ? "max-h-96 py-7 px-4" : "max-h-0"
              }`}
            >
              <div className="pb-5 text-sm text-slate-500">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const accordionData = [
  {
    "question": "What is online trading?",
    "answer": "It’s buying and selling assets through the internet."
  },
  {
    "question": "Do I need experience to start?",
    "answer": "No, anyone can start with basic guidance."
  },
  {
    "question": "Can I trade on my phone?",
    "answer": "Yes, mobile apps let you trade anytime, anywhere."
  },
  {
    "question": "How do I check my balance?",
    "answer": "Log in to your account and view your dashboard."
  },
  {
    "question": "Is my money safe?",
    "answer": "We use secure systems to protect your funds."
  },
  {
    "question": "What time can I trade?",
    "answer": "You can trade 24/5, Monday to Friday."
  },
  {
    "question": "Where can I learn more?",
    "answer": "Check our website’s Learn section for tips and videos."
  }
];

export default FAQAccordion;

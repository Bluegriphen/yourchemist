"use client";

import React, { useState } from "react";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const faqData = [
  {
    question: "How do I place an order for my prescription online?",
    answer:
      "Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists whenever you need to.",
  },
  {
    question: "How long does prescription delivery take?",
    answer:
      "Once your prescription is approved by our pharmacist, standard delivery typically takes 1 to 2 working days straight to your door.",
  },
  {
    question: "Can I book a private consultation without a GP referral?",
    answer:
      "Yes, you can walk in or book online directly with one of our qualified pharmacists for common conditions without needing a GP appointment first.",
  },
];

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container-page mx-auto">
        <div className="mx-auto w-full max-w-[900px]">
          <h2 className="mb-7 text-center text-[28px] leading-tight sm:mb-10 sm:text-[36px] lg:text-[40px]">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-[5px]"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors sm:px-[21px] sm:py-[18px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-[#F4F4F4] text-main hover:bg-[#ececec]"
                      }`}
                    >
                      <span className="text-sm font-medium leading-6 sm:text-base">
                        {faq.question}
                      </span>
                      <span className="shrink-0" aria-hidden="true">
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    hidden={!isOpen}
                    className="bg-[#F4F4F4] px-4 py-4 sm:px-[21px] sm:py-[18px]"
                  >
                    <p className="text-sm font-normal leading-6 text-gray sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;

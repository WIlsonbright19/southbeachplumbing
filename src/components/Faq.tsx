/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-12 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Label & Heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
              <span
                id="faq-heading"
                className="font-small uppercase tracking-wider block"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.faq.label}
              </span>

              <h2
                className="font-headline-lg m-0"
                style={{ color: "var(--foreground)" }}
              >
                {t.faq.headline}
              </h2>

              <p
                className="font-body m-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                Clear information on emergency dispatch, repair diagnosis, and bilingual coverage in Miami.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {t.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="card-base p-6 sm:p-8 flex flex-col transition-all duration-200"
                  style={{
                    backgroundColor: "var(--background)",
                    borderRadius: "24px",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent border-none p-0 w-full"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-headline-md m-0 text-xl sm:text-2xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.question}
                    </span>

                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-lg transition-transform duration-200"
                      style={{
                        backgroundColor: "var(--muted)",
                        color: "var(--foreground)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 mt-4 border-t" style={{ borderColor: "var(--border)" }}>
                      <p
                        className="font-body m-0 leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

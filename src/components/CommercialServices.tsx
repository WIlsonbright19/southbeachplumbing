/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface CommercialServicesProps {
  onQuoteClick: () => void;
}

export const CommercialServices: React.FC<CommercialServicesProps> = ({
  onQuoteClick,
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="commercial"
      className="py-12 md:py-24"
      aria-labelledby="commercial-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-16 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col gap-3">
            <span
              id="commercial-heading"
              className="font-small uppercase tracking-wider block"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t.commercial.label}
            </span>
            <h2
              className="font-headline-lg m-0"
              style={{ color: "var(--foreground)" }}
            >
              {t.commercial.headline}
            </h2>
          </div>

          <button
            type="button"
            onClick={onQuoteClick}
            className="btn-secondary !min-h-[48px] !px-6 !text-sm self-start sm:self-auto"
          >
            {t.commercial.ctaText}
          </button>
        </div>

        {/* 3 Commercial Property Cards */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.commercial.items.map((item, idx) => (
            <div
              key={idx}
              className="card-base p-6 sm:py-8 sm:px-8 flex flex-col justify-between gap-6"
              style={{
                backgroundColor: "var(--background)",
                borderRadius: "24px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="flex flex-col gap-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium self-start"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--foreground)",
                  }}
                >
                  Commercial / Property
                </span>

                <h3
                  className="font-headline-service m-0"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="font-body m-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="font-small underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 text-left"
                  style={{ color: "var(--foreground)" }}
                >
                  {t.commercial.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

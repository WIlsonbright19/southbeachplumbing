/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="py-12 md:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-10 sm:pb-16 border-b" style={{ borderColor: "var(--border)" }}>
          <span
            id="process-heading"
            className="font-small uppercase tracking-wider block"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.process.label}
          </span>
          <h2
            className="font-headline-lg m-0"
            style={{ color: "var(--foreground)" }}
          >
            {t.process.headline}
          </h2>
        </div>

        {/* Three Columns separated by 1px --border lines on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--border)" }}>
          {t.process.items.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-4 py-8 md:py-12 ${
                idx === 0
                  ? "md:pr-10"
                  : idx === 1
                  ? "md:px-10"
                  : "md:pl-10"
              }`}
            >
              {/* Giant Numeral in Display size */}
              <span
                className="font-display block select-none"
                style={{ color: "var(--muted-foreground)", opacity: 0.8 }}
                aria-hidden="true"
              >
                {step.num}
              </span>

              {/* Title */}
              <h3
                className="font-headline-md m-0 text-2xl sm:text-3xl"
                style={{ color: "var(--foreground)" }}
              >
                {step.title}
              </h3>

              {/* One Sentence description (max 15 words) */}
              <p
                className="font-body m-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const ClimateGuide: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="climate-guide"
      className="py-12 md:py-24"
      aria-labelledby="climate-guide-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col gap-3 pb-10 sm:pb-16 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            id="climate-guide-heading"
            className="font-small uppercase tracking-wider block"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.climate.label}
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="font-headline-lg m-0"
              style={{ color: "var(--foreground)" }}
            >
              {t.climate.headline}
            </h2>
            <p
              className="font-body m-0 max-w-md"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t.climate.description}
            </p>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.climate.items.map((item, idx) => (
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
                  className="font-caption tracking-wider uppercase"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.num}
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

              <div
                className="pt-4 border-t flex items-center justify-between text-xs"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                <span>Miami-Dade Weather Note</span>
                <span className="font-medium" style={{ color: "var(--accent)" }}>
                  ● Preventive Care
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-12 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Small label */}
          <div className="lg:col-span-3">
            <span
              id="about-heading"
              className="font-small uppercase tracking-wider block"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t.about.label}
            </span>
          </div>

          {/* Right/main: Body-lg paragraph & 3 metadata rows */}
          <div className="lg:col-span-9 flex flex-col gap-8 md:gap-14">
            <p
              className="font-body-lg m-0"
              style={{ color: "var(--foreground)" }}
            >
              {t.about.paragraph}
            </p>

            {/* Metadata list: 3 rows with hairline between */}
            <div
              className="border-t flex flex-col"
              style={{ borderColor: "var(--border)" }}
            >
              {t.about.meta.map((row, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 sm:py-5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="font-small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="font-small font-medium text-right"
                    style={{ color: "var(--foreground)" }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

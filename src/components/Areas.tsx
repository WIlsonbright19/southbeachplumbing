/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { AREAS } from "../config/business";
import { IMAGES } from "../config/images";

export const Areas: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="areas"
      className="py-12 md:py-24"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-10 sm:pb-16 border-b" style={{ borderColor: "var(--border)" }}>
          <span
            id="areas-heading"
            className="font-small uppercase tracking-wider block"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.areas.label}
          </span>
          <h2
            className="font-headline-lg m-0"
            style={{ color: "var(--foreground)" }}
          >
            {t.areas.headline}
          </h2>
        </div>

        {/* Image Card with Overlaid Background Card */}
        <div className="pt-10">
          <div
            className="relative w-full rounded-[32px] overflow-hidden card-base border-none min-h-[520px] sm:min-h-[480px] md:min-h-0 md:aspect-[16/9]"
          >
            <div className="relative w-full h-full min-h-[520px] sm:min-h-[480px] md:min-h-0">
              <img
                src={IMAGES.areaImage.src}
                alt={IMAGES.areaImage.alt}
                width={IMAGES.areaImage.width}
                height={IMAGES.areaImage.height}
                decoding="async"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Overlaid --background card: Never text directly on photo */}
              <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-8 right-3 sm:right-6 md:right-auto md:max-w-[560px]">
                <div
                  className="card-base p-5 sm:p-8 md:p-10 flex flex-col gap-3.5 sm:gap-5 md:gap-6"
                  style={{
                    backgroundColor: "var(--background)",
                    borderRadius: "24px",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <span
                      className="font-caption uppercase tracking-wider block text-xs"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Miami-Dade County
                    </span>
                    <h3
                      className="font-headline-md m-0 text-xl sm:text-2xl md:text-3xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.areas.headline}
                    </h3>
                    <p
                      className="font-body m-0 text-sm sm:text-base leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {t.areas.description}
                    </p>
                  </div>

                  {/* Areas Chips */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
                    {AREAS.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-small text-xs sm:text-sm card-base"
                        style={{
                          backgroundColor: "var(--muted)",
                          color: "var(--foreground)",
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-small font-medium text-xs sm:text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.areas.emergencyNotice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

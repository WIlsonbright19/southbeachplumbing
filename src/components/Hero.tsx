/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  WORDMARK_LINES,
} from "../config/business";
import { IMAGES } from "../config/images";

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const { t } = useLanguage();

  return (
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-20" aria-label="Hero">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Small metadata row */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="font-small uppercase tracking-wider"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.hero.badgeLeft}
          </span>
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block animate-pulse"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            <span
              className="font-small font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {t.hero.badgeRight}
            </span>
          </div>
        </div>

        {/* Oversized Wordmark as ONLY H1 on page */}
        <div className="pt-8 sm:pt-14 pb-8 sm:pb-16 text-left">
          <h1
            className="font-display m-0 leading-none"
            style={{ color: "var(--foreground)" }}
          >
            <span className="block">{WORDMARK_LINES[0]}</span>
            <span className="block">{WORDMARK_LINES[1]}</span>
          </h1>
        </div>

        {/* Large framed image card */}
        <div
          className="relative w-full rounded-[32px] overflow-hidden card-base border-none aspect-[4/5] md:aspect-[16/9]"
        >
          <div className="relative w-full h-full">
            <img
              src={IMAGES.heroImage.src}
              alt={IMAGES.heroImage.alt}
              width={IMAGES.heroImage.width}
              height={IMAGES.heroImage.height}
              decoding="async"
              fetchPriority="high"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top-Right Pills Cluster inside the image */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-wrap justify-end gap-2 max-w-[85%] sm:max-w-none">
              {t.hero.pills.map((pill, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-small text-xs sm:text-sm tracking-tight card-base"
                  style={{
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Bottom-Left Overlaid Card */}
            {/* Desktop: bottom-6 left-6 max-w-[560px]. Mobile (<768px): bottom-4 left-4 right-4 */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 md:right-auto md:max-w-[560px]">
              <div
                className="card-base p-6 sm:p-10 flex flex-col gap-4 sm:gap-6"
                style={{
                  backgroundColor: "var(--background)",
                  borderRadius: "24px",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="flex flex-col gap-2">
                  <h2
                    className="font-headline-md m-0"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.hero.headline}
                  </h2>
                  <p
                    className="font-body m-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {t.hero.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="btn-primary inline-flex w-full sm:w-auto items-center justify-center gap-2"
                  >
                    <Phone size={18} aria-hidden="true" />
                    {t.buttons.call}
                  </a>
                  <button
                    type="button"
                    onClick={onQuoteClick}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    {t.buttons.quote}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PHONE_DISPLAY, PHONE_TEL } from "../config/business";

export const CtaCard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24" aria-label="Direct Call Dispatch">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div
          className="rounded-[32px] p-8 sm:p-14 lg:p-20 text-center flex flex-col items-center gap-6 sm:gap-8"
          style={{
            backgroundColor: "var(--secondary)",
            color: "var(--white)",
          }}
        >
          <div className="max-w-2xl flex flex-col gap-4">
            <h2
              className="font-headline-lg m-0"
              style={{ color: "var(--white)" }}
            >
              {t.ctaCard.headline}
            </h2>
            <p
              className="font-body-lg m-0"
              style={{ color: "var(--white)", opacity: 0.8 }}
            >
              {t.ctaCard.description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span
              className="font-caption uppercase tracking-wider"
              style={{ color: "var(--white)", opacity: 0.7 }}
            >
              {t.ctaCard.phonePrompt}
            </span>
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-display no-underline tracking-tight transition-opacity hover:opacity-90"
              style={{ color: "var(--accent)" }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="pt-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-primary inline-flex items-center justify-center gap-2 !min-h-[58px] !px-8"
            >
              <Phone size={18} aria-hidden="true" />
              {t.buttons.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

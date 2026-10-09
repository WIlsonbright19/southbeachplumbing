/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  NAME,
  ADDRESS_LINE,
  LICENSE_LINE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../config/business";

export const Footer: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="pt-12 sm:pt-20 pb-12 border-t"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 flex flex-col gap-12 sm:gap-16">
        {/* Top Row: Business Identity & Direct Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          <div className="md:col-span-6 flex flex-col gap-4">
            <h3
              className="font-headline-md m-0 text-2xl sm:text-3xl"
              style={{ color: "var(--foreground)" }}
            >
              {NAME}
            </h3>
            <p
              className="font-body m-0"
              style={{ color: "var(--muted-foreground)" }}
            >
              {LICENSE_LINE}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            <div className="flex flex-col md:text-right gap-1">
              <span
                className="font-caption uppercase tracking-wider"
                style={{ color: "var(--muted-foreground)" }}
              >
                Miami Office & Dispatch
              </span>
              <p
                className="font-small m-0"
                style={{ color: "var(--foreground)" }}
              >
                {ADDRESS_LINE}
              </p>
            </div>

            <div className="flex flex-col md:text-right gap-1 pt-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-headline-md no-underline text-2xl font-medium hover:opacity-80 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                {PHONE_DISPLAY}
              </a>
              <span
                className="font-caption"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.footer.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright, Language Switcher, Back to Top */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t text-xs"
          style={{
            borderColor: "var(--border)",
            color: "var(--muted-foreground)",
          }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span>
              © {new Date().getFullYear()} {NAME}. {t.footer.rights}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Inline Language Switcher */}
            <div
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "var(--muted)",
                color: "var(--foreground)",
              }}
            >
              <button
                type="button"
                onClick={() => setLang("en")}
                className="px-2 py-0.5 rounded-full cursor-pointer"
                style={{
                  opacity: lang === "en" ? 1 : 0.4,
                  fontWeight: lang === "en" ? 500 : 400,
                }}
              >
                EN
              </button>
              <span className="opacity-30">|</span>
              <button
                type="button"
                onClick={() => setLang("es")}
                className="px-2 py-0.5 rounded-full cursor-pointer"
                style={{
                  opacity: lang === "es" ? 1 : 0.4,
                  fontWeight: lang === "es" ? 500 : 400,
                }}
              >
                ES
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0"
              style={{ color: "var(--foreground)" }}
            >
              {t.footer.backToTop} ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

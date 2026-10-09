/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  ADDRESS_LINE,
  WORDMARK_LINES,
} from "../config/business";

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle keyboard trap/escape when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setDrawerOpen(false);
          hamburgerRef.current?.focus();
        } else if (e.key === "Tab" && drawerRef.current) {
          const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Focus first element in drawer
      const timer = setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timer);
      };
    } else {
      hamburgerRef.current?.focus();
    }
  }, [drawerOpen]);

  const navLinks = [
    { num: "01", label: t.nav.services, href: "#services" },
    { num: "02", label: t.nav.howItWorks, href: "#process" },
    { num: "03", label: t.nav.reviews, href: "#reviews" },
    { num: "04", label: t.nav.areas, href: "#areas" },
    { num: "05", label: t.nav.faq, href: "#faq" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  };

  const handleQuoteClick = () => {
    setDrawerOpen(false);
    onQuoteClick();
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-colors duration-200"
        style={{
          backgroundColor: isScrolled ? "var(--background)" : "transparent",
          borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 h-[80px] flex items-center justify-between gap-4">
          {/* Left: Wordmark */}
          <a
            href="#"
            className="flex flex-col text-left no-underline cursor-pointer group"
            style={{ color: "var(--foreground)" }}
            aria-label="South Beach Plumbing and HVAC home"
          >
            <span className="font-small font-medium text-base tracking-tight leading-tight">
              {WORDMARK_LINES[0]} {WORDMARK_LINES[1]}
            </span>
          </a>

          {/* Desktop Nav (1024px and up) */}
          <nav
            className="hidden lg:flex items-center gap-8 text-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-small no-underline transition-opacity hover:opacity-70 py-2"
                style={{ color: "var(--foreground)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Language toggle + Call button (desktop only) + Mobile Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* EN | ES Language Switcher (Desktop only; on mobile it lives inside the drawer) */}
            <div
              className="hidden lg:inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "var(--muted)",
                color: "var(--foreground)",
              }}
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang("en")}
                className="px-2 py-1 rounded-full transition-opacity cursor-pointer"
                style={{
                  opacity: lang === "en" ? 1 : 0.4,
                  fontWeight: lang === "en" ? 500 : 400,
                }}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <span className="opacity-30">|</span>
              <button
                type="button"
                onClick={() => setLang("es")}
                className="px-2 py-1 rounded-full transition-opacity cursor-pointer"
                style={{
                  opacity: lang === "es" ? 1 : 0.4,
                  fontWeight: lang === "es" ? 500 : 400,
                }}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
            </div>

            {/* Desktop Primary Call Pill */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden lg:inline-flex items-center justify-center gap-2 btn-primary !min-h-[48px] !px-5 !text-sm"
              aria-label={t.buttons.call}
            >
              <Phone size={18} aria-hidden="true" />
              {t.buttons.call}
            </a>

            {/* Hamburger Button (below 1024px) */}
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: "var(--muted)",
                color: "var(--foreground)",
              }}
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={drawerOpen ? t.buttons.close : t.buttons.menu}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className="w-5 h-0.5 rounded-full transition-transform duration-300 origin-center"
                  style={{
                    backgroundColor: "var(--foreground)",
                    transform: drawerOpen
                      ? "translateY(7px) rotate(45deg)"
                      : "none",
                  }}
                />
                <span
                  className="w-5 h-0.5 rounded-full transition-opacity duration-300"
                  style={{
                    backgroundColor: "var(--foreground)",
                    opacity: drawerOpen ? 0 : 1,
                  }}
                />
                <span
                  className="w-5 h-0.5 rounded-full transition-transform duration-300 origin-center"
                  style={{
                    backgroundColor: "var(--foreground)",
                    transform: drawerOpen
                      ? "translateY(-7px) rotate(-45deg)"
                      : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* DRAWER (Slide-in right panel) */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop: #000000 at 40% opacity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 cursor-pointer"
              style={{ backgroundColor: "#000000" }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-navigation-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 flex flex-col justify-between overflow-y-auto p-6 sm:p-10 rounded-l-[32px] shadow-2xl"
              style={{
                width: "min(92vw, 520px)",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
            >
              {/* Top Row: Language Toggle & Close Button */}
              <div className="flex items-center justify-between pb-6 border-b" style={{ borderColor: "var(--border)" }}>
                <div
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--foreground)",
                  }}
                  role="group"
                  aria-label="Language selection drawer"
                >
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className="px-2.5 py-1 rounded-full cursor-pointer"
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
                    className="px-2.5 py-1 rounded-full cursor-pointer"
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
                  onClick={() => setDrawerOpen(false)}
                  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-70"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--foreground)",
                  }}
                  aria-label={t.buttons.close}
                >
                  <span className="text-xl leading-none">✕</span>
                </button>
              </div>

              {/* Stacked Nav Links with Stagger */}
              <nav className="my-8 flex flex-col gap-6" aria-label="Mobile Menu Links">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + idx * 0.06,
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="flex flex-col"
                  >
                    <span
                      className="font-caption tracking-wider uppercase mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {item.num}
                    </span>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="font-headline-md no-underline transition-opacity hover:opacity-70 py-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Actions and Metadata */}
              <div className="pt-6 border-t flex flex-col gap-4" style={{ borderColor: "var(--border)" }}>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2"
                >
                  <Phone size={18} aria-hidden="true" />
                  {t.buttons.call}
                </a>

                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="btn-secondary w-full"
                >
                  {t.buttons.quote}
                </button>

                <div
                  className="flex items-center justify-between text-xs pt-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="truncate pr-2">{ADDRESS_LINE}</span>
                  <span className="font-medium shrink-0">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

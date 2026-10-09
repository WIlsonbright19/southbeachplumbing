/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, type Variants } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { type ServiceItem } from "../config/content";

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onQuoteClick: () => void;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: (i % 2) * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  }),
};

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onQuoteClick,
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-12 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Sticky on Desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
              <span
                id="services-heading"
                className="font-small uppercase tracking-wider block"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.services.label}
              </span>

              <h2
                className="font-headline-lg m-0"
                style={{ color: "var(--foreground)" }}
              >
                {t.services.headline}
              </h2>

              <p
                className="font-small m-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.services.subtitle}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="font-small underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 text-left"
                  style={{ color: "var(--foreground)" }}
                >
                  {t.services.quoteLink}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Exactly 8 cards with 24px gap */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {t.services.items.map((service, idx) => (
              <motion.div
                key={service.id}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="card-base p-6 sm:py-6 sm:px-10 flex flex-col gap-4 transition-transform hover:-translate-y-0.5 duration-150"
                style={{
                  backgroundColor: "var(--background)",
                  borderRadius: "24px",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Number & Tag Header */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-caption tracking-wider uppercase"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {service.num}
                  </span>

                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor:
                        service.tag === "Plumbing"
                          ? "var(--muted)"
                          : "var(--accent-pale)",
                      color:
                        service.tag === "Plumbing"
                          ? "var(--foreground)"
                          : "#000000",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Service Title in reduced Headline-md */}
                <h3
                  className="font-headline-service m-0"
                  style={{ color: "var(--foreground)" }}
                >
                  {service.title}
                </h3>

                {/* One-line Description */}
                <p
                  className="font-body m-0"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {service.description}
                </p>

                {/* Underlined 'Request this' link */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="font-small underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 text-left"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.buttons.requestThis}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

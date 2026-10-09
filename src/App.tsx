/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PerformanceStats } from "./components/PerformanceStats";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Reviews } from "./components/Reviews";
import { Areas } from "./components/Areas";
import { Faq } from "./components/Faq";
import { ClimateGuide } from "./components/ClimateGuide";
import { CommercialServices } from "./components/CommercialServices";
import { QuoteForm } from "./components/QuoteForm";
import { CtaCard } from "./components/CtaCard";
import { Footer } from "./components/Footer";
import { type ServiceItem } from "./config/content";

function MainContent() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");

  const scrollToQuoteForm = () => {
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceId(service.id);
    scrollToQuoteForm();
  };

  return (
    <div
      className="min-h-screen flex flex-col selection:bg-[#fb6400] selection:text-black"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* 1. Header & Drawer */}
      <Header onQuoteClick={scrollToQuoteForm} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onQuoteClick={scrollToQuoteForm} />

        {/* 3. About */}
        <About />

        {/* 4. Performance Stats (Operational Readiness) */}
        <PerformanceStats />

        {/* 5. Services */}
        <Services
          onSelectService={handleSelectService}
          onQuoteClick={scrollToQuoteForm}
        />

        {/* 5. Process */}
        <Process />

        {/* 6. Reviews */}
        <Reviews />

        {/* 7. Areas */}
        <Areas />

        {/* 8. FAQ */}
        <Faq />

        {/* 9. Miami Climate & Home Care */}
        <ClimateGuide />

        {/* 10. Commercial & Property Services */}
        <CommercialServices onQuoteClick={scrollToQuoteForm} />

        {/* 11. Quote Form */}
        <QuoteForm selectedServiceId={selectedServiceId} />

        {/* 12. Final CTA Card */}
        <CtaCard />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

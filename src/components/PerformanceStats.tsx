/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Skeleton } from "./Skeleton";

interface PerformanceStatsProps {
  initialLoading?: boolean;
}

export const PerformanceStats: React.FC<PerformanceStatsProps> = ({
  initialLoading = true,
}) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(initialLoading);

  useEffect(() => {
    // Initial render skeleton reveal transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="performance-stats"
      className="py-12 md:py-24"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col gap-3 pb-10 sm:pb-16 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            id="stats-heading"
            className="font-small uppercase tracking-wider block"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.stats.label}
          </span>
          <h2
            className="font-headline-lg m-0"
            style={{ color: "var(--foreground)" }}
          >
            {t.stats.headline}
          </h2>
        </div>

        {/* Stats Grid: Skeletons vs Content */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={`skeleton-stat-${idx}`}
                  className="card-base p-6 sm:p-8 flex flex-col justify-between gap-6"
                  style={{
                    backgroundColor: "var(--background)",
                    borderRadius: "24px",
                    boxShadow: "var(--shadow-card)",
                  }}
                  aria-label="Loading performance statistic..."
                >
                  <div className="flex flex-col gap-3">
                    <Skeleton className="h-12 w-24 rounded-lg" />
                    <Skeleton className="h-6 w-36 rounded-md mt-2" />
                  </div>
                  <div className="flex flex-col gap-2 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-3/4 rounded-md" />
                  </div>
                </div>
              ))
            : t.stats.items.map((stat, idx) => (
                <div
                  key={idx}
                  className="card-base p-6 sm:p-8 flex flex-col justify-between gap-6 transition-transform hover:-translate-y-0.5 duration-150"
                  style={{
                    backgroundColor: "var(--background)",
                    borderRadius: "24px",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-display leading-none block"
                      style={{ color: "var(--accent)" }}
                    >
                      {stat.value}
                    </span>
                    <h3
                      className="font-headline-service m-0 text-xl font-medium pt-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      {stat.label}
                    </h3>
                  </div>

                  <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <p
                      className="font-small m-0"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

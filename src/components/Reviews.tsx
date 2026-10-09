/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GOOGLE_REVIEWS_URL } from "../config/business";
import { Skeleton } from "./Skeleton";

interface ReviewsProps {
  initialLoading?: boolean;
}

export const Reviews: React.FC<ReviewsProps> = ({ initialLoading = true }) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(initialLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="reviews"
      className="py-12 md:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 sm:pb-16 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="flex flex-col gap-3">
            <span
              id="reviews-heading"
              className="font-small uppercase tracking-wider block"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t.reviews.label}
            </span>
            <h2
              className="font-headline-lg m-0"
              style={{ color: "var(--foreground)" }}
            >
              {t.reviews.headline}
            </h2>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-small underline underline-offset-4 hover:opacity-70 transition-opacity self-start sm:self-auto py-1"
            style={{ color: "var(--foreground)" }}
          >
            {t.reviews.googleLink} ↗
          </a>
        </div>

        {/* Reviews Cards: Skeleton vs Loaded Content */}
        <div className="pt-10 flex flex-col gap-6">
          {loading ? (
            <>
              {/* Featured Skeleton Card */}
              <div
                className="card-base p-6 sm:py-10 sm:px-12 flex flex-col gap-6"
                style={{
                  backgroundColor: "var(--background)",
                  borderRadius: "24px",
                  boxShadow: "var(--shadow-card)",
                }}
                aria-label="Loading featured client story..."
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-36 rounded-full" />
                  <Skeleton className="h-5 w-24 rounded-md" />
                </div>
                <div className="flex flex-col gap-3 py-2">
                  <Skeleton className="h-7 w-11/12 rounded-md" />
                  <Skeleton className="h-7 w-4/5 rounded-md" />
                </div>
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                  <Skeleton className="h-4 w-32 rounded-md" />
                  <Skeleton className="h-4 w-20 rounded-md" />
                </div>
              </div>

              {/* 3 Grid Skeleton Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={`skeleton-review-${idx}`}
                    className="card-base p-6 sm:py-8 sm:px-8 flex flex-col justify-between gap-6"
                    style={{
                      backgroundColor: "var(--background)",
                      borderRadius: "24px",
                      boxShadow: "var(--shadow-card)",
                    }}
                    aria-label="Loading client story..."
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-28 rounded-full" />
                        <Skeleton className="h-4 w-20 rounded-md" />
                      </div>
                      <div className="flex flex-col gap-2 pt-2">
                        <Skeleton className="h-4 w-full rounded-md" />
                        <Skeleton className="h-4 w-10/12 rounded-md" />
                        <Skeleton className="h-4 w-3/4 rounded-md" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                      <Skeleton className="h-4 w-28 rounded-md" />
                      <Skeleton className="h-4 w-20 rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Featured Full-Width Card */}
              <div
                className="card-base p-6 sm:py-10 sm:px-12 flex flex-col gap-6"
                style={{
                  backgroundColor: "var(--background)",
                  borderRadius: "24px",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "var(--muted)",
                      color: "var(--foreground)",
                    }}
                  >
                    {t.reviews.featured.category}
                  </span>
                  <span
                    className="font-small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {t.reviews.featured.location}
                  </span>
                </div>

                <p
                  className="font-headline-md m-0 text-xl sm:text-2xl leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  &ldquo;{t.reviews.featured.text}&rdquo;
                </p>

                <div className="flex items-center justify-between text-xs pt-2 border-t" style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
                  <span className="font-medium" style={{ color: "var(--foreground)" }}>{t.reviews.featured.author}</span>
                  <span>{t.reviews.featured.location}</span>
                </div>
              </div>

              {/* Grid of 3 additional review cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.reviews.items.map((item, idx) => (
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
                      <div className="flex items-center justify-between">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "var(--muted)",
                            color: "var(--foreground)",
                          }}
                        >
                          {item.category}
                        </span>
                        <span
                          className="font-caption"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {item.location}
                        </span>
                      </div>

                      <p
                        className="font-body m-0 text-lg"
                        style={{ color: "var(--foreground)" }}
                      >
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3 border-t" style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
                      <span className="font-medium" style={{ color: "var(--foreground)" }}>{item.author}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export const ClientStories = Reviews;

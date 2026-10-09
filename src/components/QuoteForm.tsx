/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PHONE_DISPLAY, PHONE_TEL } from "../config/business";

interface QuoteFormProps {
  selectedServiceId?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ selectedServiceId }) => {
  const { t } = useLanguage();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(selectedServiceId || "");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    service?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if selectedServiceId changes externally
  React.useEffect(() => {
    if (selectedServiceId) {
      setService(selectedServiceId);
    }
  }, [selectedServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string; service?: string } = {};

    if (!fullName.trim()) {
      newErrors.name = t.form.errors.name;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!phone.trim() || cleanPhone.length < 7) {
      newErrors.phone = t.form.errors.phone;
    }

    if (!service) {
      newErrors.service = t.form.errors.service;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section
      id="quote-form"
      className="py-12 md:py-24"
      aria-labelledby="quote-form-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span
                id="quote-form-heading"
                className="font-small uppercase tracking-wider block"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.form.label}
              </span>

              <h2
                className="font-headline-lg m-0"
                style={{ color: "var(--foreground)" }}
              >
                {t.form.headline}
              </h2>

              <p
                className="font-body m-0"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.form.description}
              </p>
            </div>

            <div
              className="card-base p-6 sm:p-8 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--background)",
                borderRadius: "24px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span
                className="font-caption uppercase tracking-wider block"
                style={{ color: "var(--muted-foreground)" }}
              >
                Emergency Dispatch
              </span>
              <p className="font-small m-0" style={{ color: "var(--foreground)" }}>
                Need urgent service right away? Call our dispatch line directly.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-headline-md no-underline font-medium hover:opacity-80 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right Column: White Form Card */}
          <div className="lg:col-span-7">
            <div
              className="p-6 sm:p-12 border"
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "24px",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-start gap-6 py-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--muted)" }}
                  >
                    <span className="text-2xl" style={{ color: "var(--accent)" }}>✓</span>
                  </div>

                  <h3
                    className="font-headline-md m-0"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.form.successMessage}
                  </h3>

                  <p
                    className="font-body m-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Our technicians are reviewing your request for immediate dispatch.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary !min-h-[48px] !px-6 !text-sm mt-2"
                  >
                    {t.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-name"
                      className="font-small font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.form.nameLabel} *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl text-base outline-none transition-colors border"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--foreground)",
                        borderColor: errors.name ? "var(--destructive)" : "var(--muted-foreground)",
                      }}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <span
                        id="name-error"
                        className="font-caption"
                        style={{ color: "var(--destructive)" }}
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-phone"
                      className="font-small font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.form.phoneLabel} *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl text-base outline-none transition-colors border"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--foreground)",
                        borderColor: errors.phone ? "var(--destructive)" : "var(--muted-foreground)",
                      }}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <span
                        id="phone-error"
                        className="font-caption"
                        style={{ color: "var(--destructive)" }}
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Service Needed Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-service"
                      className="font-small font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.form.serviceLabel} *
                    </label>
                    <select
                      id="form-service"
                      required
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                      }}
                      className="w-full px-4 py-3.5 rounded-xl text-base outline-none transition-colors border cursor-pointer"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--foreground)",
                        borderColor: errors.service ? "var(--destructive)" : "var(--muted-foreground)",
                      }}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="">{t.form.servicePlaceholder}</option>
                      {t.services.items.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.num} - {item.title} ({item.tag})
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span
                        id="service-error"
                        className="font-caption"
                        style={{ color: "var(--destructive)" }}
                      >
                        {errors.service}
                      </span>
                    )}
                  </div>

                  {/* Message / Details */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-message"
                      className="font-small font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.form.messagePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl text-base outline-none transition-colors border resize-y"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--foreground)",
                        borderColor: "var(--muted-foreground)",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full text-center"
                    >
                      {isSubmitting ? t.buttons.submitting : t.buttons.submitQuote}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

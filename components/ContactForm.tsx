"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactForm, brand } from "@/data/content";

type FormState = {
  name: string;
  contact: string;
  service: string;
  comment: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    service: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = "Пожалуйста, введите ваше имя";
    if (!form.contact.trim()) newErrors.contact = "Пожалуйста, введите телефон или Telegram";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // Silent — always show success
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#EDE8E0] text-[14px] text-[#2C2C2C] font-light placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#C9A882] transition-all duration-200";

  const inputStyle = { boxShadow: "none" };

  const focusProps = (el: HTMLElement | null) => {
    if (el) el.style.boxShadow = "0 0 0 3px rgba(201,168,130,0.15)";
  };
  const blurProps = (el: HTMLElement | null) => {
    if (el) el.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A882]" />
              <span className="text-[11px] tracking-[0.3em] text-[#C9A882] uppercase font-light">
                Контакт
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {contactForm.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[15px] text-[#6B6B6B] font-light leading-relaxed mb-12 max-w-sm"
            >
              {contactForm.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              {[
                { label: "Телефон", value: brand.phone, href: `tel:${brand.phone.replace(/\D/g, "")}` },
                { label: "Telegram", value: brand.telegram, href: `https://t.me/${brand.telegram.replace("@", "")}` },
                { label: "WhatsApp", value: brand.whatsapp, href: `https://wa.me/${brand.whatsapp}` },
                { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                { label: "Адрес", value: brand.address, href: undefined },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[11px] tracking-[0.2em] text-[#9E9E9E] uppercase font-light mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[14px] text-[#2C2C2C] font-light hover:text-[#C9A882] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-[14px] text-[#2C2C2C] font-light">{item.value}</div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form / success */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] as const }}
                  className="p-10 border border-[#EDE8E0] bg-[#FEFCF9]"
                  style={{ boxShadow: "0 4px 32px rgba(44,44,44,0.06)" }}
                >
                  {/* Checkmark icon */}
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-full mb-8"
                    style={{ background: "rgba(201,168,130,0.15)" }}
                  >
                    <svg
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 8L7.5 14L20.5 1"
                        stroke="#C9A882"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="text-[11px] tracking-[0.28em] text-[#C9A882] uppercase font-light mb-4">
                    Успешно
                  </div>

                  <h3
                    className="text-3xl font-light text-[#2C2C2C] mb-5 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {contactForm.successTitle}
                  </h3>

                  <p className="text-[15px] text-[#6B6B6B] font-light leading-relaxed mb-8">
                    {contactForm.successText}
                  </p>

                  <div className="w-8 h-px bg-[#C9A882] mb-8 opacity-60" />

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", contact: "", service: "", comment: "" });
                    }}
                    className="text-[12px] tracking-[0.15em] text-[#9E9E9E] uppercase font-light hover:text-[#2C2C2C] transition-colors duration-200"
                  >
                    Отправить ещё одну заявку
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={contactForm.fields.name}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => focusProps(e.target)}
                      onBlur={(e) => blurProps(e.target)}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[12px] text-red-400 font-light">{errors.name}</p>
                    )}
                  </div>

                  {/* Contact */}
                  <div>
                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder={contactForm.fields.contact}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => focusProps(e.target)}
                      onBlur={(e) => blurProps(e.target)}
                      autoComplete="tel"
                    />
                    {errors.contact && (
                      <p className="mt-1.5 text-[12px] text-red-400 font-light">
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      style={inputStyle}
                      onFocus={(e) => focusProps(e.target)}
                      onBlur={(e) => blurProps(e.target)}
                    >
                      <option value="">{contactForm.fields.service}</option>
                      {contactForm.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Comment */}
                  <div>
                    <textarea
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder={contactForm.fields.comment}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      onFocus={(e) => focusProps(e.target)}
                      onBlur={(e) => blurProps(e.target)}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`mt-2 w-full py-4 text-[#FAF8F5] text-[12px] tracking-[0.2em] uppercase font-light transition-colors duration-200 ${
                      loading
                        ? "bg-[#5A5A5A] cursor-not-allowed"
                        : "bg-[#2C2C2C] hover:bg-[#1a1a1a]"
                    }`}
                    whileHover={loading ? {} : { y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {loading ? "Отправка..." : contactForm.submit}
                  </motion.button>

                  <p className="text-[11px] text-[#9E9E9E] font-light text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

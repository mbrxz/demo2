"use client";

import { motion } from "framer-motion";
import { benefits } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
};

const benefitIcons = [
  // Certificate / medal
  <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="11" r="8" stroke="#C9A882" strokeWidth="1.2" />
    <path
      d="M9.5 18.5 L14 26 L18.5 18.5"
      stroke="#C9A882"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="14" cy="11" r="3.5" stroke="#C9A882" strokeWidth="0.8" />
  </svg>,
  // Person / individual
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="9" r="5" stroke="#C9A882" strokeWidth="1.2" />
    <path
      d="M4 27 C4 21 8.5 17 14 17 C19.5 17 24 21 24 27"
      stroke="#C9A882"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>,
  // Leaf / botanical
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 2 C20 7 22 18 14 26 C6 18 8 7 14 2Z"
      stroke="#C9A882"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M14 2 Q12 12 14 26"
      stroke="#C9A882"
      strokeWidth="0.7"
      strokeLinecap="round"
    />
  </svg>,
  // Home / location
  <svg key="3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M3 13 L14 3 L25 13 L25 26 L18 26 L18 18 L10 18 L10 26 L3 26 Z"
      stroke="#C9A882"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>,
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-[#F5E8E0]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A882]" />
            <span className="text-[11px] tracking-[0.3em] text-[#C9A882] uppercase font-light">
              Почему выбирают меня
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Преимущества
          </h2>
        </motion.div>

        {/* Grid with visible dividers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#D4B896] border-opacity-30"
          style={{ borderColor: "rgba(212,184,150,0.3)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={[
                "flex flex-col gap-6 p-8 xl:p-10",
                // Right border on all but last in lg row
                i < benefits.length - 1
                  ? "border-b border-r-0 lg:border-b-0 lg:border-r"
                  : "",
                // MD: right border on odd (0, 2), remove on even
                i % 2 === 0 ? "md:border-r" : "md:border-r-0",
                // MD: last row no bottom
                i >= benefits.length - 2 ? "md:border-b-0" : "md:border-b",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ borderColor: "rgba(212,184,150,0.3)" }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0"
                style={{ background: "rgba(201, 168, 130, 0.14)" }}
              >
                {benefitIcons[i]}
              </div>

              <h3
                className="text-2xl font-light text-[#2C2C2C] leading-snug"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {b.title}
              </h3>

              <p className="text-[14px] leading-[1.75] text-[#6B6B6B] font-light">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

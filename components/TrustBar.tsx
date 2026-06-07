"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "лет практики" },
  { value: "1200+", label: "процедур" },
  { value: "120+", label: "отзывов" },
  { value: "100%", label: "индивидуальный подход" },
];

export default function TrustBar() {
  return (
    <section
      className="py-10 md:py-12 overflow-hidden"
      style={{ background: "#2C2C2C" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center gap-1.5 py-5 md:py-0 ${
                i < stats.length - 1 ? "border-r border-[#3A3A3A]" : ""
              } ${i < 2 ? "border-b border-[#3A3A3A] md:border-b-0" : ""}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
            >
              <span
                className="text-3xl md:text-4xl font-light text-[#FAF8F5] leading-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#5A5A5A] uppercase font-light text-center px-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

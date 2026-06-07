"use client";

import { motion } from "framer-motion";

export default function CTABlock() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FAF8F5 0%, #F5E8E0 50%, #FAF8F5 100%)",
      }}
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.045]"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle cx="350" cy="350" r="300" stroke="#C9A882" strokeWidth="1" />
          <circle cx="350" cy="350" r="220" stroke="#C9A882" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="140" stroke="#C9A882" strokeWidth="1" />
          <circle cx="350" cy="350" r="60" stroke="#C9A882" strokeWidth="0.5" />
          <line x1="50" y1="350" x2="650" y2="350" stroke="#C9A882" strokeWidth="0.4" />
          <line x1="350" y1="50" x2="350" y2="650" stroke="#C9A882" strokeWidth="0.4" />
          <line x1="138" y1="138" x2="562" y2="562" stroke="#C9A882" strokeWidth="0.3" />
          <line x1="562" y1="138" x2="138" y2="562" stroke="#C9A882" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#C9A882]" />
            <span className="text-[11px] tracking-[0.3em] text-[#C9A882] uppercase font-light">
              Бесплатная консультация
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>

          <h2
            className="font-light text-[#2C2C2C] mb-7 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(36px, 4.2vw, 58px)",
            }}
          >
            Не знаете какая процедура<br className="hidden sm:block" /> подойдёт именно вам?
          </h2>

          <p className="text-[17px] text-[#6B6B6B] font-light leading-relaxed mb-12 max-w-lg mx-auto">
            На консультации разберём состояние кожи и подберём оптимальный уход.
            Первичная консультация — бесплатно.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-12 py-[18px] bg-[#2C2C2C] text-[#FAF8F5] text-[12px] tracking-[0.2em] uppercase font-light transition-colors duration-200 hover:bg-[#1a1a1a]"
            whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(44,44,44,0.18)" }}
            transition={{ duration: 0.25 }}
          >
            Получить консультацию
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path
                d="M9 1l4 4-4 4M1 5h12"
                stroke="#C9A882"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

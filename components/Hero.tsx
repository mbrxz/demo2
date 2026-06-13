"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, brand } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.13, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative bg-[#FAF8F5] overflow-hidden lg:min-h-screen">

      {/* ── Mobile: photo at top ─────────────────────────────── */}
      <div
        className="lg:hidden relative w-full overflow-hidden"
        style={{ height: "min(85vw, 420px)", marginTop: "60px" }}
      >
        <Image
          src="/photo make.png"
          alt="Елена Романова"
          fill
          className="object-cover object-top"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,248,245,0.08) 0%, transparent 20%, transparent 50%, rgba(250,248,245,0.45) 75%, #FAF8F5 100%)",
          }}
        />
      </div>

      {/* ── Desktop: photo fills right 55% to viewport edge ─── */}
      <motion.div
        className="hidden lg:block absolute top-0 right-0 bottom-0"
        style={{ left: "45%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <Image
          src="/photo make.png"
          alt="Елена Романова — косметолог-эстетист"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Blend from cream into photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #FAF8F5 0%, rgba(250,248,245,0.6) 10%, transparent 22%)",
          }}
        />

        {/* Specialist name badge */}
        <motion.div
          className="absolute bottom-10 left-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
          style={{
            background: "rgba(250, 248, 245, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(201, 168, 130, 0.25)",
            boxShadow: "0 16px 48px rgba(44, 44, 44, 0.10)",
            padding: "22px 28px",
          }}
        >
          <div
            className="text-[20px] font-light text-[#2C2C2C] leading-snug mb-1"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {brand.name}
          </div>
          <div className="text-[11px] tracking-[0.22em] text-[#9E9E9E] font-light uppercase mb-3">
            Косметолог-эстетист
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#C9A882] to-transparent mb-3" />
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="#C9A882" strokeWidth="0.8"/>
              <circle cx="6" cy="6" r="2" fill="#C9A882"/>
            </svg>
            <span className="text-[10px] tracking-[0.18em] text-[#C9A882] font-light uppercase">
              Медицинское образование
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Content column (45% on desktop) ─────────────────── */}
      <div className="relative lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
        <div className="w-full lg:w-[45%] px-6 sm:px-10 xl:px-20 pt-8 pb-16 lg:pt-36 lg:pb-24">

          {/* Studio eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6 sm:mb-10"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="w-6 h-px bg-[#C9A882]" />
            <span className="text-[10px] tracking-[0.32em] text-[#C9A882] uppercase font-light">
              {brand.studio}
            </span>
          </motion.div>

          {/* Main heading — primary visual element */}
          <motion.h1
            className="font-light text-[#2C2C2C] leading-[0.92] mb-8"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(38px, 9.5vw, 92px)",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {hero.heading.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="italic font-light">{line}</em> : line}
              </span>
            ))}
          </motion.h1>

          {/* Subheading — larger and more readable */}
          <motion.p
            className="text-[17px] leading-[1.8] text-[#6B6B6B] font-light max-w-[340px] mb-10"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {hero.subheading}
          </motion.p>

          {/* CTA button */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-[18px] bg-[#2C2C2C] text-[#FAF8F5] text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-200 hover:bg-[#1a1a1a]"
              whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(44,44,44,0.18)" }}
              transition={{ duration: 0.25 }}
            >
              {hero.ctaPrimary}
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

          {/* Trust bar */}
          <motion.div
            className="mt-9 pt-8 border-t border-[#EDE8E0]"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#C9A882] text-[13px] tracking-wide">★★★★★</span>
              <span className="text-[13px] text-[#6B6B6B] font-light">120+ отзывов клиентов</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {["8+ лет практики", "1200+ процедур", "Индивидуальный подход"].map((item, i) => (
                <span key={i} className="flex items-center gap-4">
                  <span className="text-[12px] text-[#9E9E9E] font-light tracking-wide">{item}</span>
                  {i < 2 && <span className="text-[#EDE8E0] text-[10px] select-none">·</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

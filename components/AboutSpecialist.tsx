"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSpecialist() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FEFCF9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
          >
            {/* Gold accent frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A882] opacity-25 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="relative overflow-hidden bg-[#E8D5C0]"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/photo make.png"
                alt="Елена Романова — косметолог-эстетист"
                fill
                className="object-cover object-top"
              />
              {/* Subtle gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(44,44,44,0.18) 0%, transparent 40%)",
                }}
              />
            </div>

            {/* Experience badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.45, ease: [0.4, 0, 0.2, 1] as const }}
              style={{
                width: 108,
                height: 108,
                background: "#2C2C2C",
                boxShadow: "0 16px 48px rgba(44,44,44,0.24)",
              }}
            >
              <span
                className="text-[36px] font-light text-[#FAF8F5] leading-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                8+
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#9E9E9E] uppercase font-light mt-1">
                лет
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-7">
              <div className="w-8 h-px bg-[#C9A882]" />
              <span className="text-[11px] tracking-[0.3em] text-[#C9A882] uppercase font-light">
                {about.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[52px] font-light text-[#2C2C2C] leading-tight mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {about.heading}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[12px] tracking-[0.25em] text-[#9E9E9E] uppercase font-light mb-8"
            >
              {about.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[15px] leading-[1.8] text-[#6B6B6B] font-light mb-4"
            >
              {about.bio}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[15px] leading-[1.8] text-[#6B6B6B] font-light mb-10"
            >
              {about.approach}
            </motion.p>

            {/* Stats 2×2 */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-0 mb-10 border border-[#EDE8E0]"
            >
              {about.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col p-5 ${
                    i % 2 === 0 ? "border-r border-[#EDE8E0]" : ""
                  } ${i < 2 ? "border-b border-[#EDE8E0]" : ""}`}
                >
                  <span
                    className="text-3xl font-light text-[#2C2C2C] leading-none mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-[#9E9E9E] font-light tracking-wide leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {about.credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="flex-shrink-0"
                  >
                    <circle cx="7" cy="7" r="6" stroke="#C9A882" strokeWidth="1" />
                    <path
                      d="M4.5 7 L6.2 8.8 L9.5 5.5"
                      stroke="#C9A882"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[14px] text-[#6B6B6B] font-light">{c}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

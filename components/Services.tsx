"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const serviceIcons = [
  // Чистка кожи — concentric circles (pore cleansing)
  <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="10" stroke="#C9A882" strokeWidth="1.2" />
    <circle cx="14" cy="14" r="5" stroke="#C9A882" strokeWidth="1.2" />
    <circle cx="14" cy="14" r="1.5" fill="#C9A882" />
  </svg>,
  // Химический пилинг — layered curves (skin layers)
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M4 9 Q14 5.5 24 9" stroke="#C9A882" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 14 Q14 10.5 24 14" stroke="#C9A882" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 19 Q14 15.5 24 19" stroke="#C9A882" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,
  // Уходовые процедуры — botanical leaf
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 3 C18 8 20 18 14 25 C8 18 10 8 14 3Z"
      stroke="#C9A882"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M14 3 Q12 13 14 25" stroke="#C9A882" strokeWidth="0.8" strokeLinecap="round" />
  </svg>,
  // Биоревитализация — water drop
  <svg key="3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 3 C14 3 5 15 5 19.5 a9 9 0 0 0 18 0 C23 15 14 3 14 3Z"
      stroke="#C9A882"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M10 20 a4 4 0 0 0 4 4" stroke="#C9A882" strokeWidth="0.8" strokeLinecap="round" />
  </svg>,
  // Мезотерапия — diamond
  <svg key="4" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="#C9A882" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M2 14 L26 14" stroke="#C9A882" strokeWidth="0.7" strokeLinecap="round" />
    <path
      d="M8 7.5 L14 14 L20 7.5"
      stroke="#C9A882"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Брови и ресницы — eye arch
  <svg key="5" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M3 14 Q14 4 25 14" stroke="#C9A882" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3" stroke="#C9A882" strokeWidth="1.2" />
    <path
      d="M3 18 Q14 9 25 18"
      stroke="#C9A882"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>,
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5]">
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
              Услуги
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Процедуры
          </h2>
          <p className="text-[16px] text-[#6B6B6B] font-light max-w-md mx-auto leading-relaxed">
            Каждая процедура подбирается индивидуально после диагностики кожи
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="service-card bg-[#FAF8F5] border border-[#EDE8E0] p-8 md:p-9 flex flex-col gap-5 cursor-default"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex-shrink-0">{serviceIcons[i]}</div>
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="text-xl md:text-2xl font-light text-[#2C2C2C] leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#6B6B6B] font-light flex-1">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#EDE8E0]">
                <span className="text-[14px] tracking-[0.05em] text-[#C9A882] font-light">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.15em] text-[#6B6B6B] uppercase font-light hover:text-[#2C2C2C] transition-colors group"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            Записаться на процедуру
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { pricing } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FEFCF9]">
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
              Стоимость
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Цены
          </h2>
          <p className="text-[16px] text-[#6B6B6B] font-light max-w-sm mx-auto leading-relaxed">
            Прозрачное ценообразование без скрытых доплат
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative flex flex-col p-8 md:p-10 cursor-default ${
                plan.popular
                  ? "bg-[#2C2C2C] text-[#FAF8F5]"
                  : "bg-[#FAF8F5] border border-[#EDE8E0]"
              }`}
              whileHover={{
                y: -6,
                boxShadow: plan.popular
                  ? "0 24px 64px rgba(44,44,44,0.22)"
                  : "0 24px 64px rgba(44,44,44,0.09)",
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#C9A882] text-[#FAF8F5] text-[10px] tracking-[0.22em] uppercase font-light whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3
                className={`text-2xl md:text-3xl font-light mb-6 leading-snug ${
                  plan.popular ? "text-[#FAF8F5]" : "text-[#2C2C2C]"
                }`}
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {plan.title}
              </h3>

              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {plan.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-[5px] text-[#C9A882] text-xs leading-none flex-shrink-0">◦</span>
                    <span
                      className={`text-[14px] font-light leading-snug ${
                        plan.popular ? "text-[#E8D5C0]" : "text-[#6B6B6B]"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`pt-6 border-t ${
                  plan.popular ? "border-[#4A4A4A]" : "border-[#EDE8E0]"
                }`}
              >
                <div
                  className={`text-3xl font-light mb-6 ${
                    plan.popular ? "text-[#FAF8F5]" : "text-[#2C2C2C]"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {plan.price}
                </div>
                <motion.a
                  href="#contact"
                  className={`block text-center py-3.5 text-[12px] tracking-[0.18em] uppercase font-light transition-colors duration-200 ${
                    plan.popular
                      ? "bg-[#C9A882] text-[#FAF8F5] hover:bg-[#D4B896]"
                      : "border border-[#D4B896] text-[#2C2C2C] hover:border-[#C9A882] hover:bg-[#F5E8E0]"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  Записаться
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[12px] text-[#9E9E9E] font-light mt-8 tracking-wide">
          Точная стоимость рассчитывается индивидуально. Первичная консультация — бесплатно.
        </p>
      </div>
    </section>
  );
}

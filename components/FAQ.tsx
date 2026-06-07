"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faq } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FEFCF9]">
      <div className="max-w-3xl mx-auto px-6">
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
              Вопросы
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Часто спрашивают
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col divide-y divide-[#EDE8E0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {faq.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div key={i} variants={fadeUp} className="py-7">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[18px] md:text-xl font-light text-[#2C2C2C] group-hover:text-[#6B6B6B] transition-colors duration-200 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {item.question}
                  </span>

                  {/* Animated circular plus icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                    className={`
                      flex-shrink-0 mt-0.5 w-8 h-8 rounded-full border-2 flex items-center justify-center
                      text-lg leading-none font-light
                      ${
                        isOpen
                          ? "bg-[#E8D5C0] border-[#D4B896] text-[#6B6B6B]"
                          : "border-[#D4B896] text-[#C9A882] group-hover:bg-[#F5E8E0] group-hover:border-[#C9A882]"
                      }
                      transition-colors duration-250
                    `}
                    style={{ transformOrigin: "center" }}
                  >
                    +
                  </motion.div>
                </button>

                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p className="pt-5 pb-1 text-[15px] leading-[1.8] text-[#6B6B6B] font-light">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

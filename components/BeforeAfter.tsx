"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { beforeAfter } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
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
              Результаты
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            До и После
          </h2>
          <p className="text-[16px] text-[#6B6B6B] font-light max-w-sm mx-auto leading-relaxed">
            Реальные результаты клиентов. Фотографии сделаны с согласия пациентов.
          </p>
        </motion.div>

        {/* 2×2 grid on desktop — cards are significantly larger than before */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {beforeAfter.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col gap-5">
              {/* Before / After photo pair */}
              <div className="grid grid-cols-2 gap-3">
                {/* Before */}
                <div className="flex flex-col gap-2">
                  <motion.div
                    className="overflow-hidden relative"
                    style={{ aspectRatio: "3/4", borderRadius: "4px" }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                  >
                    <Image
                      src={`/${i + 1}-before.png`}
                      alt={`До — ${item.procedure}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
                    />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-[11px] tracking-[0.22em] text-[#9E9E9E] uppercase font-light">
                      До
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="flex flex-col gap-2">
                  <motion.div
                    className="overflow-hidden relative"
                    style={{ aspectRatio: "3/4", borderRadius: "4px" }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                  >
                    <Image
                      src={`/${i + 1}-after.png`}
                      alt={`После — ${item.procedure}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
                    />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-[11px] tracking-[0.22em] text-[#9E9E9E] uppercase font-light">
                      После
                    </span>
                  </div>
                </div>
              </div>

              {/* Procedure info with duration badge */}
              <div className="pt-2">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div
                    className="text-[13px] tracking-[0.18em] text-[#C9A882] uppercase font-light"
                  >
                    {item.procedure}
                  </div>
                  <span className="flex-shrink-0 text-[10px] tracking-[0.1em] text-[#9E9E9E] font-light border border-[#EDE8E0] px-2.5 py-1 whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.7] text-[#6B6B6B] font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

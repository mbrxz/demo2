"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C9A882] text-base leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex flex-col gap-5 p-7 md:p-8 bg-[#FEFCF9] border border-[#EDE8E0] h-full transition-shadow duration-300"
      style={{ boxShadow: "0 2px 24px rgba(44,44,44,0.04)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 40px rgba(44,44,44,0.10)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 24px rgba(44,44,44,0.04)";
      }}
    >
      {/* Stars — top of card */}
      <Stars count={review.rating} />

      {/* Review text */}
      <p className="text-[15px] leading-[1.75] text-[#5A5A5A] font-light flex-1 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center gap-4 pt-5 border-t border-[#EDE8E0]">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #E8D5C0 0%, #C9A882 100%)",
          }}
        >
          <span className="text-[12px] tracking-wide text-white font-light">
            {review.initials}
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-[14px] font-light text-[#2C2C2C]">{review.name}</div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#C9A882] font-light">{review.procedure}</span>
            <span className="text-[#EDE8E0] text-[10px] select-none">·</span>
            <span className="text-[11px] text-[#9E9E9E] font-light">{review.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF8F5]">
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
              Отзывы
            </span>
            <div className="w-8 h-px bg-[#C9A882]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Что говорят клиенты
          </h2>
        </motion.div>

        {/* Desktop: 2-column grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {reviews.map((review, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto reviews-scroll snap-x snap-mandatory pb-4">
          {reviews.map((review, i) => (
            <div key={i} className="flex-none w-[86vw] snap-start">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

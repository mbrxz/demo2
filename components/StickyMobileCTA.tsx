"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("#hero-section");
    const contact = document.getElementById("contact");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroBottom = hero
        ? hero.offsetTop + hero.offsetHeight
        : window.innerHeight * 0.7;

      const nearForm = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.5
        : false;

      setVisible(scrollY > heroBottom * 0.6 && !nearForm);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-0 right-0 flex justify-center z-50 md:hidden px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-8 py-4 bg-[#2C2C2C] text-[#FAF8F5] text-[11px] tracking-[0.2em] uppercase font-light rounded-full"
            style={{ boxShadow: "0 8px 32px rgba(44,44,44,0.36)" }}
          >
            Записаться
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 1L11 4.5L7.5 8M1 4.5H11"
                stroke="#C9A882"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

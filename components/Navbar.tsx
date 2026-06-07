"use client";

import { useState, useEffect } from "react";
import { brand, nav } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EDE8E0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none group"
        >
          <span
            className="text-lg md:text-xl tracking-[0.15em] uppercase text-[#2C2C2C] font-light"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {brand.studio}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#9E9E9E] uppercase font-light mt-0.5">
            {brand.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[13px] tracking-[0.12em] text-[#6B6B6B] uppercase font-light hover:text-[#2C2C2C] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="ml-2 px-6 py-2.5 bg-[#2C2C2C] text-[#FAF8F5] text-[12px] tracking-[0.15em] uppercase font-light hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            {nav.cta}
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Меню"
        >
          <span
            className={`block h-px w-6 bg-[#2C2C2C] transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#2C2C2C] transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#2C2C2C] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EDE8E0]`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[13px] tracking-[0.15em] text-[#6B6B6B] uppercase font-light hover:text-[#2C2C2C] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 w-full py-3 bg-[#2C2C2C] text-[#FAF8F5] text-[12px] tracking-[0.15em] uppercase font-light"
          >
            {nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}

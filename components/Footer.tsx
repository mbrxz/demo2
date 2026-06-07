"use client";

import { motion } from "framer-motion";
import { brand, footer } from "@/data/content";

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Telegram">
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="WhatsApp">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.06L2 22L7.1 20.64C8.54 21.49 10.21 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10C9 10 8.5 12.5 10.5 14C11.8 15 14 14.5 14 14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Instagram">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Phone">
    <path
      d="M5 4H9L11 9L8.5 10.5C9.57 12.6 11.4 14.43 13.5 15.5L15 13L20 15V19C20 19.5523 19.5523 20 19 20C10.163 20 4 13.837 4 5C4 4.44772 4.44772 4 5 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Email">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2 7L12 13L22 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const socialLinks = [
  {
    icon: <TelegramIcon />,
    href: `https://t.me/${brand.telegram.replace("@", "")}`,
    label: "Telegram",
  },
  {
    icon: <WhatsAppIcon />,
    href: `https://wa.me/${brand.whatsapp}`,
    label: "WhatsApp",
  },
  {
    icon: <InstagramIcon />,
    href: `https://instagram.com/${brand.instagram}`,
    label: "Instagram",
  },
];

const contactLinks = [
  { icon: <PhoneIcon />, href: `tel:${brand.phone.replace(/\D/g, "")}`, label: brand.phone },
  {
    icon: <TelegramIcon />,
    href: `https://t.me/${brand.telegram.replace("@", "")}`,
    label: brand.telegram,
  },
  {
    icon: <WhatsAppIcon />,
    href: `https://wa.me/${brand.whatsapp}`,
    label: "WhatsApp",
  },
  {
    icon: <EmailIcon />,
    href: `mailto:${brand.email}`,
    label: brand.email,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#FAF8F5] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pb-12 border-b border-[#3A3A3A]">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div
              className="text-xl tracking-[0.15em] uppercase font-light"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {brand.studio}
            </div>
            <div className="text-[10px] tracking-[0.22em] text-[#5A5A5A] uppercase font-light">
              {brand.name}
            </div>
            <p className="text-[14px] text-[#6B6B6B] font-light leading-relaxed mt-3 max-w-xs">
              {footer.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#3A3A3A] text-[#6B6B6B] hover:text-[#C9A882] hover:border-[#C9A882] transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="text-[10px] tracking-[0.25em] text-[#5A5A5A] uppercase font-light mb-4">
              Навигация
            </div>
            <div className="flex flex-col gap-3">
              {footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[#7A7A7A] font-light hover:text-[#FAF8F5] transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] tracking-[0.25em] text-[#5A5A5A] uppercase font-light mb-1">
              Контакты
            </div>

            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 text-[14px] text-[#7A7A7A] font-light hover:text-[#C9A882] transition-colors duration-200 w-fit"
              >
                <span className="opacity-50">{c.icon}</span>
                {c.label}
              </a>
            ))}

            <div className="text-[14px] text-[#7A7A7A] font-light leading-snug mt-2">
              {brand.address}
            </div>

            {/* Mobile nav */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 md:hidden border-t border-[#3A3A3A] pt-4">
              {footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#7A7A7A] font-light hover:text-[#FAF8F5] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.1em] text-[#4A4A4A] font-light">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-[#C9A882] opacity-50" />
            <span className="text-[10px] tracking-[0.2em] text-[#4A4A4A] uppercase font-light">
              {brand.studio}
            </span>
            <div className="w-3 h-px bg-[#C9A882] opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}

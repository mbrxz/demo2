import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ÉCLAT Beauty — Косметолог Елена Романова",
  description:
    "Частный косметолог в Москве. Чистки, пилинги, биоревитализация, мезотерапия. Индивидуальный подход и профессиональные препараты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable}`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home Riser Fix | Luxury Home Services & Custom Craftsmanship",
  description:
    "Northern California's premier home services. Custom builds, renovations, and maintenance with uncompromising quality and craftsmanship.",
  keywords: [
    "luxury home services",
    "custom building",
    "Northern California contractor",
    "home renovation",
    "deck building",
    "fencing",
    "maintenance",
  ],
  openGraph: {
    title: "Home Riser Fix | Luxury Home Services",
    description:
      "Transform your space with Northern California's most trusted craftsmen.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${displayFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}


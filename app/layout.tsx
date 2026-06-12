import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AgeGate from "@/components/ui/age-gate";
import Nav from "@/components/layout/nav";
import { siteUrl } from "@/lib/store";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Magic Dreams Tilburg | Smartshop sinds 1998",
  description:
    "Premium smartshop en headshop in Tilburg. Magic truffels, kweeksets, vaporizers en meer. Kwaliteit en deskundig advies sinds 1998.",
  applicationName: "Magic Dreams Tilburg",
  keywords: [
    "smartshop Tilburg",
    "headshop Tilburg",
    "magic truffels",
    "magic mushroom growkit",
    "cannabiszaden",
    "kratom",
    "CBD",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Magic Dreams Tilburg",
    title: "Magic Dreams Tilburg | Smartshop sinds 1998",
    description:
      "Premium smartshop en headshop in Tilburg. Magic truffels, kweeksets, vaporizers en meer — sinds 1998.",
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="bg-[#0a0f0a] text-[#f4f1e8] min-h-screen">
        <AgeGate />
        <Nav />
        {children}
      </body>
    </html>
  );
}

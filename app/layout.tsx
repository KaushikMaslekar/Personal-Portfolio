import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import { CommandPalette } from "@/components/CommandPalette";
import { SpiderMan } from "@/components/SpiderMan";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushikmaslekar-portfolio.vercel.app"),
  title: {
    default: "kaushikmaslekar | Backend Engineer",
    template: "%s | kaushikmaslekar",
  },
  description:
    "Developer portfolio of Kaushik Maslekar, backend engineer focused on cloud-native systems and distributed architecture.",
  openGraph: {
    title: "kaushikmaslekar | Backend Engineer",
    description:
      "Scalable backend systems, event-driven architecture, and cloud engineering projects by Kaushik Maslekar.",
    url: "https://kaushikmaslekar-portfolio.vercel.app",
    siteName: "kaushikmaslekar Portfolio",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "kaushikmaslekar developer portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "kaushikmaslekar | Backend Engineer",
    description: "Backend and cloud engineering portfolio by Kaushik Maslekar.",
    images: ["/images/og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="kaushikmaslekar-theme"
        >
          <SpiderMan />
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}

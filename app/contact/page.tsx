import type { Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact | kaushikmaslekar",
  description:
    "Contact Kaushik Maslekar for backend and cloud engineering opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

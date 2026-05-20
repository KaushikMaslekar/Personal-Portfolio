import type { Metadata } from "next";

import { EngineeringNotes } from "@/components/EngineeringNotes";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Engineering Notes | kaushikmaslekar",
  description:
    "Short engineering notes by Kaushik Maslekar on RAG, cloud architecture, and distributed systems.",
};

export default function NotesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-2">
        <EngineeringNotes limit={99} showAllLink={false} />
      </main>
      <Footer />
    </>
  );
}

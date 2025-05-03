// app/page.tsx
"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ClassicHeader from "@/components/header/ClassicHeader";
import ClassicHomePage from "@/components/ClassicHomePage";
import CClassicAboutMe from "@/components/ClassicAboutMe";
import ClassicResume from "@/components/ClassicResume";
import ClassicSendMessage from "@/components/ClassicSendMessage";

export default function Portfolio() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* <Header /> */}
      <ClassicHeader/>
      
      <main className="space-y-24 md:space-y-32 pb-24">
        {/* Hero Section */}
        <section id="home" className="scroll-mt-24">
          <ClassicHomePage />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CClassicAboutMe />
          </motion.div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ClassicResume />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ClassicSendMessage />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
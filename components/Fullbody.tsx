"use client";
import React, { useEffect, useMemo, useState } from "react";
import HomePage from "./HomePage";
import { useDispatch, useSelector } from "@/lib/store";
import { setActivePage } from "@/lib/features/header/headerSlice";
import Header from "./header/Header";
import Resume from "./Resume";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";
import SendMessage from "./SendMessege";

import { SectionRefs } from "@/types/sections";

export default function Fullbody() {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const activePage = useSelector((state) => state.header.activePage);

  const sectionRefs: SectionRefs = useMemo(
    () => ({
      home: React.createRef<HTMLElement>(),
      about: React.createRef<HTMLElement>(),
      resume: React.createRef<HTMLElement>(),
      contact: React.createRef<HTMLElement>(),
    }),
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActivePage(entry.target.id as keyof typeof sectionRefs));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [dispatch, sectionRefs]);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsMounted(true), 800);
    }, 1000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Animated Loader */}
      <AnimatePresence>
        {!isMounted && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <Header sectionRefs={sectionRefs} />

        {/* Vertical Navigation */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <div className="flex flex-col gap-4 p-2 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
            {Object.keys(sectionRefs).map((key) => {
              const isActive = key === activePage;
              return (
                <button
                  key={key}
                  onClick={() =>
                    sectionRefs[
                      key as keyof typeof sectionRefs
                    ].current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400 scale-125"
                      : "bg-slate-600 hover:bg-cyan-400 hover:scale-110"
                  }`}
                  aria-label={`Scroll to ${key} section`}
                />
              );
            })}
          </div>
        </div>

        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed right-8 bottom-8 p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 hover:bg-cyan-400/20 transition-colors z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FiChevronUp className="w-6 h-6 text-cyan-400" />
          </motion.button>
        )}

        {/* Content Sections */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section id="home" ref={sectionRefs.home} className="py-24">
            <HomePage />
          </section>

          <section id="about" ref={sectionRefs.about} className="py-24">
            <Aboutme />
          </section>

          <section id="resume" ref={sectionRefs.resume} className="py-24">
            <Resume />
          </section>

          <section id="contact" ref={sectionRefs.contact} className="py-24">
            <SendMessage />
          </section>

          <section className="pt-24 pb-12">
            <Footer />
          </section>
        </div>
      </motion.div>
    </div>
  );
}

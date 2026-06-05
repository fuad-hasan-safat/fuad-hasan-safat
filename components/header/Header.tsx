"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "@/lib/store";
import { setActivePage } from "@/lib/features/header/headerSlice";
import { RootState } from "@/lib/store";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { SectionRefs } from "@/types/sections";

const RESUME_URL =
  "https://docs.google.com/document/d/1dyxCrJJTvh4DfL_aYt3D1Xc4jb-WKbeeY5A4Fe49S50/edit?usp=sharing";

const navItems: { id: keyof SectionRefs; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  sectionRefs: SectionRefs;
}

export default function Header({ sectionRefs }: HeaderProps) {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activePage = useSelector((state: RootState) => state.header.activePage);
  const menuRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(menuRef as React.RefObject<HTMLElement>, () => setMenuOpen(false));

  const handleNavigation = (page: keyof SectionRefs) => {
    dispatch(setActivePage(page));
    setMenuOpen(false);
    sectionRefs[page].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/40 shadow-lg shadow-slate-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative w-9 h-9 shrink-0">
              <Image
                src="/profilepic/FUADlogo.png"
                alt="Fuad"
                width={36}
                height={36}
                className="rounded-full ring-2 ring-cyan-400/40 group-hover:ring-cyan-400/70 transition-all duration-300"
              />
            </div>
            <span className="text-lg font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fuad
            </span>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="relative px-4 py-2 text-sm font-medium group"
              >
                <span className={`transition-colors duration-200 ${
                  activePage === item.id
                    ? "text-cyan-400"
                    : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {item.label}
                </span>
                {activePage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-px bg-linear-to-r from-cyan-400 to-blue-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <button
              onClick={() => window.open(RESUME_URL, "_blank")}
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Resume
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="md:hidden fixed top-0 right-0 w-64 h-screen bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 flex flex-col p-8 pt-20 gap-2"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  activePage === item.id
                    ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => { window.open(RESUME_URL, "_blank"); setMenuOpen(false); }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

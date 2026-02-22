"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function ClassicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState("home");
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useOnClickOutside(navRef as React.RefObject<HTMLElement>, () =>
    setMenuOpen(false),
  );

  return (
    <header className="top-0 z-50 fixed bg-white/95 backdrop-blur-md border-slate-200 border-b w-full">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center space-x-2">
              <span className="font-serif font-medium text-slate-800 group-hover:text-slate-900 text-2xl transition-colors">
                F.H.
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="relative px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setActiveNav(item.id)}
              >
                {item.label}
                {activeNav === item.id && (
                  <motion.div
                    className="bottom-0 left-0 absolute bg-slate-800 w-full h-px"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="/FuadHasan-CV.pdf"
              download
              className="flex items-center gap-2 ml-4 px-4 py-2 border border-slate-300 hover:border-slate-400 rounded-md text-slate-700 hover:text-slate-900 transition-colors"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle navigation"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden top-full right-0 left-0 absolute bg-white border-slate-200 border-t"
            ref={navRef}
          >
            <div className="space-y-4 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="block hover:bg-slate-50 px-3 py-2 rounded-md text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => {
                    setActiveNav(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/FuadHasan-CV.pdf"
                download
                className="block hover:bg-slate-50 px-3 py-2 rounded-md text-slate-600 hover:text-slate-900 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

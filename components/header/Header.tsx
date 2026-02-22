"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "@/lib/store";
import { setActivePage } from "@/lib/features/header/headerSlice";
import { RootState } from "@/lib/store";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { SectionRefs, SectionKey } from "@/types/sections";

interface HeaderProps {
  sectionRefs: SectionRefs;
}

export default function Header({ sectionRefs }: HeaderProps) {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activePage = useSelector((state: RootState) => state.header.activePage);
  const menuRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(menuRef as React.RefObject<HTMLElement>, () =>
    setMenuOpen(false),
  );

  const handleNavigation = (page: keyof SectionRefs) => {
    dispatch(setActivePage(page));
    setMenuOpen(false);
    sectionRefs[page].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navItems: { id: keyof SectionRefs; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300
      ${isSticky ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavigation("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/profilepic/FUADlogo.png"
                alt="Fuad"
                width={40}
                height={40}
                className="rounded-full border-2 border-cyan-400/80"
              />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping-slow" />
            </div>
            <span
              className={`text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent`}
            >
              Fuad
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id as keyof SectionRefs)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`transition-colors ${activePage === item.id ? "text-cyan-600" : "text-slate-600 hover:text-cyan-500"}`}
                >
                  {item.label}
                </span>
                {activePage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </button>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              {/* <Link
                href="/blog"
                className="px-4 py-2 text-slate-600 hover:text-cyan-500 transition-colors"
              >
                Blog
              </Link> */}
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/1dyxCrJJTvh4DfL_aYt3D1Xc4jb-WKbeeY5A4Fe49S50/edit?usp=sharing",
                    "_blank",
                  )
                }
                className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow"
              >
                <FiDownload className="mr-2" />
                Resume
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX className="w-6 h-6 text-slate-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-slate-700" />
            )}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ref={menuRef}
                className="md:hidden fixed top-0 right-0 w-64 h-screen bg-white/95 backdrop-blur-lg shadow-xl p-8"
              >
                <div className=" h-full justify-between">
                  <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() =>
                          handleNavigation(item.id as keyof SectionRefs)
                        }
                        className={`text-lg ${activePage === item.id ? "text-cyan-600" : "text-slate-700"}`}
                      >
                        {item.label}
                      </button>
                    ))}
                    <button
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/document/d/1dyxCrJJTvh4DfL_aYt3D1Xc4jb-WKbeeY5A4Fe49S50/edit?usp=sharing",
                          "_blank",
                        )
                      }
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow"
                    >
                      <FiDownload className="mr-2" />
                      Resume
                    </button>
                  </div>
                  <div className="flex items-center justify-center mt-8">
                    <span className="text-sm text-slate-500">
                      © 2023 Fuad. All rights reserved.
                    </span>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

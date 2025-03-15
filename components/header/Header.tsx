"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import styles1 from "./RotatingImageHeader.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "@/lib/store";
import { setActivePage } from "@/lib/features/header/headerSlice";
import { RootState } from "@/lib/store";
import { FaBars, FaTimes } from "react-icons/fa";
import ButtonM from "../Button";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useOnClickOutside } from "usehooks-ts";

type SectionRefs = {
  home: React.RefObject<HTMLElement>;
  about: React.RefObject<HTMLElement>;
  resume: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
};

interface HeaderProps {
  sectionRefs: SectionRefs;
}

export default function Header({ sectionRefs }: HeaderProps) {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activePage = useSelector((state: RootState) => state.header.activePage);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setMenuOpen(false));

  const handleNavigation = (page: keyof SectionRefs) => {
    dispatch(setActivePage(page));
    setMenuOpen(false);
    sectionRefs[page].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      
      if (menuOpen) setMenuOpen(false);

      const viewportCenter = window.innerHeight / 2;
      let currentSection: keyof SectionRefs | null = null;

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect && rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentSection = key as keyof SectionRefs;
        }
      });

      if (currentSection && activePage !== currentSection) {
        dispatch(setActivePage(currentSection));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, activePage, dispatch, menuOpen]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""} fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg`}>
      <div className="flex justify-between items-center px-4 md:px-24 h-16 md:h-20 font-exo_2">
        
        {/* Logo Section */}
        <div 
          onClick={() => handleNavigation("home")} 
          className="flex items-center space-x-2 cursor-pointer"
        >
           <div className={styles1.imageContainer}>
            <Image
              className={`${styles1.profileImage}`}
              src="/profilepic/FUADlogo.png"
              alt="Fuad"
              width={50}
              height={50}
            />
            <div className={`${styles1.ring}`}></div>
            <div className={`${styles1.ring}`}></div>
            <div className={`${styles1.ring}`}></div>
            <div className={`${styles1.ring}`}></div>
          </div>
          <p className={`text-lg md:text-xl font-semibold tracking-wide ${styles.text3d}`}>
            Fuad
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button 
          aria-label="Toggle menu"
          className="md:hidden z-50 p-2 "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-2xl text-white" /> : <FaBars className="text-2xl text-black" />}
        </button>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`fixed md:static top-0 right-0 w-64 md:w-auto h-screen md:h-auto bg-gray-900 md:bg-transparent 
          flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0 transition-all duration-300 ease-out
          ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100"}`}
        >
          {["home", "about", "resume", "contact"].map((page) => (
            <ButtonM
              key={page}
              text={page.charAt(0).toUpperCase() + page.slice(1)}
              onClick={() => handleNavigation(page as keyof SectionRefs)}
              className={`text-lg md:text-base px-6 py-3 md:py-2 rounded-lg transition-colors
                ${activePage === page 
                  ? "text-primary-400 font-bold bg-gray-800/50 md:bg-transparent"
                  : "text-gray-400 hover:text-primary-300"}`}
            />
          ))}
          
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
            <Link href="/blog" passHref>
              <Button className="w-32 text-center" color="warning" variant="ghost">
                Blog
              </Button>
            </Link>
            
            <a
              href="_FuadHasan SOLID version.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button color="primary" className="w-32">
                Download CV
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";
import React, { useEffect, useState } from "react";
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

  const handleNavigation = (page: keyof SectionRefs) => {
    dispatch(setActivePage(page));
    setMenuOpen(false); // Close menu on navigation

    if (sectionRefs[page].current) {
      sectionRefs[page].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      // Manually check which section is in view
      let currentSection: keyof SectionRefs | null = null;

      Object.keys(sectionRefs).forEach((key) => {
        const ref = sectionRefs[key as keyof SectionRefs];
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // Check if the section is in the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = key as keyof SectionRefs;
          }
        }
      });

      // Dispatch active page only if it changes
      if (currentSection && activePage !== currentSection) {
        dispatch(setActivePage(currentSection));
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially to set the correct section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs, activePage, dispatch]);


  function downloadResume() {

  }


  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="flex justify-between items-center px-6 md:px-24 h-16 md:h-[100px] font-exo_2 text-[18px]">
        <div onClick={() => handleNavigation("home")} className="flex items-center space-x-2 cursor-pointer">
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
          <p className={`text-[20px] font-semibold tracking-widest ${styles.text3d}`}>Fuad</p>
        </div>

        {/* Hamburger Icon */}
        <div className="relative md:hidden ">
          {menuOpen ? (
            <FaTimes size={24} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <FaBars size={24} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={` ${menuOpen ? "translate-y-[0px] opacity-100 transform transition-transform duration-300 ease-in" : "-translate-y-[350px] opacity-0 transform transition-transform duration-300 ease-out"
            } absolute top-[80px] right-0 bg-gray-900 flex flex-col items-center justify-center space-y-4  z-[9998] md:static md:w-auto md:h-auto md:bg-transparent md:translate-y-0 md:opacity-100 md:space-y-0 md:flex-row md:flex md:space-x-4`}
        >
          {["home", "about", "resume", "contact"].map((page) => (
            <ButtonM
              key={page}
              text={page.charAt(0).toUpperCase() + page.slice(1)}
              onClick={() => handleNavigation(page as keyof SectionRefs)}
              className={
                activePage === page
                  ? "text-[#f3b020] font-semibold"
                  : "text-[#c8c5c5] hover:text-[#f3ef20]"
              }
            />
          ))}
          <Link
            href="/blog">

            <Button
              color="primary"
            >Blog</Button>
          </Link>
          <a
            href="_FuadHasan SOLID version.docx.pdf" // Relative path to the PDF in the public folder
            // download="fuadhasan_cv.pdf" // This sets the downloaded file's name
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer"
          >
            <Button
              color="primary"
              onPress={downloadResume}
            >
              Download CV
            </Button>

          </a>

        </nav>
      </div>
    </header>
  );
}
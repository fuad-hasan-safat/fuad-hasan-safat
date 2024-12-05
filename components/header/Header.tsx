"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import styles1 from "./RotatingImageHeader.module.css";
import Image from "next/image";
import Button from "../Button";
import { useDispatch, useSelector } from "@/lib/store";
import { setActivePage } from "@/lib/features/header/headerSlice";
import { RootState } from "@/lib/store";
import { FaBars, FaTimes } from "react-icons/fa";

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
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id") as keyof SectionRefs;
            dispatch(setActivePage(sectionId));
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.keys(sectionRefs).forEach((key) => {
      const ref = sectionRefs[key as keyof SectionRefs];
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [sectionRefs, dispatch]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="flex justify-between items-center px-6 md:px-24 h-16 md:h-[100px] font-exo_2 text-[18px]">
        <div onClick={() => handleNavigation("home")} className="flex items-center space-x-2 cursor-pointer">
          <div className={styles1.imageContainer}>
            <Image
              className={`${styles1.profileImage}`}
              src="/profilepic/fuad.png"
              alt="Fuad"
              width={50}
              height={50}
            />
            <div className={`${styles1.ring}`}></div>
          </div>
          <p className={`text-[20px] font-semibold tracking-widest ${styles.text3d}`}>Fuad</p>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes size={24} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <FaBars size={24} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden "
          } absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex-col md:flex-row items-center space-y-2 md:space-y-0 md:flex md:space-x-4 z-[999999999]`}
        >
          <Button
            text="Home"
            onClick={() => handleNavigation("home")}
            className={activePage === "home" ? "text-[#f6e054]" : "text-[#c8c5c5]"}
          />
          <Button
            text="About"
            onClick={() => handleNavigation("about")}
            className={activePage === "about" ? "text-[#f6e054]" : "text-[#c8c5c5]"}
          />
          <Button
            text="Resume"
            onClick={() => handleNavigation("resume")}
            className={activePage === "resume" ? "text-[#f6e054]" : "text-[#c8c5c5]"}
          />
          <Button
            text="Contact"
            onClick={() => handleNavigation("contact")}
            className={activePage === "contact" ? "text-[#f6e054]" : "text-[#c8c5c5]"}
          />
        </nav>
      </div>
    </header>
  );
}

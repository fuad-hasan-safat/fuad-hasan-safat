"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNodejsFill,
  RiServerFill,
  RiDatabaseFill,
} from "@remixicon/react";

const roles = [
  "Full Stack Developer",
  "MERN & NestJS Engineer",
  "M.Eng Student @ Hochschule Harz",
  "Open to Werkstudent Roles",
];

const socials = [
  {
    icon: RiFacebookBoxFill,
    url: "https://www.facebook.com/fuad.safat.7",
    label: "Facebook",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: RiInstagramFill,
    url: "https://www.instagram.com/fuadsafat",
    label: "Instagram",
    gradient: "from-fuchsia-600 to-pink-400",
  },
  {
    icon: RiLinkedinBoxFill,
    url: "https://www.linkedin.com/in/fuad-hasan-safat",
    label: "LinkedIn",
    gradient: "from-sky-600 to-cyan-400",
  },
];

const skills = [
  { icon: RiReactjsFill, name: "React / Next.js" },
  { icon: RiJavascriptFill, name: "JavaScript / TypeScript" },
  { icon: RiNodejsFill, name: "Node.js / NestJS" },
  { icon: RiServerFill, name: "REST APIs" },
  { icon: RiDatabaseFill, name: "MongoDB / MySQL" },
];

export default function HomePage() {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const word = roles[loopNum % roles.length];
      setCurrentWord(
        isDeleting
          ? word.substring(0, charIndex - 1)
          : word.substring(0, charIndex + 1),
      );
      setCharIndex(charIndex + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum]);

  return (
    <div className="flex items-center w-full min-h-screen">
      <div className="flex md:flex-row flex-col-reverse items-center gap-12 md:gap-16 w-full">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest">
              Full-Stack Engineer · Based in Germany
            </span>
          </div>

          {/* Name + typing */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fuad Hasan
            </h1>
            <div className="text-xl md:text-2xl font-medium text-slate-300 min-h-8">
              {currentWord}
              <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-base leading-relaxed max-w-lg text-justify">
            Building scalable full-stack applications with MERN and NestJS,
            focused on clean architecture and production-grade reliability.
            Pursuing an M.Eng at Hochschule Harz, Germany — open to Werkstudent
            roles.
          </p>

          {/* Core stack */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="bg-cyan-500/10 backdrop-blur-md border border-cyan-400/15 group-hover:border-cyan-400/35 transition-all duration-200 hexagon">
                    <skill.icon className="w-3.75 md:w-4.5 h-3.75 md:h-4.5 text-cyan-400/90" />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800/90 backdrop-blur-sm rounded-md text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <button
                    onClick={() => window.open(item.url, "_blank")}
                    className="relative bg-slate-800/40 backdrop-blur-md p-3 border border-slate-700/30 group-hover:border-transparent rounded-xl transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800/90 backdrop-blur-sm rounded-md text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center shrink-0"
        >
          <div className="group relative w-64 md:w-80 h-64 md:h-80 rounded-full">
            {/* Soft glow */}
            <div className="absolute inset-4 bg-linear-to-br from-cyan-400/25 to-blue-500/25 rounded-full blur-2xl" />
            {/* Slow spinning ring */}
            <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-spin [animation-duration:20s]" />
            {/* Image */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden ring-2 ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-500">
              <Image
                src="/profilepic/fuad.png"
                alt="Fuad Hasan"
                width={512}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

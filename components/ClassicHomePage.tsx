"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const professions = ["Software Developer", "Web Designer", "Problem Solver"];
const skills = ["React", "TypeScript", "Node.js", "HTML5", "CSS3", "SQL", "MongoDB", "Tailwind CSS", "Figma", "Git", "Next.js", "Express.js", "REST APIs", "GraphQL", "Agile Methodologies"];

export default function ClassicHomePage() {
  const [currentProfession, setCurrentProfession] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect (same as previous implementation)
  useEffect(() => {
    const handleTyping = () => {
      const word = professions[loopNum % professions.length];
      setCurrentProfession(
        isDeleting ? word.substring(0, charIndex - 1) : word.substring(0, charIndex + 1)
      );
      setCharIndex(charIndex + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum]);

  return (
    <section className="flex justify-center items-center bg-white px-4 sm:px-8 lg:px-16 min-h-screen">
      <div className="flex lg:flex-row flex-col items-center gap-12 py-16 w-full max-w-6xl">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 lg:w-1/2 lg:text-left text-center"
        >
          <div className="space-y-6">
            <h1 className="font-serif font-medium text-slate-800 text-4xl md:text-5xl">
              Fuad Hasan
            </h1>
            
            <div className="min-h-[3rem] text-slate-600 text-2xl md:text-3xl">
              <span className="border-slate-400 border-r-2 animate-pulse">
                {currentProfession}
              </span>
            </div>

            <p className="mx-auto lg:mx-0 max-w-2xl text-slate-600 text-lg leading-relaxed">
              Crafting elegant web solutions with modern technologies. 
              Specializing in full-stack development with a focus on 
              clean code and user-centered design principles.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4">
            <a
              href="/FuadHasan-CV.pdf"
              download
              className="flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-md text-white transition-colors"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </a>
            
            <div className="flex justify-center gap-4">
              <a href="https://github.com/fuad-hasan-safat" target="_blank" rel="noopener" className="p-3 text-slate-600 hover:text-slate-800 transition-colors">
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/fuad-hasan-safat" target="_blank" rel="noopener" className="p-3 text-slate-600 hover:text-slate-800 transition-colors">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@fuadsafat16@gmail.com" className="p-3 text-slate-600 hover:text-slate-800 transition-colors">
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="pt-8">
            <h3 className="mb-4 text-slate-500 text-sm uppercase tracking-widest">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full text-slate-700 text-sm transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center lg:w-1/2"
        >
          <div className="relative w-64 md:w-80 h-64 md:h-80">
            <Image
              src="/profilepic/fuad.jpg"
              alt="Fuad Hasan"
              width={600}
              height={600}
              className="shadow-lg border-8 border-white rounded-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-slate-200 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
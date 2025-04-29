
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
    RiCodeFill,
    RiHtml5Fill,
    RiCss3Fill,
} from "@remixicon/react";

const words = ["Full-Stack Developer", "Tech Enthusiast", "Problem Solver"];

export default function HomePage() {
    const [currentWord, setCurrentWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const word = words[loopNum % words.length];
            setCurrentWord(
                isDeleting ? word.substring(0, charIndex - 1) : word.substring(0, charIndex + 1)
            );
            setCharIndex(charIndex + (isDeleting ? -1 : 1));

            if (!isDeleting && charIndex === word.length) {
                setTimeout(() => setIsDeleting(true), 800); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingSpeed = isDeleting ? 75 : 150; // Smoother speed adjustments
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, loopNum]);

    const openFacebookProfile = () => {
        window.open("https://www.facebook.com/fuad.safat.7", "_blank");
    };
    const openInstagramProfile = () => {
        window.open("https://www.instagram.com/fuadsafat", "_blank");
    };
    const openLinkedInProfile = () => {
        window.open("https://www.linkedin.com/in/fuad-hasan-safat", "_blank");
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-blue-400 shadow-inner hover:shadow-md hover:shadow-slate-100 px-4 sm:px-8 lg:px-16 rounded-tr-[40%] rounded-bl-[40%] w-full min-h-screen">
            <div className="flex md:flex-row flex-col-reverse items-center gap-16 py-16 w-full max-w-7xl">
                {/* Left Section */}
                <div className="space-y-10 w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Headings */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium text-transparent text-lg uppercase tracking-widest"
                            >
                                Building Digital Experiences
                            </motion.div>

                            <h1 className="font-bold text-5xl md:text-7xl leading-tight">
                                <span className="bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent">
                                    Fuad Hasan
                                </span>
                                <motion.div
                                    className="mt-4 min-h-[4rem] font-medium text-slate-300 text-3xl md:text-4xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {currentWord}
                                    <span className="ml-2 text-cyan-400 animate-pulse">|</span>
                                </motion.div>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="max-w-2xl text-slate-400 text-xl leading-relaxed"
                            >
                                Crafting high-performance web solutions with modern technologies.
                                Specializing in full-stack development with a focus on clean
                                architecture and user-centric design.
                            </motion.p>
                        </div>

                        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
                            {/* Social Links */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-medium text-slate-400 text-sm uppercase tracking-widest">
                                        Connect With Me
                                    </h3>
                                    <div className="flex-1 bg-gradient-to-r from-slate-700/30 to-transparent h-px" />
                                </div>

                                <div className="flex gap-4">
                                    {[
                                        {
                                            icon: RiFacebookBoxFill,
                                            action: openFacebookProfile,
                                            gradient: "from-blue-600 to-blue-400",
                                            label: "Facebook"
                                        },
                                        {
                                            icon: RiInstagramFill,
                                            action: openInstagramProfile,
                                            gradient: "from-fuchsia-600 to-pink-400",
                                            label: "Instagram"
                                        },
                                        {
                                            icon: RiLinkedinBoxFill,
                                            action: openLinkedInProfile,
                                            gradient: "from-sky-600 to-cyan-400",
                                            label: "LinkedIn"
                                        },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative"
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                            <button
                                                onClick={item.action}
                                                className="relative bg-slate-800/40 backdrop-blur-md p-3.5 border border-slate-700/30 group-hover:border-transparent rounded-xl transition-all duration-300"
                                            >
                                                <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                                            </button>
                                            <div className="bottom-full left-1/2 absolute bg-slate-800/90 opacity-0 group-hover:opacity-100 backdrop-blur-sm mb-2 px-2.5 py-1 rounded-md font-medium text-white text-xs transition-opacity -translate-x-1/2 duration-200 delay-100">
                                                {item.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-medium text-slate-400 text-sm uppercase tracking-widest">
                                        Core Expertise
                                    </h3>
                                    <div className="flex-1 bg-gradient-to-r from-slate-700/30 to-transparent h-px" />
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { icon: RiReactjsFill, name: "React" },
                                        { icon: RiJavascriptFill, name: "JavaScript" },
                                        { icon: RiCodeFill, name: "Node.js" },
                                        { icon: RiHtml5Fill, name: "HTML5" },
                                        { icon: RiCss3Fill, name: "CSS3" },
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative"
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        >
                                            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/15 backdrop-blur-md border border-cyan-400/15 group-hover:border-cyan-400/30 transition-all duration-300 hexagon">
                                                <skill.icon className="w-[15px] md:w-[18px] h-[15px] md:h-[18px] text-cyan-400/90 transition-all" />
                                            </div>
                                            <div className="bottom-full left-1/2 absolute bg-slate-800/90 opacity-0 group-hover:opacity-100 backdrop-blur-sm mb-1.5 px-2 py-1 rounded-md font-medium text-white text-xs transition-opacity -translate-x-1/2 duration-200 delay-75">
                                                {skill.name}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Section - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center w-full md:w-1/2"
                >
                    <div className="group relative w-72 md:w-96 h-72 md:h-96">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 opacity-40 blur-3xl rounded-full animate-pulse-slow" />

                        {/* Image Container */}
                        <div className="z-10 relative rounded-full ring-8 ring-cyan-400/10 overflow-hidden group-hover:scale-100 transition-transform duration-300">
                            <Image
                                src="/profilepic/fuad.jpg"
                                alt="Fuad Hasan"
                                width={512}
                                height={512}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Animated Border */}
                        <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-full animate-spin-slow [animation-duration:20s]" />

                        {/* Hover Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border-4 border-cyan-400/30 rounded-full transition-opacity duration-300" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

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
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl w-full flex md:flex-row flex-col-reverse items-center gap-16 py-16">
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-10">
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
                                className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-widest"
                            >
                                Building Digital Experiences
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Fuad Hasan
                                </span>
                                <motion.div
                                    className="mt-4 text-3xl md:text-4xl text-slate-300 font-medium min-h-[4rem]"
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
                                className="text-xl text-slate-400 leading-relaxed max-w-2xl"
                            >
                                Crafting high-performance web solutions with modern technologies.
                                Specializing in full-stack development with a focus on clean
                                architecture and user-centric design.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Social Links */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-sm uppercase tracking-widest text-slate-400 font-medium">
                                        Connect With Me
                                    </h3>
                                    <div className="flex-1 h-px bg-gradient-to-r from-slate-700/30 to-transparent" />
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
                                            className="relative group"
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                            <button
                                                onClick={item.action}
                                                className="p-3.5 rounded-xl bg-slate-800/40 backdrop-blur-md border border-slate-700/30 group-hover:border-transparent transition-all duration-300 relative"
                                            >
                                                <item.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                                            </button>
                                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-800/90 backdrop-blur-sm rounded-md text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-200">
                                                {item.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-sm uppercase tracking-widest text-slate-400 font-medium">
                                        Core Expertise
                                    </h3>
                                    <div className="flex-1 h-px bg-gradient-to-r from-slate-700/30 to-transparent" />
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
                                            className="relative group"
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        >
                                            <div className="hexagon bg-gradient-to-br from-cyan-500/10 to-cyan-600/15 backdrop-blur-md border border-cyan-400/15 group-hover:border-cyan-400/30 transition-all duration-300">
                                                <skill.icon className="w-[15px] h-[15px] md:w-[18px] md:h-[18px] text-cyan-400/90 transition-all" />
                                            </div>
                                            <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800/90 backdrop-blur-sm rounded-md text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-200">
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
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl opacity-40 animate-pulse-slow" />

                        {/* Image Container */}
                        <div className="relative z-10 ring-8 ring-cyan-400/10 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/profilepic/fuad.jpg"
                                alt="Fuad Hasan"
                                width={512}
                                height={512}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20 animate-spin-slow [animation-duration:20s]" />

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
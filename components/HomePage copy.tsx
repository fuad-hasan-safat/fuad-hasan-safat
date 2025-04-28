"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import IconContainer from "./IconContainer";
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
import styles from "./header/RotatingImage.module.css";

const words = ["developer", "programmer", "Professional Coder"];

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
        <div className="flex md:flex-row flex-col-reverse items-center px-4 sm:px-8 lg:px-16 w-full">
            {/* Left Section */}
            <div className="w-full md:w-[50%] text-left">
                <h6 className="font-inter text-[14px] text-slate-400 sm:text-[16px] uppercase">
                    Welcome to My World
                </h6>
                <h1 className="pt-3 font-bold text-2xl sm:text-4xl leading-[40px] sm:leading-[60px]">
                    Hi, I’m{" "}
                    <span className="font-dancing_script text-[#f3d139] text-3xl sm:text-5xl">
                        Fuad Hasan
                    </span>
                    <br />
                    a{" "}
                    <span className="text-slate-300 uppercase transition-all duration-300 ease-in-out">
                        {currentWord}
                    </span>
                    <span className="ml-1 font-extralight text-gray-400 typing-cursor">|</span>
                </h1>
                <p className="pt-4 text-[18px] text-justify sm:text-[18px] font-mono leading-10">
                Enthusiastic and dedicated software developer seeking an opportunity to apply my strong technical skills and passion for coding to effectively contribute to innovative software projects. I am eager to collaborate with a dynamic team of professionals to enhance my knowledge, grow as a software engineer, and deliver cutting-edge solutions that drive technological advancements in the industry. As a driven learner, I aspire to refine my skills under the mentorship of experienced developers and actively contribute to process enhancement within the team.
                </p>

                {/* Social Links and Skills */}
                <section
                    id="sociallink"
                    className="flex md:flex-row flex-col justify-between items-center pt-8 md:pt-12"
                >
                    {/* Social Links */}
                    <div className="mb-6 md:mb-0 w-full md:w-[50%]">
                        <h5 className="pb-4 text-slate-400 text-sm uppercase tracking-[5px]">
                            Find me on
                        </h5>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <IconContainer
                                customClass="animate-swapColors1 transition-all duration-300 ease-in-out"
                                isClickable={true}
                                onClick={openFacebookProfile}
                            >
                                <RiFacebookBoxFill />
                            </IconContainer>
                            <IconContainer
                                customClass="animate-swapColors2 transition-all duration-300 ease-in-out"
                                isClickable={true}
                                onClick={openInstagramProfile}
                            >
                                <RiInstagramFill />
                            </IconContainer>
                            <IconContainer
                                customClass="animate-swapColors3 transition-all duration-300 ease-in-out"
                                isClickable={true}
                                onClick={openLinkedInProfile}
                            >
                                <RiLinkedinBoxFill />
                            </IconContainer>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="w-full md:w-[50%]">
                        <h5 className="pb-4 text-slate-400 text-sm uppercase tracking-[5px]">
                            Best Skills On
                        </h5>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <IconContainer customClass="shadow-[#ddf95c] text-[#ddf95c]">
                                <RiJavascriptFill />
                            </IconContainer>
                            <IconContainer customClass="shadow-[#9ff95c] text-[#9ff95c]">
                                <RiCodeFill />
                            </IconContainer>
                            <IconContainer customClass="shadow-[#5cf99f] text-[#5cf99f]">
                                <RiReactjsFill />
                            </IconContainer>
                            <IconContainer customClass="shadow-[#5cf9d4] text-[#5cf9d4]">
                                <RiHtml5Fill />
                            </IconContainer>
                            <IconContainer customClass="shadow-[#f75cb1] text-[#f75cb1]">
                                <RiCss3Fill />
                            </IconContainer>
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center mb-6 md:mb-0 w-full md:w-[50%]">
                <div className={`${styles.imageContainer} shadow-lg shadow-slate-400 hover:shadow-slate-500`}>
                    <Image
                        className={`${styles.profileImage}`}
                        src="/profilepic/fuad.jpg"
                        alt="fuad"
                        width={300}
                        height={300}
                    />

                    {/* <div className={`${styles.ring}`}></div>
                    <div className={`${styles.ring}`}></div>
                    <div className={`${styles.ring}`}></div>
                    <div className={`${styles.ring}`}></div> */}


                </div>
            </div>

        </div>
    );
}

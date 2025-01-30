"use client";
import React, { useEffect, useMemo, useState } from "react";
import HomePage from "./HomePage";
import { useDispatch } from "@/lib/store";
import { setActivePage } from "@/lib/features/header/headerSlice";
import Header from "./header/Header";
import Resume from "./Resume";
import Aboutme from "./Aboutme";
import SendMessage from "./SendMessege";
import Footer from "./Footer";
import Loader from "./Loader";

export default function Fullbody() {
    const dispatch = useDispatch();
    const [isMounted, setIsMounted] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const sectionRefs = useMemo(() => ({
        home: React.createRef<HTMLElement>(),
        about: React.createRef<HTMLElement>(),
        resume: React.createRef<HTMLElement>(),
        contact: React.createRef<HTMLElement>(),
    }), []);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    dispatch(setActivePage(entry.target.id as keyof typeof sectionRefs));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.7,
        });

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [dispatch, sectionRefs]);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true); // Start fading out the loader
            setTimeout(() => {
                setIsMounted(true); // Finally remove loader after animation
            }, 800); // Fade-out duration
        }, 1500);
    }, []);

    return (
        <div className="relative w-full h-screen">
            {/* Loader Overlay */}
            {!isMounted && (
                <div className={`fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                    <Loader />
                </div>
            )}

            {/* Main Content */}
            <div className={`transition-opacity duration-700 ${fadeOut ? "opacity-100" : "opacity-0"}`}>
                <Header sectionRefs={sectionRefs} />
                <div id="fullcombinepage" className="relative px-[30px] md:px-[200px]">
                    <h1 className="top-[50%] right-[-42px] z-[9999] fixed shadow-gray-400 shadow-sm hover:shadow-md hover:shadow-gray-200 px-[15px] py-[5px] font-exo_2 text-[26px] text-slate-400 hover:text-white tracking-[10px] cursor-pointer rotate-[90deg]">
                        Fuad
                    </h1>

                    <section id="home" ref={sectionRefs.home} className="pt-[110px]">
                        <HomePage />
                    </section>

                    <section id="about" ref={sectionRefs.about} className="pt-[110px]">
                        <Aboutme />
                    </section>

                    <section id="resume" ref={sectionRefs.resume} className="pt-[110px]">
                        <Resume />
                    </section>

                    <section id="contact" ref={sectionRefs.contact} className="pt-[110px]">
                        <SendMessage />
                    </section>

                    <section className="pt-[90px]">
                        <Footer />
                    </section>
                </div>
            </div>
        </div>
    );
}

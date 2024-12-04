"use client";
import React, { useEffect, useRef } from 'react';
import HomePage from './HomePage';
import { useDispatch } from '@/lib/store';
import { setActivePage } from '@/lib/features/header/headerSlice';
import Header from './header/Header';
import Resume from './Resume';

export default function Fullbody() {
    const dispatch = useDispatch();

    // Define type for sectionRefs object
    const sectionRefs: { 
        home: React.RefObject<HTMLElement>; 
        about: React.RefObject<HTMLElement>; 
        resume: React.RefObject<HTMLElement>; 
        contact: React.RefObject<HTMLElement>; 
    } = {
        home: useRef<HTMLElement>(null),
        about: useRef<HTMLElement>(null),
        resume: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    useEffect(() => {
        // Define type for entries as IntersectionObserverEntry[]
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
    }, [dispatch]);

    return (
        <>
            <Header sectionRefs={sectionRefs} />
            <div id='fullcombinepage' className='relative px-[200px]'>
                <h1 className='top-[50%] right-[-42px] z-[99999] fixed shadow-gray-400 shadow-sm hover:shadow-md hover:shadow-gray-200 px-[15px] py-[5px] font-exo_2 text-[26px] text-slate-400 hover:text-white tracking-[10px] cursor-pointer rotate-[90deg]'>
                    Fuad
                </h1>

                <section id="home" ref={sectionRefs.home} className="pt-[110px]">
                    <HomePage />
                </section>

                <section id="about" ref={sectionRefs.about} className="pt-[110px]">
                    <h1>ABOUT</h1>
                    <HomePage />
                </section>

                <section id="resume" ref={sectionRefs.resume} className="pt-[110px]">
                    <Resume />
                </section>

                <section id="contact" ref={sectionRefs.contact} className="pt-[110px]">
                    <h1>CONTACT</h1>
                    <HomePage />
                </section>
            </div>
        </>
    );
}

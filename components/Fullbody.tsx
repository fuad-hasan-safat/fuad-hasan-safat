"use client";
import React, { useEffect, useMemo } from 'react';
import HomePage from './HomePage';
import { useDispatch } from '@/lib/store';
import { setActivePage } from '@/lib/features/header/headerSlice';
import Header from './header/Header';
import Resume from './Resume';
import Aboutme from './Aboutme';
import SendMessage from './SendMessege';
import Footer from './Footer';

export default function Fullbody() {
    const dispatch = useDispatch();

    const sectionRefs = useMemo(() => {
        return {
            home: React.createRef<HTMLElement>(),
            about: React.createRef<HTMLElement>(),
            resume: React.createRef<HTMLElement>(),
            contact: React.createRef<HTMLElement>(),
        };
    }, []);

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
    }, [dispatch, sectionRefs]);

    return (
        <>
            <Header sectionRefs={sectionRefs} />
            <div id='fullcombinepage' className='relative px-[30px] md:px-[200px]'>
                <h1 className='top-[50%] right-[-42px] z-[99999] fixed shadow-gray-400 shadow-sm hover:shadow-md hover:shadow-gray-200 px-[15px] py-[5px] font-exo_2 text-[26px] text-slate-400 hover:text-white tracking-[10px] cursor-pointer rotate-[90deg]'>
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

                <section className='pt-[90px]'>
                    <Footer/>
                </section>
            </div>
        </>
    );
}

'use client'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardFooter, Image, Link } from "@heroui/react";
import LoaderHeart from '../LoaderHeart';

export default function BlogHome() {
     const [isMounted, setIsMounted] = useState(false);
        const [fadeOut, setFadeOut] = useState(false);

         useEffect(() => {
                setTimeout(() => {
                    setFadeOut(true); // Start fading out the loader
                    setTimeout(() => {
                        setIsMounted(true); // Finally remove loader after animation
                    }, 700); // Fade-out duration
                }, 900);
            }, []);
        

    return (
        <>
          {/* Loader Overlay */}
          {!isMounted && (
                <div className={`fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                    <LoaderHeart />
                </div>
            )}
        <div className={`max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8  transition-opacity duration-700 ${fadeOut ? "opacity-100" : "opacity-0"}`}>
            <Link href="/blog/dasalphabet" className="col-span-12 sm:col-span-7 z-[9]">
                <Card className="w-full h-[300px] cursor-pointer shadow-md shadow-slate-500 hover:shadow-amber-500">
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover hover:scale-105"
                        src="/blogthumb/germanalphabet2.jpg"
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
                        <div className="flex flex-grow gap-2 items-center">

                            <div className="flex flex-col">
                                <p className="text-tiny text-white">জার্মান শিখি</p>
                                <p className="text-base text-white">জার্মান বর্ণমালা</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" className='bg-[#fd9d20da] text-white font-semibold z-[9999] shadow-md shadow-slate-50'>
                            FUAD
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
            <Link href="/blog/begrusungen" className="col-span-12 sm:col-span-5 z-[9]">
                <Card className="w-full h-[300px] cursor-pointer shadow-md shadow-slate-500 hover:shadow-amber-500">

                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover hover:scale-105"
                        src="/blogthumb/germangreeting2.jpg"
                    />

                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
                        <div className="flex flex-grow gap-2 items-center">

                            <div className="flex flex-col">
                                <p className="text-tiny text-white">জার্মান শিখি</p>
                                <p className="text-base text-white">জার্মান শুভেচ্ছা</p>
                            </div>
                        </div>

                        <Button radius="full" size="sm" className='bg-[#fd9d20da] text-white font-semibold z-[9999] shadow-md shadow-slate-50'>
                            FUAD
                        </Button>

                    </CardFooter>
                </Card>
            </Link>
        </div>
        </>
    )
}

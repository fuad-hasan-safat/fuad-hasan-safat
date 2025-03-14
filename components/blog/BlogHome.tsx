'use client'
import React from 'react'
import { Button, Card, CardFooter, Image, Link } from "@heroui/react";

export default function BlogHome() {
    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
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
    )
}

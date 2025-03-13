'use client'
import React from 'react'
import { Card, CardHeader, Image, Link } from "@heroui/react";

export default function BlogHome() {
    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-4 grid-rows-2 px-8">
            <Link href="/blog/dasalphabet" className="col-span-4 sm:col-span-4">
                <Card className="h-[300px] cursor-pointer">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">জার্মান শিখি</p>
                        <h4 className="text-white font-medium text-large">জার্মান বর্ণমালা</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://heroui.com/images/card-example-4.jpeg"
                    />
                </Card>
            </Link>
        </div>
    )
}

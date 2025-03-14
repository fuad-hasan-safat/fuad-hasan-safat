import Greetings from '@/components/blog/Greeting'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "German Greetings | Learn with Audio",
    description: "Learn common German greetings with Bangla pronunciation and meaning. Click to hear the pronunciation!",
    openGraph: {
      title: "German Greetings | Learn with Audio",
      description: "Learn common German greetings with Bangla pronunciation and meaning. Click to hear the pronunciation!",
      url: "https://fuad-hasan-safat.vercel.app/blog/begrusungen",
      type: "website",
      images: [
        {
          url: "https://fuad-hasan-safat.vercel.app/blogthumb/germangreeting1.jpg",
          width: 1200,
          height: 630,
          alt: "German Greetings with Bangla Translation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "German Greetings | Learn with Audio",
      description: "Learn common German greetings with Bangla pronunciation and meaning. Click to hear the pronunciation!",
      images: ["https://fuad-hasan-safat.vercel.app/blogthumb/germangreeting1.jpg"],
    },
  };
export default function Page() {
    return (
        <>
            <Greetings/>
        </>
    )
}

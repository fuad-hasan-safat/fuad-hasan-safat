import BlogHome from '@/components/blog/BlogHome'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Blog Fuad Hasan Safat",
  description: "This is A blog Page By Fuad Hasan Safat",
  keywords: ["Fuad Hasan", "Software Developer", "Bangladesh", "Full Stack Developer", "Database Design", "Frontend Development", "Backend Development"],
  authors: [{ name: "Fuad Hasan Safat", url: "https://fuad-hasan-safat.vercel.app/blog" }],
  creator: "Fuad Hasan Safat",
  publisher: "Fuad Hasan Safat",
  openGraph: {
    title: "Fuad Hasan Safat - Software Developer",
    description: "Discover Fuad Hasan Safat, a software developer from Rowmari, Kurigram, Bangladesh, specializing in modern web technologies, backend development, and database design.",
    url: "https://fuad-hasan-safat.vercel.app/blog",  // Update with your actual website URL
    siteName: "Fuad Hasan Safat",
    images: [
      {
        url: "/blogthumb/BLOG.png",
        width: 1200,
        height: 630,
        alt: "Fuad Hasan Safat Profile Picture"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fuad_safat",  // Update with your actual Twitter handle
    creator: "@fuad_safat", // Update with your actual Twitter handle
    title: "Fuad Hasan Safat - Software Developer",
    description: "Software developer from Rowmari, Kurigram, Bangladesh, specializing in modern web development and database design.",
    images: "/blogthumb/BLOG.png"
  },


};
export default function Page() {
  return (
    <div className='flex justify-center items-center place-content-center pt-10'>
      <BlogHome/>
    </div>
  )
}

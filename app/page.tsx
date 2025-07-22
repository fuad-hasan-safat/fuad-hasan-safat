import Fullbody from "@/components/Fullbody";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Fuad Hasan Safat | Full Stack Software Developer in Bangladesh",
  description:
    "Fuad Hasan Safat is a professional full stack software developer from Rowmari, Kurigram, Bangladesh. Expert in frontend, backend, database design, API development, and modern web technologies.",
  keywords: [
    "Fuad Hasan Safat",
    "Fuad Hasan",
    "Fuad",
    "Hasan",
    "Safat",
    "Software Developer Bangladesh",
    "Full Stack Developer Bangladesh",
    "Frontend Developer Bangladesh",
    "Backend Developer Bangladesh",
    "Web Developer Rowmari",
    "Kurigram Developer",
    "Modern Web Technologies",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "API Developer",
    "Bangladeshi Software Engineer"
  ],
  authors: [
    {
      name: "Fuad Hasan Safat",
      url: "https://fuad-hasan-safat.vercel.app/"
    }
  ],
  creator: "Fuad Hasan Safat",
  publisher: "Fuad Hasan Safat",
  openGraph: {
    title: "Fuad Hasan Safat | Full Stack Software Developer in Bangladesh",
    description:
      "Discover the professional portfolio of Fuad Hasan Safat – a passionate and skilled full stack software developer from Rowmari, Kurigram, Bangladesh. Specialized in modern frontend, backend, and database systems.",
    url: "https://fuad-hasan-safat.vercel.app/",
    siteName: "Fuad Hasan Safat - Software Developer",
    images: [
      {
        url: "/profilepic/fuad.jpg",
        width: 1200,
        height: 630,
        alt: "Fuad Hasan Safat Profile Picture"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@fuad_safat",
    creator: "@fuad_safat",
    title: "Fuad Hasan Safat | Full Stack Developer from Bangladesh",
    description:
      "Explore Fuad Hasan Safat’s portfolio – expert in frontend, backend, database design, and scalable web development.",
    images: ["/profilepic/fuad.jpg"]
  }
};

export default function Home() {
  return (
    <main className="h-full">
      <Fullbody/>
    </main>
  );
}

import Fullbody from "@/components/Fullbody";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Fuad Hasan | Werkstudent Full Stack Developer in Germany | MERN, NestJS",
  
  description:
    "Fuad Hasan is a Full Stack Developer based in Germany with 2+ years of experience building scalable web applications using MERN and NestJS. MSc student at Hochschule Harz (University of Applied Sciences). Open to Werkstudent Software Developer roles.",
  
  keywords: [
    // Identity
    "Fuad Hasan",
    "Fuad Hasan Safat",

    // Germany + Work
    "Full Stack Developer Germany",
    "Software Developer Germany",
    "Werkstudent Software Developer Germany",
    "Werkstudent Full Stack Developer",
    "Working Student Developer Germany",
    "Part-time Developer Germany",

    // Student Positioning
    "International Student Developer Germany",
    "MSc Student Germany Developer",
    "Hochschule Harz Developer",
    "Harz University Student Developer",

    // Tech Stack
    "MERN Stack Developer Germany",
    "NestJS Developer Germany",
    "React Next.js Developer Germany",
    "Node.js Backend Developer Germany",
    "API Developer Germany",

    // Variations recruiters use
    "Junior Software Engineer Germany",
    "Full Stack Engineer Germany",
    "Backend Developer NestJS",
    "Frontend Developer React",
    "Web Developer Germany"
  ],

  authors: [
    {
      name: "Fuad Hasan",
      url: "https://fuadhasan.pro.bd/"
    }
  ],

  creator: "Fuad Hasan",
  publisher: "Fuad Hasan",

  openGraph: {
    title: "Fuad Hasan | Werkstudent Full Stack Developer | Germany",
    description:
      "Portfolio of Fuad Hasan – Full Stack Developer based in Germany with experience in MERN and NestJS. MSc student at Hochschule Harz. Actively seeking Werkstudent opportunities.",
    url: "https://fuadhasan.pro.bd/",
    siteName: "Fuad Hasan - Full Stack Developer",
    images: [
      {
        url: "/profilepic/fuad.jpg",
        width: 1200,
        height: 630,
        alt: "Fuad Hasan Profile Picture"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    site: "@fuad_safat",
    creator: "@fuad_safat",
    title: "Werkstudent Full Stack Developer in Germany | Fuad Hasan",
    description:
      "Full Stack Developer (MERN & NestJS) based in Germany. MSc student at Hochschule Harz. Open to Werkstudent roles.",
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

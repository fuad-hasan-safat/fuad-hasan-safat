import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Inter, Dancing_Script, Exo_2, Playwrite_US_Modern, Geologica } from 'next/font/google';
import { Providers } from "@/lib/Providers";
import { HeroProviders } from "./heroproviders";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Fuad Hasan | Werkstudent Full Stack Developer in Germany | MERN, NestJS",
  
  description:
    "Fuad Hasan is a Full Stack Developer based in Germany with 2+ years of experience in MERN and NestJS. MSc student in Innovation & Technology Management at Harz University. Open to Werkstudent Software Developer roles in Germany.",
  
  keywords: [
    // Core Identity
    "Fuad Hasan",
    "Full Stack Developer Germany",
    "Software Developer Germany",

    // Primary Target (VERY IMPORTANT)
    "Werkstudent Software Developer Germany",
    "Werkstudent Full Stack Developer",
    "Werkstudent Node.js Developer",
    "Werkstudent React Developer",

    // Student + Hiring Intent
    "Student Software Developer Germany",
    "International Student Developer Germany",
    "Part-time Developer Germany",
    "Working Student Developer Germany",

    // Tech Stack SEO
    "MERN Stack Developer Germany",
    "NestJS Developer Germany",
    "React Next.js Developer Germany",
    "Node.js Backend Developer Germany",
    "API Developer Germany",

    // Recruiter Search Variations
    "Junior Software Engineer Germany",
    "Full Stack Engineer Germany",
    "Web Developer Germany",
    "Backend Developer NestJS",
    "Frontend Developer React",

    // University Signal
    "Harz University Student Developer",
    "MSc Student Germany Developer"
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
      "Full Stack Developer based in Germany with experience in MERN and NestJS. MSc student at Harz University. Actively seeking Werkstudent Software Developer opportunities.",
    url: "https://fuadhasan.pro.bd/",
    siteName: "Fuad Hasan - Werkstudent Developer",
    images: [
      {
        url: "/profilepic/Fuad_Hasan_Safat_Pro.png",
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
      "MERN & NestJS developer based in Germany. MSc student at Harz University. Open to Werkstudent roles.",
    images: ["/profilepic/Fuad_Hasan_Safat_Pro.png"]
  }
};


const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--dancing_script',
  weight: ["400", "500", "600", "700"]
});

const exo_2 = Exo_2({
  subsets: ['latin'],
  variable: "--exo_2",
  weight: ["400", "500", "600", "700"]
});

const playwrite = Playwrite_US_Modern({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["serif", "sans-serif"],
  variable: "--playwrite",
  weight: ["400", "100", "200", "300"]
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geologica = Geologica({
  subsets: ['latin'],
  variable: '--geologica',
  weight: ["400", "500", "600", "700"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap" rel="stylesheet"></link> */}
          <meta property="og:image" content="/profilepic/Fuad_Hasan_Safat_Pro.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="630" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body
          className={`${inter.variable} ${dancing_script.variable} ${exo_2.variable} ${geistSans.variable} ${geistMono.variable} ${playwrite.variable} ${geologica.variable} antialiased`}
        >


          <HeroProviders>
            {children}
          </HeroProviders>

        </body>
      </html>
    </Providers>
  )
}

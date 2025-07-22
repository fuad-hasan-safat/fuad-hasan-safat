import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Inter, Dancing_Script, Exo_2, Playwrite_US_Modern, Geologica } from 'next/font/google';
import { Providers } from "@/lib/Providers";
import { HeroProviders } from "./heroproviders";
import Head from "next/head";

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
          <meta property="og:image" content="/profilepic/fuad.jpg" />
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
